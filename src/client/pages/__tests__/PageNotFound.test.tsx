import * as React from 'react';

import PageNotFound from '../PageNotFound';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

it('PageNotFound renders correctly', () => {
    document.body.id = 'root';
    const component = renderComponent(<PageNotFound />, {});
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
