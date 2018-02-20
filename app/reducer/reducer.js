import FETCH_BLOG from '../action/actionTypes'
import POST_BLOG from '../action/actionTypes'

 const reducerpost= (state = [], action) => {
    switch (action.type) {
      case 'FETCH_BLOG' :
        return state.concat(action.payload.data) 
      case 'POST_BLOG' :
        return [action.payload,...state]
      default:
        return state
    }
  }
  export default reducerpost