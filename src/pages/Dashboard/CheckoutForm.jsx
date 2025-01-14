import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useMenu/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [transId, setTransId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart?.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.price
    }, 0)
    console.log(stripe, clientSecret);
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('Error', error);
            setError(error.message)
        }
        else {
            console.log('Payment Method', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('Confirm Error', confirmError);
            if (confirmError) {
                setError(confirmError.message)
            }
        }
        else {
            console.log('Payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransId(paymentIntent.id);

                // save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transId: paymentIntent.id,
                    date: new Date(), //convert utc date
                    cartIds: cart.map(item => item._id),
                    foodItemIds: cart.map(item => item.food_id),
                    status: 'pending'
                }
                axiosSecure.post('/payments', payment)
                    .then(res => {
                        console.log('payment save', res.data);
                        if (res.data.paymentResult.insertedId) {
                            Swal.fire('Payment success')
                            refetch();
                        }
                    })


            }
        }

    }

    const handleCardChange = (event) => {
        if (event.complete) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                onChange={handleCardChange}
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {/* disabled={!stripe || !clientSecret} */}

            <button className="btn btn-secondary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || isButtonDisabled}>
                Pay
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {transId && <p className="text-green-500">Trans Id: {transId}</p>}
        </form>
    );
};

export default CheckoutForm;