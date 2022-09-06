import React from 'react'
import bgLogin from '../../assets/login.svg'
import FormLogin from '../../components/FormLogin'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='loginKiri'>
                <img src={bgLogin} alt="" />
            </div>
            <div className='loginKanan'>
                <FormLogin />
            </div>
        </div>
    )
}

export default Login
