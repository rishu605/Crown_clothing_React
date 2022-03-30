import './header.styles.scss'
import {ReactComponent as Logo} from './../../assets/crown.svg'
import {Link} from 'react-router-dom'
import {auth} from './../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({currentUser, hidden}) => {

    const displaySignOut = currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
    ) : (
        <Link className='option' to='/signin'>SIGN IN</Link>
    )

    const displayCartDropdown = hidden ? null : <CartDropdown/>

    return (
        <>
            <div className='header'>
                <Link to='/' className='logo-container'>
                    <Logo className='logo'/>
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='option' to='/contact'>
                        CONTACT
                    </Link>  
                    {displaySignOut}
                    <CartIcon/>
                </div>
                {displayCartDropdown}
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)