import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = (props) => {
    return (
        <>
            <div className='cart-icon' onClick={props.toggleCartHidden}>
                <ShoppingIcon className='shopping-icon'/>
                <span className='item-count'>{props.itemCount}</span>    
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)