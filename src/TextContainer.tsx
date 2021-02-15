import React,{useState, useContext,useEffect} from 'react'
import {DispatchContext, IndexState} from './RootContainer'


const TextContainer: React.FC = ()=> {
  interface IndexState {
    id: number;
    text: string;
    doUpdate: boolean
  }

  console.log("update textcontainer!");
  
  const [valueText, setValueText] = useState("");
  function textChange(e: React.ChangeEvent<HTMLInputElement>){
    setValueText(e.target.value);
  }
  const state = useContext(IndexState);
  const {dispatch} = useContext(DispatchContext);

  function handleClick(){
    dispatch({
      type: 'create',
      id: state.length,
      text: valueText,
      doUpdate: false
    });
    setValueText("");
  }
  
  state.forEach((element: IndexState) => {
    if(element.doUpdate){;
      dispatch({
        type: 'update',
        id: element.id,
        text: valueText,
        doUpdate: false
      })
    }
  });
  
  return(
    <>
      <input type="text" onChange={textChange} value={valueText} />
      <button onClick={handleClick}>+</button>
    </>
  )
};

export default TextContainer;