import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => {
    const displayCartItem = cartItems.length ? (cartItems.map(cartItem => {
        return(
            <CartItem key={cartItem.id} item={cartItem}/>
        )
    }) ) : (
        <span className="empty-message">Your cart is empty</span>
    )
    return(
        <>
            <div className="cart-dropdown">
                <div className="cart-items">
                    {displayCartItem}
                </div>
                <CustomButton onClick={() => {
                     history.push('/checkout')
                     dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>    
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

// 'dispatch' is passed as prop to the component even if mapDispatchTOoProps is absent

export default withRouter(connect(mapStateToProps) (CartDropdown))