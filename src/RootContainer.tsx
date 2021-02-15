import React, {useReducer, createContext} from 'react'
import ReactDOM from 'react-dom'
import CreateContainer from './CreateContainer';
import TodoContainer from './TodoContainer';

export const IndexState = createContext([{id: 0,text: "",doUpdate: false}]);
interface IndexState {
  id: number;
  text: string;
  doUpdate: boolean
}

type Action = 
| {type: 'create';id: number;text: string;doUpdate: boolean}
| {type: 'delete';id: number;text: string;doUpdate: boolean}
| {type: 'updateNotice';id: number;text: string;doUpdate: boolean}
| {type: 'update';id: number;text: string;doUpdate: boolean}

export interface dispatchInterface {
  dispatch: React.Dispatch<Action>
}

export const DispatchContext = createContext({} as dispatchInterface);

const RootContainer: React.FC = ()=>{

  const initialState: IndexState[] = [
    {id: 0, text: "",doUpdate: false}
  ];

  const reducer = (state: IndexState[], action: Action)=>{
    switch(action.type){
      case 'create':
        return [...state,{id: action.id,text: action.text,doUpdate: false}];
      case 'delete':
        let varState = [...state];
        varState.splice(action.id,1);
        const youstate = varState.map((x)=>{if(x.id>action.id){
          return {id: x.id-=1,text: x.text,doUpdate: false}
        }else{return x}});
        return youstate;
      case 'updateNotice':
        let letState = [...state];
        const offState = letState.map((x)=>{if(x.id===action.id){
          return {id: x.id,text: x.text,doUpdate:true}
        }else{return x}});
        return offState;
      case 'update':
        let varState3 = [...state];
        const llState = varState3.map((x)=>{
          if(x.id===action.id){
            return {id: x.id,text: action.text,doUpdate: false}
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
    <>
      <DispatchContext.Provider value={{dispatch}}>
      <IndexState.Provider value={state}>
        <CreateContainer/>
        <TodoContainer/>
      </IndexState.Provider>
      </DispatchContext.Provider>
    </>
  )
}

ReactDOM.render(
  <RootContainer/>,
  document.getElementById('root')
)