import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store'

const Login = () => {
    const userRef = useRef()
    const dispatch = useDispatch()
    const {username} = useSelector((state)=>state.user.data)
  return (
    <div>
        {username?<h1>{username}</h1>:<h1>Login User</h1>}
        <input ref={userRef}  />
        {!username?<button onClick={()=>dispatch(login({username: userRef.current.value}))}>Login</button>:
        <button onClick={()=>dispatch(logout())}>Logout</button>}
    </div>
  )
}

export default Login