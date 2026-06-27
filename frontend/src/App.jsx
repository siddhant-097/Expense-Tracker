import React, { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Dashboard from './pages/Dashboard.jsx'

const App = () => {
  const [user, setUser] = useState(null);
  const[token, setToken] = useState(null);
  const navigate = useNavigate();

  const clearAuth = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    } catch (err) {
      console.error("clearAuth error: ", err);
    }
    setUser(null);
    setToken(null);
  }


  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  }

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