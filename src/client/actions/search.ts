import fetch from '../utils/fetch';
import generateURL from '../utils/searchUrlHelpers';
import { ISearchResult } from '../../types/search';

// action types

export const SEARCH = 'SEARCH';
export const HANDLE_SEARCH_RESULT = 'HANDLE_SEARCH_RESULT';
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const HANDLE_PAGE_CHANGE = 'HANDLE_PAGE_CHANGE';
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR';

// action creators
​
export function searchAction(searchFor: string) {
    return { searchFor, type: SEARCH };
}

export function handleSearchResultAction(result: ISearchResult) {
    return { result, type: HANDLE_SEARCH_RESULT };
}

export function handleInputChangeAction(input: string) {
    return { input, type: HANDLE_INPUT_CHANGE };
}

export function handlePageChangeAction(page: number) {
    return { page, type: HANDLE_PAGE_CHANGE };
}

export function setSearchErrorAction(error: Error) {
    return { error, type: SET_SEARCH_ERROR };
}

// async actions

export function doSearch(page?: number) {
    return (dispatch, getState) => {
        const input = getState().search.input;
        const settings = getState().settings;
        const url = generateURL(settings, input, page);

        if (page) {
            dispatch(handlePageChangeAction(page));
        } else {
            dispatch(searchAction(input));
        }

        return fetch(url)
            .then(result => dispatch(handleSearchResultAction(result)))
            .catch(err => dispatch(setSearchErrorAction(err)));
    };
}
