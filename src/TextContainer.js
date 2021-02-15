import React,{useState, useContext,useEffect} from 'react'
import {IndexState}from './RootContainer'

export default function TextContainer(props){
  console.log("update textcontainer!");
  
  const [valueText, setValueText] = useState("");
  function textChange(e){
    setValueText(e.target.value);
  }
  const {state, dispatch} = useContext(IndexState);

  function handleClick(){
    dispatch({
      type: 'create',
      id: state.length,
      text: valueText
    });
    setValueText("");
  }
  
  state.forEach(element => {
    if(element.doUpdate){;
      dispatch({
        type: 'update',
        id: element.id,
        text: valueText
      })
    }
  });
  
  return(
    <div>
      <input type="text" onChange={textChange} value={valueText} />
      <button onClick={handleClick}>+</button>
    </div>
  )
}