import * as React from 'react';

import Hit from '../search/Hit';
import { ISearchResult } from '../../../types/search';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

const searchResult = require('../../../../tools/testHelpers/searchTestsMockData.json').searchResult as ISearchResult;

it('Hit renders correctly', () => {
    const props = {
        data: searchResult.hits[0],
    };

    const component = renderComponent(<Hit {...props} />, {});
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
