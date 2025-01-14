import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: added pk
const stripePromise = loadStripe('pk_test_51PIOKDKksNrkRxhB09hYnSgwVkF8hiTqORUPyNyqTXtfkhblRGaP5hbX2KW5GgGC4UpTIaHRM5EaisloQgTWJ8WB00Pqcf3BiG')

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;