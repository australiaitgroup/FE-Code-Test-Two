import * as React from 'react';

import Footer from '../Footer';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

it('Footer renders correctly', () => {
    const component = renderComponent(<Footer />, {});
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
