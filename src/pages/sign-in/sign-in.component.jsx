import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword('');
        setEmail('');
    }

    return(
        <div>
            <h2>I already have an account</h2>
            <label>Sign in with your email and password</label>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input value={email} name='email' type='email' onChange={handleEmailChange} required />   
                <label>Password</label>
                <input value={password} name='password' type='password' onChange={handlePasswordChange} required />
                <input type='submit'></input>
            </form>
            
        </div>
    ) 
}

export default SignIn;