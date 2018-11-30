import reducer from '../search';
import {
    handleInputChangeAction,
    handlePageChangeAction,
    handleSearchResultAction,
    searchAction,
    setSearchErrorAction,
} from '../../actions/search';
import { ISearchResult } from '../../../types/search';
import { deepClone } from '../../../../tools/testHelpers/storeHelpers';

const searchResult = require('../../../../tools/testHelpers/searchTestsMockData.json').searchResult as ISearchResult;

describe('search reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            error: null,
            isFetching: false,
            input: '',
            page: 1,
            result: {},
            searchFor: '',
        };
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should handle SEARCH action', () => {
        const expectedState = {
            ...initialState,
            isFetching: true,
            searchFor: 'test',
        };

        const state = reducer(initialState, searchAction('test'));
        expect(state).toEqual(expectedState);
    });

    describe('should HANDLE_SEARCH_RESULT action', () => {
        let stateDuringSearch;

        beforeEach(() => {
            stateDuringSearch = {
                ...initialState,
                isFetching: true,
                searchFor: 'test',
            };
        });

        it('searchFor matches query', () => {
            const state = reducer(stateDuringSearch, handleSearchResultAction(deepClone(searchResult)));
            expect(state).toEqual({
                ...stateDuringSearch,
                result: searchResult,
                isFetching: false,
            });
        });

        it('searchFor does not match query', () => {
            const result = deepClone(searchResult);
            result.query = 'something else';

            const state = reducer(stateDuringSearch, handleSearchResultAction(result));
            expect(state).toEqual(stateDuringSearch);
        });
    });

    it('should HANDLE_INPUT_CHANGE action', () => {
        const expectedState = {
            ...initialState,
            input: 'react',
        };

        const state = reducer(initialState, handleInputChangeAction('react'));
        expect(state).toEqual(expectedState);
    });

    it('should HANDLE_PAGE_CHANGE action', () => {
        const expectedState = {
            ...initialState,
            isFetching: true,
            page: 2,
        };

        const state = reducer(initialState, handlePageChangeAction(2));
        expect(state).toEqual(expectedState);
    });

    it('should SET_SEARCH_ERROR action', () => {
        const stateDuringSearch = {
            ...initialState,
            isFetching: true,
        };

        const expectedState = {
            ...initialState,
            isFetching: false,
            error: new Error('message'),
        };

        const state = reducer(stateDuringSearch, setSearchErrorAction(new Error('message')));
        expect(state).toEqual(expectedState);
    });
});
