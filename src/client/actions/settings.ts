import { ISettingsState } from '../../types/stateAndAction';
import { toggleSidebar } from './navigation';
import { doSearch } from './search';

// action types

export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';

// action creators

export function changeSettings(settings: ISettingsState) {
    return { settings, type: CHANGE_SETTINGS };
}

// async actions

export function applySettings(settings: ISettingsState) {
    return (dispatch) => {
        dispatch(toggleSidebar());
        dispatch(changeSettings(settings));

        return dispatch(doSearch());
    };
}
