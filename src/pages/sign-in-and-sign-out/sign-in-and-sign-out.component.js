import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-and-sign-out.styles.scss'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignOut = () => {
    return (
        <>
            <div className='sign-in-and-sign-up'>
                <SignIn/>
                <SignUp/>
            </div>
        </>
    )
}

export default SignInAndSignOut