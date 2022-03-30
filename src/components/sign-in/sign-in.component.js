import { useState } from "react"
import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import './sign-in.styles.scss'
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch(error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        if(name === 'email') {
            setEmail(value)
        }
        if(name === 'password') {
            setPassword(value)
        }
    }

    return (
        <>
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>    
                <form onSubmit={handleSubmit}>
                    <FormInput name='email' type='email' value={email} label='email' required handleChange={handleChange}/>
                    <FormInput name='password' type='password' value={password} label='password' required handleChange={handleChange}/>
                    <div className="buttons">
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn type='button'>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn