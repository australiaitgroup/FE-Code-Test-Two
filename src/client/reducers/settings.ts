import * as moment from 'moment';
import { CHANGE_SETTINGS } from '../actions/settings';
import { DateRange, SearchType, SortOrder } from '../../types/search';
import { IAction, ISettingsState } from '../../types/stateAndAction';

const initialState = {
    dateRange: DateRange.AllTime,
    from: moment().format('YYYY-MM-DD'),
    hitsPerPage: 20,
    searchType: SearchType.All,
    sortOrder: SortOrder.Popularity,
    to: moment().format('YYYY-MM-DD'),
};

export default function reducer(
    state: ISettingsState = initialState,
    action: IAction,
): ISettingsState {
    switch (action.type) {
        case CHANGE_SETTINGS:
            return { ...state, ...action.settings };

        default:
            return state;
    }
}
