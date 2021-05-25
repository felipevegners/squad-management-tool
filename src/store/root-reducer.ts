import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import playerReducer from './SearchPlayer/reducers';
import teamInfoReducer from './CreateTeam/reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['player', 'teams'],
};

const rootReducer = combineReducers({
    player: playerReducer,
    teams: teamInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
