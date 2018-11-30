import * as React from 'react';

import SearchResult from '../search/SearchResult';
import { ISearchResult } from '../../../types/search';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

const searchResult = require('../../../../tools/testHelpers/searchTestsMockData.json').searchResult as ISearchResult;

describe.each([
    [
        {
            error: null,
            hits: searchResult.hits,
            isFetching: false,
            nbHits: 1,
        },
        'normal',
    ],
    [
        {
            error: null,
            isFetching: true,
        },
        'loading',
    ],
    [
        {
            error: null,
            hits: [],
            isFetching: false,
            nbHits: 0,
        },
        'no match',
    ],
    [
        {
            error: new Error('message'),
        },
        'error',
    ],
])(
    'SearchResult renders correctly',
    (props, name) => {
        it(`(${name})`, () => {
            const component = renderComponent(<SearchResult {...props} />, {});
            const result = component.toJSON();
            expect(result).toMatchSnapshot();
        });
    },
);
