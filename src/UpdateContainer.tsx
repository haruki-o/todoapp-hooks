import React, {useContext} from 'react'
import {DispatchContext, IndexState} from './RootContainer'

interface Props {
  Id : number
}
const UpdateContainer: React.FC<Props> = ({Id})=>{
  const {dispatch} = useContext(DispatchContext);
  return(
    <button onClick={()=>dispatch({
      type: 'updateNotice',
      id: Id,
      text: "",
      doUpdate: false
    })}>編集</button>
  )
}

export default UpdateContainer;