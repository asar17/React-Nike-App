import CustomerReviewsCard from "../components/CustomerReviewsCard"
import { reviews } from '../constant/index'
const CustomerReviews = () =>{
    return(
    <section className="flex flex-col max-container">
        <div className="flex flex-col items-center">
            <h2 className="font-palanquin  text-4xl font-bold text-center">What Our <span className="text-coral-red">Customer</span> Say </h2>
            <p className="text-slate-gray text-center max-w-lg info-text mt-4">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>
        </div>
        <div className="flex justify-evenly mt-10 max-lg:flex-col max-lg:gap-6">
            {reviews.map((review)=>(
               <CustomerReviewsCard review={review}/>
            ))}
        </div>
    </section>
    )
}
export default CustomerReviews