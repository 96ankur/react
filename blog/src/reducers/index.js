import { combineReducers } from 'redux';
import postsReducer from './postsReducers';
import userReduser from './usersReducers';

export default combineReducers({
    posts: postsReducer,
    users: userReduser
});