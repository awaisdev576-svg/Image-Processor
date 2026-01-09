import { useState } from 'react'
import DefaultScreen from './Components/Layout/DefaultScreen'
import Sidebar from './Components/Layout/Sidebar'

function App() {

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <DefaultScreen />
    </div>
  )
}

export default App
