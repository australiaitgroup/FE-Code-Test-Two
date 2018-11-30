import { TOGGLE_SIDEBAR } from '../actions/navigation';
import { IAction, INavigationState } from '../../types/stateAndAction';

const initialState = {
    showSidebar: false,
};

export default function reducer(
    state: INavigationState = initialState,
    action: IAction,
): INavigationState {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { ...state, showSidebar: !state.showSidebar };

        default:
            return state;
    }
}
