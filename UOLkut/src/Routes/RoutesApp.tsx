


import {  Route, Routes } from "react-router-dom"




import { UserProvider } from '../Context/userContext'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Register from "../Pages/Register"
import Recovery from "../Pages/Recovery"
import ChangePassword from "../Pages/ChangePassword"


export const RoutesApp = () =>{
  
  
  return (
    <>
      <UserProvider>
        <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Register" element={<Register />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/RecoveryPassword" element={<Recovery />}/>
                <Route path="/ChangePassword" element={<ChangePassword />}/>
                
        </Routes>
      </UserProvider>
      
    </>
    
  )
}
