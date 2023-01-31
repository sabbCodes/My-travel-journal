import { useState } from 'react'
import Data from './components/data'
import Header from './components/header'
import Item from './components/item'

function App() {
  const travelData = Data.map(object => {
    return <Item 
      {...object}
    />
  })
  return (
    <div className="App">
      <Header />
      {travelData}
    </div>
  )
}

export default App
