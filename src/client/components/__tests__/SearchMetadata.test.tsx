import * as React from 'react';

import SearchMetadata from '../search/SearchMetadata';
import { DateRange, SearchType, SortOrder } from '../../../types/search';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

it('SearchMetadata renders correctly', () => {
    const props = {
        nbHits: 3,
        settings: {
            dateRange: DateRange.AllTime,
            from: '2018-11-11',
            hitsPerPage: 20,
            searchType: SearchType.All,
            sortOrder: SortOrder.Popularity,
            to: '2018-11-12',
        },
    };

    const component = renderComponent(<SearchMetadata {...props} />, {});
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
