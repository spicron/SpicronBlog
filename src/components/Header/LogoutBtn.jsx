import React from 'react'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className ='inline-bock px-10 py-4 duration-200
     hover:bg-blue-100 rounded-full font-semibold text-lg' onClick={logoutHandler} >
      Logout
    </button>
  )
}

export default LogoutBtn
