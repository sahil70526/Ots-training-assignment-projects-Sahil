import React, { useRef,useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store'

const Login = () => {
  let result=[];
  const [userData,setUserData]=useState([]);
    const userRef = useRef()
    const dispatch = useDispatch()
    const {username} = useSelector((state)=>state.user.data)

    useEffect(()=>{
      localStorage.setItem('userData', JSON.stringify(userData))
      
    },[userData])

    const handleClick=()=>{
      dispatch(login({username: userRef.current.value}))
      userData.push(userRef.current.value)
      setUserData([...userData])
      userRef.current.value='';
    }
  return (
    <div>
        {username?<h1>{username}</h1>:<h1>Login User</h1>}
        <input ref={userRef}  />
        <button onClick={handleClick}>Login</button>
        <button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login