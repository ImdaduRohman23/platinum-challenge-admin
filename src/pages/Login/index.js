import React from 'react'
import bgLogin from '../../assets/login.svg'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='loginKiri'>
                    <img src={bgLogin} alt="" />
            </div>
            <div>
                <h4>Kiri</h4>
            </div>
        </div>
    )
}

export default Login
