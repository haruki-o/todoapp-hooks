import React, {useContext} from 'react'
import DeleteContainer from './DeleteContainer';
import {IndexState} from './RootContainer'
import UpdateContainer from './UpdateContainer';

const TodoContainer: React.FC = (): JSX.Element => {
  const state = useContext(IndexState);

  interface IndexState {
    id: number;
    text: string;
    doUpdate: boolean
  }

  return(
    <>
      {state.map((todo: IndexState)=>{
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
    </>
  )
}

export default TodoContainer;