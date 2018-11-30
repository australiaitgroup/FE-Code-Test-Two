import * as React from 'react';

import Pagination from '../Pagination';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

it('Pagination renders correctly', () => {
    const props = {
        handlePageChange: () => Promise.resolve(),
        nbPages: 50,
        page: 3,
    };

    const component = renderComponent(<Pagination {...props} />, {});
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
