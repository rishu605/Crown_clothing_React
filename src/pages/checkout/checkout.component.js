import './checkout.styles.scss'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


const Checkout = ({cartItems, total}) => {

    const displayCartItem = cartItems.map(cartItem => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
    })
    return (
        <>
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span className=''>Product</span>
                    </div>
                    <div className='header-block'>
                        <span className=''>Description</span>
                    </div>
                    <div className='header-block'>
                        <span className=''>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span className=''>Price</span>
                    </div>
                    <div className='header-block'>
                        <span className=''>Remove</span>
                    </div>
                </div>
                {displayCartItem}
                <div className='total'>
                    <span>TOTAL: {total} </span>
                </div>
                <div className='test-warning'>
                    *Please use the following test credit card for payments*
                    Card Number: 4242 4242 4242 4242, Exp: 03/22, CVV: 123
                </div>
                <StripeCheckoutButton price={total}/>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps) (Checkout)