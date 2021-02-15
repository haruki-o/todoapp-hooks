import React, { useContext } from 'react'
import TextContainer from './TextContainer'
import {IndexState} from './RootContainer'

export default function CreateContainer(props){
  console.log("update createcontainer!");
  const {dispatch} = useContext(IndexState);
  return(
    <TextContainer />
  )
}