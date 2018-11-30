import * as React from 'react';

import Settings from '../layout/Settings';
import { DateRange, SearchType, SortOrder } from '../../../types/search';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

const props = {
    apply: () => Promise.resolve(),
    dateRange: DateRange.PastWeek,
    from: '2018-11-20',
    hitsPerPage: 30,
    searchType: SearchType.Comments,
    setState: () => {},
    sortOrder: SortOrder.Popularity,
    to: '2018-11-21',
    toggle: () => {},
};

describe.each([
    [
        props,
        'normal date range',
    ],
    [
        {
            ...props,
            dateRange: DateRange.Custom,
        },
        'custom date range',
    ],
])(
    'Settings renders correctly',
    (props, name) => {
        it(`(${name})`, () => {
            const component = renderComponent(<Settings {...props} />, {});
            const result = component.toJSON();
            expect(result).toMatchSnapshot();
        });
    },
);
