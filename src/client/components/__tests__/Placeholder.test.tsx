import * as React from 'react';

import Placeholder from '../Placeholder';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';

it('Placeholder renders correctly', () => {
    const component = renderComponent(<Placeholder />, {});
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
