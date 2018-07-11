import {combineReducers} from 'redux';
import page from './pageReducer';

console.log(page);
const rootReducer = combineReducers({
  page
});

export default rootReducer;
