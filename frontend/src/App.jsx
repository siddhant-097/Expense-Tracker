import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Dashboard from './pages/Dashboard.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path = '/' element = {<Dashboard/>} />
        </Route> 
      </Routes>
    </>
  )
}

export default App