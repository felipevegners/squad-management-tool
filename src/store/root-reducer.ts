import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import playerReducer from './SearchPlayer/reducers';

const persistConfig = {
    key: 'player',
    storage,
    whitelist: ['player'],
};

const rootReducer = combineReducers({
    player: playerReducer,
});

export default persistReducer(persistConfig, rootReducer);
