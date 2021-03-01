import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import list from './reducer/list';
import details from './reducer/details';
import user from './reducer/user';

const reducer = combineReducers({
    list,
    details,
    user
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
 