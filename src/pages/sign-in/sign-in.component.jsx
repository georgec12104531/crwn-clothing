import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-in.styles.scss';

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
        <div className='sign-in-container'>
            <h2 className='title'>I already have an account</h2>
            <label>Sign in with your email and password</label>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    value={email} 
                    name='email' 
                    type='email' 
                    handleChange={handleEmailChange} 
                    label='email'
                    required />   
                <FormInput 
                    value={password} 
                    name='password' 
                    type='password' 
                    handleChange={handlePasswordChange} 
                    label='password'
                    required />
                <CustomButton type='submit'>Sign in</CustomButton>
            </form>
            
        </div>
    ) 
}

export default SignIn;