jest.mock('moment', () => {
    const realMoment = require.requireActual('moment');
    const FIXED_DATE_TIME = '2018-11-20T00:00:00.000+1000';
    const mockedMoment = (date?: string) => date
        ? realMoment(date)
        : realMoment(FIXED_DATE_TIME);

    return Object.assign(mockedMoment, realMoment);
});

import generateURL, { getDateRange, getTags } from '../searchUrlHelpers';
import { DateRange, SearchType, SortOrder } from '../../../types/search';

const settings = {
    dateRange: DateRange.AllTime,
    from: '2018-11-19',
    hitsPerPage: 20,
    searchType: SearchType.All,
    sortOrder: SortOrder.Popularity,
    to: '2018-11-20',
};

describe.each([
    [SearchType.All, '&tags=(story,comment)'],
    [SearchType.Stories, '&tags=story'],
    [SearchType.Comments, '&tags=comment'],
])(
    'getTags',
    (type, expectedString) => {
        it(`should return ${expectedString}`, () => {
            expect(getTags(type)).toBe(expectedString);
        });
    },
);

describe.each([
    [
        { ...settings },
        '',
    ],
    [
        {
            ...settings,
            dateRange: DateRange.LastDay,
        },
        '&numericFilters=created_at_i>1542549600',
    ],
    [
        {
            ...settings,
            dateRange: DateRange.PastWeek,
        },
        '&numericFilters=created_at_i>1542031200',
    ],
    [
        {
            ...settings,
            dateRange: DateRange.PastMonth,
        },
        '&numericFilters=created_at_i>1539957600',
    ],
    [
        {
            ...settings,
            dateRange: DateRange.PastYear,
        },
        '&numericFilters=created_at_i>1511100000',
    ],
    [
        {
            ...settings,
            dateRange: DateRange.Custom,
        },
        '&numericFilters=created_at_i>1542549600,created_at_i<1542722400',
    ],
])(
    'getDateRange',
    (settings, expectedString) => {
        it(`should return ${expectedString}`, () => {
            expect(getDateRange(settings)).toBe(expectedString);
        });
    },
);

describe.each([
    [
        { ...settings },
        'test',
        undefined,
        'https://hn.algolia.com/api/v1/search?query=test&tags=(story,comment)&hitsPerPage=20',
    ],
    [
        {
            ...settings,
            sortOrder: SortOrder.Date,
        },
        'test',
        undefined,
        'https://hn.algolia.com/api/v1/search_by_date?query=test&tags=(story,comment)&hitsPerPage=20',
    ],
    [
        {
            ...settings,
            hitsPerPage: 50,
        },
        'test',
        undefined,
        'https://hn.algolia.com/api/v1/search?query=test&tags=(story,comment)&hitsPerPage=50',
    ],
    [
        { ...settings },
        'test',
        2,
        'https://hn.algolia.com/api/v1/search?query=test&tags=(story,comment)&hitsPerPage=20&page=1',
    ],
])(
    'generateURL',
    (settings, input, page, expectedString) => {
        it(`should return ${expectedString}`, () => {
            expect(generateURL(settings, input, page)).toBe(expectedString);
        });
    },
);
