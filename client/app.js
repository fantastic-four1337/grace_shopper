import React from 'react'

import { Navbar } from './components'
import MenuAppBar from './components/menuBar'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <MenuAppBar />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
