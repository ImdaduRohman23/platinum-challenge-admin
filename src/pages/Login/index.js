import React from 'react'
import bgLogin from '../../assets/login.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = ({setIsLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSigIn = (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password:  password,
        }

        axios.post('https://bootcamp-rent-car.herokuapp.com/admin/auth/login', payload)
            .then(res => (
                console.log(res),
                localStorage.setItem('token', res.data.access_token),
                setIsLogin(true),
                navigate('/dashboard')
            ))
    }

    //handle balik ke page login pas dirifresh
    useEffect(() => {
        const checkIfLogin = () => {
            const token = localStorage.getItem('token');
            if (!token) return;
            navigate('/dashboard')
        };
        checkIfLogin();
    });

    return (
        <div className='login'>
            <div className='loginKiri'>
                <img src={bgLogin} alt="" />
            </div>
            <div className='loginKanan'>
                <Form>
                    <h2>Welcome, Admin BCR</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Contoh: johndee@gmail.com" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="6+ karakter" />
                    </Form.Group>
                    <Button onClick={handleSigIn} style={{width: '100%'}} variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
