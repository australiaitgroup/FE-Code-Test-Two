import {
    HANDLE_INPUT_CHANGE,
    HANDLE_PAGE_CHANGE,
    HANDLE_SEARCH_RESULT,
    SEARCH,
    SET_SEARCH_ERROR,
} from '../actions/search';
import { ISearchResult } from '../../types/search';
import { IAction, ISearchState } from '../../types/stateAndAction';

const initialState = {
    error: null,
    isFetching: false,
    input: '',
    page: 1,
    result: {} as ISearchResult,
    searchFor: '',
};

export default function reducer(
    state: ISearchState = initialState,
    action: IAction,
): ISearchState {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                error: null,
                isFetching: true,
                page: 1,
                result: {} as ISearchResult,
                searchFor: action.searchFor,
            };

        case HANDLE_SEARCH_RESULT:
            if (state.searchFor !== action.result.query) return state;
            return { ...state, isFetching: false, result: action.result };

        case HANDLE_INPUT_CHANGE:
            return { ...state, input: action.input };

        case HANDLE_PAGE_CHANGE:
            return { ...state, isFetching: true, page: action.page };

        case SET_SEARCH_ERROR:
            return { ...state, error: action.error, isFetching: false };

        default:
            return state;
    }
}
