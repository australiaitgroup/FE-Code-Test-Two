import { Store } from 'redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducers from '../../src/client/reducers';
import { IState } from '../../src/types/stateAndAction';

export function getInitialState(): IState {
    return reducers(undefined, { type: null });
}

export function createMockStore(initialState: IState): Store {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore(initialState);
}

export function deepClone(toBeCloned: any): any {
    return JSON.parse(JSON.stringify(toBeCloned));
}
