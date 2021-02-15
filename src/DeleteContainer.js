import React, {useContext} from 'react'
import {IndexState} from './RootContainer'

export default function DeleteContainer(props){
  const {dispatch} = useContext(IndexState);
  return(
    <span> {props.Id} {props.Text} <button onClick={()=>dispatch({
      type: 'delete',
      id: props.Id
    })}>×</button></span>
  )
}