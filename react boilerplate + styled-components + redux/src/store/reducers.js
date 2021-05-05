import { combineReducers } from 'redux';

import { reducer } from 'features/counter/store/reducer';

export default () => combineReducers({
    counter: reducer,
});