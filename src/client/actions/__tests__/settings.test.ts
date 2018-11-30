import { changeSettings, applySettings } from '../settings';
import { DateRange, SearchType, SortOrder } from '../../../types/search';
import {
    createMockStore,
    deepClone,
    getInitialState,
} from '../../../../tools/testHelpers/storeHelpers';

describe('settings action', () => {
    let store;
    let settings;

    beforeEach(() => {
        store = createMockStore(getInitialState());
        settings = {
            dateRange: DateRange.AllTime,
            from: '2018-11-11',
            hitsPerPage: 20,
            searchType: SearchType.All,
            sortOrder: SortOrder.Popularity,
            to: '2018-11-12',
        };
    });

    it('should return CHANGE_SETTINGS action', () => {
        expect(changeSettings(deepClone(settings))).toEqual({
            settings,
            type: 'CHANGE_SETTINGS',
        });
    });

    it('applySettings should dispatch expected actions', () => {
        store.dispatch(applySettings(settings));
        expect(store.getActions()[0].type).toBe('TOGGLE_SIDEBAR');
        expect(store.getActions()[1].type).toBe('CHANGE_SETTINGS');
        expect(store.getActions()[2].type).toBe('SEARCH');
    });
});
