import React, {useContext} from 'react'
import {IndexState} from './RootContainer'

export default function UpdateContainer(props){
  const {dispatch} = useContext(IndexState);
  return(
    <button onClick={()=>dispatch({
      type: 'updateNotice',
      id: props.Id
    })}>編集</button>
  )
}