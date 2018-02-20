import { combineReducers } from 'redux'
import reducerpost from './reducer'
const blogApp = combineReducers({
  posts: reducerpost
})

export default blogApp