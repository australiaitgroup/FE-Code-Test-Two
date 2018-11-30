import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as renderer from 'react-test-renderer';

import { createMockStore } from './storeHelpers';

export function renderComponent(children, storeData) {
    const store = createMockStore(storeData);

    return renderer.create(
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>);
}
