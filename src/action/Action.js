import {ADD_LIST,REMOVE_LIST} from './Type'

export const addList = (data) => {
  return{
    type: ADD_LIST,
    payload:{
      id: new Date().getTime(),
      data:data
    }
  }
};
export const removeList = (id) => {
  return{
    type: REMOVE_LIST,
    id
  }
};
