import React, { useState, ChangeEvent, FormEvent } from 'react'
import "./UserLogin.css"

interface LoginProps {
    validateUser: validateUser,
    loginUser: loginUser,
    createUser: createUser
}

export const UserLogin: React.FC<LoginProps> = ({validateUser, loginUser, createUser}) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
       let user = {id: null, name: name, password: password, is_admin: false}
       validateUser(user)
    }
    const handleCreate = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let user = {id: null, name: name, password: password, is_admin: false}
        createUser(user)
    }

    return (
        <form className="login-container">
            <h1>User Login</h1>
            <h4>Username</h4>
            <input type="text" className="user" name="Username" required onChange={handleNameChange} />
            <h4>Password</h4>
            <input type="password" className="pass" name="Password" required onChange={handlePasswordChange}/>
            <button className="login-btn" onClick={handleLogin}>Login</button>
            <button className="login-btn" onClick={handleCreate}> Create User</button>
        </form>
    )
}