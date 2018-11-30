import * as React from 'react';

import Layout from '../Layout';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';
import { getInitialState } from '../../../../tools/testHelpers/storeHelpers';

it('Layout renders correctly', () => {
    const component = renderComponent(<Layout />, getInitialState());
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
