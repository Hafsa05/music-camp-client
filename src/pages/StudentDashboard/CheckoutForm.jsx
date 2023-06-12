import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ courseFee, courseCart }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [axiosSecure] = useAxiosSecure()
	const [cardError, setCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const { user } = useContext(AuthContext);

	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');


	useEffect(() => {
		// console.log(courseFee);
		if (courseFee > 0) {
			axiosSecure.post('/payment-intend', { courseFee })
				.then(res => {
					console.log(res.data.clientSecret)
					setClientSecret(res.data.clientSecret);
				})
		}
	}, [courseFee, axiosSecure])

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		// console.log('card', card);
		// card info
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card
		});

		if (error) {
			console.log('error', error);
			setCardError(error.message)
		}
		else {
			setCardError('')
			console.log('payment method', paymentMethod);
		}

		setProcessing(true);
		// # 
		const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
			clientSecret,
			{
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || 'unknown email',
						name: user?.displayName || 'unknown user'
					},
				},
			},
		);

		if (confirmError) {
			console.log(confirmError);
		}
		console.log('payment intent', paymentIntent); //console hoi na

		setProcessing(false);

		if (paymentIntent.status === 'succeeded') {
			setTransactionId(paymentIntent.id);

			// send payment info to server
			// const payment = {
			// 	name: user?.displayName,
			// 	email: user?.email,
			// 	transactionId: paymentIntent.id,
			// 	courseFee,
			// 	date: new Date(),
			// 	quantity: courseCart?.length,
			// 	classItems: courseCart.map(course => course._id),
			// 	courseCartItems: courseCart.map(course => course.courseId),
			// 	status: 'Payment Done',
			// 	courseName: courseCart.map(course => course.name)
			// }
			axiosSecure.post('/course-payment', payment)
				.then(res => {
					console.log(res.data);
					if (res.data.insertedId) {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Successfully payment done!',
							showConfirmButton: false,
							timer: 1500
						});
					}
				})
		}

	}
	return (
		<>
			<form className="mt-10" onSubmit={handleSubmit}>
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
				<button className="btn btn-outline btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
					Pay
				</button>
			</form>
			{cardError && <p className="text-red-500">{cardError}</p>}
			{transactionId && <p className="text-green-500">Your course payment is completed with transactionId: {transactionId}</p>}

		</>
	);
};

export default CheckoutForm;