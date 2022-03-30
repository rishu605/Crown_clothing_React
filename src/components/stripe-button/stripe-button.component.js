import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KfLUySASixTl3owL0M20sLLgia7Hx8m44lUPltandiiX7QMfGkk31uZdBEGzL7xjg5UdkADL2z4JnWnbJAUuFCY0045u4hB5A'

    const onToken= token => {
        console.log(token)
        alert('Payment Successfull')
    }
    return (
        <>
            <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
        </>
    )
}

export default StripeCheckoutButton