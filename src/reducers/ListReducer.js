import { ADD_LIST,REMOVE_LIST } from "../action/Type";

const initialstate ={
  list: []
}
const ListReducer =(state = initialstate,action)=>{
 switch (action.type) {
   case ADD_LIST:
     const {id,data}=action.payload;
     return {
       ...state,
       list:[
         ...state.list,
         {
             id:id,
             data:data
         }
       ]
     }
     case REMOVE_LIST:
     const newList = state.list.filter((curr)=>curr.id !==action.id)
     return {
       ...state,
      list:newList
     }
   default: 
    return state;
     
 }
}
export default ListReducer;