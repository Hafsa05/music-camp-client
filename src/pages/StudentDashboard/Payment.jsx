import { Elements } from "@stripe/react-stripe-js";
import PageTitle from "../../Components/PageTitle/PageTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCourseCart from "../../hooks/useCourseCart/useCourseCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
	const [courseCart, refetch] = useCourseCart();
	const totalFee = courseCart.reduce((total, course) => course.courseFee + total, 0);
	const totalCourseFee = parseInt(totalFee);
	return (
		<div>
			<PageTitle pTitle={"Student Payment Gateway"}></PageTitle>
			<p className="text-3xl">Student Course Payment Gateway</p>

			<Elements stripe={stripePromise}>
				{/* <CheckoutForm cart={cart} price={price}></CheckoutForm> */}
				<CheckoutForm courseCart={courseCart} courseFee={totalCourseFee}></CheckoutForm>
			</Elements>
		</div>
	);
};

export default Payment;