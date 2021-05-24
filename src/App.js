import React, { useState } from "react";
import { addList, removeList } from "./action/Action";
import { useDispatch, useSelector } from "react-redux";
import './App.css'

const App = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.ListReducer.list);
  const dispatch = useDispatch();
  const [newSearch,setNewSearch]= useState('')
  const onSearchInput=(e)=>{
    setNewSearch(e.target.value)
  }
  function sortNumbers(a, b) {
    if(a.data < b.data) { return -1; }
    if(a.data > b.data) { return 1; }
    return 0;
  }
  list.sort(sortNumbers)
  return (
    <div className='container'>
    <div>
      <input
      className='search'
        type="text"
        placeholder="add text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button className='add-btn' onClick={() => dispatch(addList(inputData), setInputData(""))}>
        ADD
      </button>
      <input className='search' value={newSearch} onChange={onSearchInput} placeholder="search..."/>
      <div className='main'>
        {list.filter((val)=>{
          if(newSearch==''){
            return val
          }else if(val.data.toLowerCase().includes(newSearch.toLowerCase())){
            return val
          }
        }).map((curr) => {
          return (
            <>
            <tr key={curr.id} className='list-box'>
              <th className='list-text'>{curr.data}<button className='del-btn' onClick={() => dispatch(removeList(curr.id))}>
                  Delete
                </button></th>
            </tr>
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default App;
