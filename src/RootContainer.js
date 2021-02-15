import React, {useReducer, createContext} from 'react'
import ReactDOM from 'react-dom'
import CreateContainer from './CreateContainer';
import TodoContainer from './TodoContainer';

export const IndexState = createContext();

function RootContainer(props){
  const initialState = [
    {id: 0, text: "",doUpdate: 0}
  ];

  const reducer = (state, action)=>{
    switch(action.type){
      case 'create':
        return [...state,{id: action.id,text: action.text,doUpdate: 0}];
      case 'delete':
        let varState = [...state];
        varState.splice(action.id,1);
        const youstate = varState.map((x)=>{if(x.id>action.id){
          return {id: x.id-=1,text: x.text,doUpdate:0}
        }else{return x}});
        return youstate;
      case 'updateNotice':
        let letState = [...state];
        const offState = letState.map((x)=>{if(x.id===action.id){
          return {id: x.id,text: x.text,doUpdate:1}
        }else{return x}});
        return offState;
      case 'update':
        let varState3 = [...state];
        const llState = varState3.map((x)=>{
          if(x.id===action.id){
            return {id: x.id,text: action.text,doUpdate: 0}
          }else{
            return x;
          }
        });
        return llState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("update rootcontainer");

  console.log(state);

  return(
    <IndexState.Provider value={{state, dispatch}}>
      <CreateContainer/>
      <TodoContainer/>
    </IndexState.Provider>
  )
}

ReactDOM.render(
  <RootContainer/>,
  document.getElementById('root')
)