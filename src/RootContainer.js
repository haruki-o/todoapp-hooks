import React from 'react'
import ReactDOM from 'react-dom'

function RootContainer(){
  return(
    <div>
      <p>RootContainer</p>
    </div>
  )
}

ReactDOM.render(
  <RootContainer/>,
  document.getElementById('root')
)