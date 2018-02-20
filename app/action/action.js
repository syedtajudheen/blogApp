import { FETCH_BLOG, POST_BLOG } from './actionTypes'
import axios from 'axios'
import {Alert} from 'react-native'

const fetchpost=()=>{
   const request = axios.get('https://jsonprovider.herokuapp.com/posts?sort=createdAt%20DESC&limit=15')
   return dispatch => {
    return request.then((posts) => {
        dispatch({
          type: FETCH_BLOG,
          payload: posts
        })
    })
  }
}

const postblog = (data) => {

    return dispatch => {
      return dispatch({
        type: 'POST_BLOG',
        payload: fetch('https://jsonprovider.herokuapp.com/posts/', {  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              userId: data.userId,
              title: data.title,
              body: data.body
          })
      }).then((response) => {
        Alert.alert('Sucessfully Posted!')})
      })
    }
}

module.exports = {
  fetchpost: fetchpost,
  postblog: postblog
}
