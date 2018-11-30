import * as React from 'react';

import Search from '../Search';
import { renderComponent } from '../../../../tools/testHelpers/componentHelpers';
import apiMock from '../../../../tools/testHelpers/searchAPIMock';
import { getInitialState } from '../../../../tools/testHelpers/storeHelpers';

it('Search renders correctly', async () => {
    apiMock.get('/search?query=&tags=(story,comment)&hitsPerPage=20')
        .reply(200, {});

    const component = await renderComponent(<Search />, getInitialState());
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
});
