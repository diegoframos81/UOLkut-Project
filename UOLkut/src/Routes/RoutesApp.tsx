


import {  Route, Routes } from "react-router-dom"





import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Register from "../Pages/Register"
import Recovery from "../Pages/Recovery"
import ChangePassword from "../Pages/ChangePassword"
import EditProfile from "../Pages/EditProfile"


export const RoutesApp = () =>{
  
  
  return (
    <>
      
        <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Register" element={<Register />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/EditProfile" element={<EditProfile />}/>
                <Route path="/RecoveryPassword" element={<Recovery />}/>
                <Route path="/ChangePassword" element={<ChangePassword />}/>
                
        </Routes>
      
      
    </>
    
  )
}
