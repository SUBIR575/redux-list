import React,{useState} from 'react'
import FlatList, {PlainList} from 'flatlist-react'
import {useSelector} from 'react-redux'



const Search = () => {
  const [newSearch,setNewSearch]= useState('')
  const onSearchInput=(e)=>{
    setNewSearch(e.target.value)
  }
  const list = useSelector(state => state.ListReducer.list)
  return (
    <div>
      <input value={newSearch} onChange={onSearchInput} placeholder="search..."/>
      {
        list.filter((val)=>{
          if(newSearch==''){
            return val
          }else if(val.data.toLowerCase().includes(newSearch.toLowerCase())){
            return val
          }
        }).map((val)=>{
          return(
            <div>{val}</div>
          )
        })
      }
      
    </div>
  )
}

export default Search
