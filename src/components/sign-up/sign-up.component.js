import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss'
import { useState } from "react";

const SignUp = () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})
        } catch(error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        if(name === 'displayName') {
            setDisplayName(value)
        } else if(name === 'email') {
            setEmail(value)
        } else if(name === 'password') {
            setPassword(value)
        } else if(name === 'confirmPassword') {
            setConfirmPassword(value)
        }
    }

    return(
        <>
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required>
                        
                    </FormInput>    
                    <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required>
                        
                    </FormInput>    
                    <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required>
                        
                    </FormInput>    
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required>
                        
                    </FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>  
                </form>
            </div>
        </>
    )
}

export default SignUp