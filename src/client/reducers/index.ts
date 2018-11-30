import { combineReducers } from 'redux';

import navigation from './navigation';
import search from './search';
import settings from './settings';

export default combineReducers({
    navigation,
    search,
    settings,
});
