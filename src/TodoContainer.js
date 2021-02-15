import React, {useContext} from 'react'
import DeleteContainer from './DeleteContainer';
import {IndexState} from './RootContainer'
import UpdateContainer from './UpdateContainer';

export default function TodoContainer(props){
  const {state} = useContext(IndexState);


  return(
    <div>
      {state.map((todo)=>{
        if(todo.id>0){
          return(
            <div key={todo.id} >
              <DeleteContainer Id={todo.id} Text={todo.text} />
              <span>  </span>
              <UpdateContainer Id={todo.id} />
            </div>
          )
        }
})}
    </div>
  )
}