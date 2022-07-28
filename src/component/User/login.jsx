import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { logFunc } from "../../store/action/userAction";
import { useNavigate } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    let navigate= useNavigate()
    const {isAuthenticated,user} = useSelector(state => state.userReducer)
    const [logData, setLogData] = useState({
        email: "",
        password: ""
    })
    let setField = (e, propname) => {
        setLogData({ ...logData, [propname]: e })
    }
    let login = (e) => {
        e.preventDefault();
        dispatch(logFunc(logData.email, logData.password))
    }
    useEffect(()=>{
        if(isAuthenticated){
            navigate('/products')
        }
    },[isAuthenticated])
    return (
        <div className="logSignContainer">
            <div className="logSignToggle">
                <h3>Login</h3>
            </div>
            <div>
                <form className="loginForm">
                    <div className="loginEmail">
                        <input type="email" placeholder="Email" required value={logData.email} onChange={(e) => setField(e.target.value, "email")} />
                    </div>
                    <div className="loginPassword">
                        <input type="password" placeholder="Password" required value={logData.password} onChange={(e) => setField(e.target.value, "password")} />
                    </div>
                    <div>
                        <button type="submit" onClick={(e) => login(e)}>Login</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
export default Login