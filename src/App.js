import React,{useState} from 'react'
import {addList,removeList} from './action/Action'
import {useDispatch, useSelector} from 'react-redux'

const App = () => {
  const[inputData,setInputData] = useState('')
  const list = useSelector(state => state.ListReducer.list)
  const dispatch = useDispatch();
  return (
    <div>
      <input type='text' placeholder='add text' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
      <button onClick={()=>dispatch(addList(inputData),setInputData(''))}>Submit</button>
      <div>
        {
          list.map((curr)=>{
            return(
              <>
              <div key={curr.id}>
              <h2>{curr.data}</h2>
              <button onClick={()=>dispatch(removeList(curr.id))}>Delete</button>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
