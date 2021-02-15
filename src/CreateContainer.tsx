import React, { useContext } from 'react'
import TextContainer from './TextContainer'
import {DispatchContext,dispatchInterface} from './RootContainer'

const CreateContainer: React.FC = (): JSX.Element => {
  console.log("update createcontainer!");
  const dispatch: dispatchInterface = useContext(DispatchContext);
  return(
    <>
      <TextContainer />
    </>
  )
}
export default CreateContainer;