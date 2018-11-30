import * as React from 'react';

import SearchBar from '../search/SearchBar';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

it('SearchBar renders correctly', () => {
    const props = {
        handleInputChange: () => {},
        search: () => Promise.resolve(),
    };

    const component = renderComponent(<SearchBar {...props} />, {});
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
