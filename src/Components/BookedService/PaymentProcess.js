import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';
import { CardElement } from '@stripe/react-stripe-js';



const PaymentProcess = () => {

    const stripePromise = loadStripe('sk_test_51JGOI2CTv5MtVdxXIFUAVLO77zjAr1lCKhx7pOBc7U0eVgzYssKiaF3BI50O53Oieht53PLZZeI6iGUNrP6YwfBa006egCZrzM');

    return (
        <div>
            <Elements stripe={stripePromise}>
                {/* <PaymentCard></PaymentCard> */}
                <CardElement
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
            </Elements>
        </div>
    );
};

export default PaymentProcess;