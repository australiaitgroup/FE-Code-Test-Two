import {
    doSearch,
    handleInputChangeAction,
    handlePageChangeAction,
    handleSearchResultAction,
    searchAction,
    setSearchErrorAction,
} from '../search';
import { ISearchResult } from '../../../types/search';
import apiMock from '../../../../tools/testHelpers/searchAPIMock';
import {
    createMockStore,
    deepClone,
    getInitialState,
} from '../../../../tools/testHelpers/storeHelpers';

const searchResult = require('../../../../tools/testHelpers/searchTestsMockData.json').searchResult as ISearchResult;

describe('search action', () => {
    it('should return SEARCH action', () => {
        expect(searchAction('test')).toEqual({
            searchFor: 'test',
            type: 'SEARCH',
        });
    });

    it('should return HANDLE_SEARCH_RESULT action', () => {
        expect(handleSearchResultAction(deepClone(searchResult))).toEqual({
            result: searchResult,
            type: 'HANDLE_SEARCH_RESULT',
        });
    });

    it('should return HANDLE_INPUT_CHANGE action', () => {
        expect(handleInputChangeAction('test')).toEqual({
            input: 'test',
            type: 'HANDLE_INPUT_CHANGE',
        });
    });

    it('should return HANDLE_PAGE_CHANGE action', () => {
        expect(handlePageChangeAction(2)).toEqual({
            page: 2,
            type: 'HANDLE_PAGE_CHANGE',
        });
    });

    it('should return SET_SEARCH_ERROR action', () => {
        expect(setSearchErrorAction(new Error('message'))).toEqual({
            error: new Error('message'),
            type: 'SET_SEARCH_ERROR',
        });
    });

    describe('doSearch', () => {
        let store;

        beforeEach(() => {
            store = createMockStore(getInitialState());
        });

        it('does normal search', async () => {
            apiMock.get('/search?query=&tags=(story,comment)&hitsPerPage=20')
                .reply(200, searchResult);

            await store.dispatch(doSearch());
            const actions = store.getActions();

            expect(actions[0]).toEqual({
                searchFor: '',
                type: 'SEARCH',
            });
            expect(actions[1]).toEqual({
                result: searchResult,
                type: 'HANDLE_SEARCH_RESULT',
            });
        });

        it('changes page', async () => {
            apiMock.get('/search?query=&tags=(story,comment)&hitsPerPage=20&page=1')
                .reply(200, searchResult);

            await store.dispatch(doSearch(2));
            const actions = store.getActions();

            expect(actions[0]).toEqual({
                page: 2,
                type: 'HANDLE_PAGE_CHANGE',
            });
            expect(actions[1]).toEqual({
                result: searchResult,
                type: 'HANDLE_SEARCH_RESULT',
            });
        });

        it('error on search', async () => {
            apiMock.get('/search?query=&tags=(story,comment)&hitsPerPage=20')
                .reply(500, 'something went wrong');

            await store.dispatch(doSearch());
            const actions = store.getActions();

            expect(actions[0]).toEqual({
                searchFor: '',
                type: 'SEARCH',
            });
            expect(actions[1].type).toBe('SET_SEARCH_ERROR');
            expect(actions[1].error instanceof Error).toBeTruthy();
        });
    });
});
