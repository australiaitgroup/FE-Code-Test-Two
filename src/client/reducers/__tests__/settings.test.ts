import * as moment from 'moment';

import reducer from '../settings';
import { changeSettings } from '../../actions/settings';
import { DateRange, SearchType, SortOrder } from '../../../types/search';

describe('settings reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            dateRange: DateRange.AllTime,
            from: moment().format('YYYY-MM-DD'),
            hitsPerPage: 20,
            searchType: SearchType.All,
            sortOrder: SortOrder.Popularity,
            to: moment().format('YYYY-MM-DD'),
        };
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should change settings', () => {
        const expectedState = {
            ...initialState,
            searchType: SearchType.Stories,
        };

        const state = reducer(initialState, changeSettings(expectedState));
        expect(state).toEqual(expectedState);
    });
});
