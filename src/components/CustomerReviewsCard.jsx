import { star } from "../assets/icons";

const CustomerReviewsCard = ({review}) => {
    return(
        <div className="flex flex-col items-center gap-4">
            <img
             src={review.imgURL}
             alt="customerReviewImg"
             width={100}
             height={100}
             className="rounded-full"
             />
             <p className="max-w-sm text-center text-slate-gray info-text">{review.feedback}</p>
             <img src={star} alt="startIcon" width={35} height={35} />
             <p className="text-slate-gray">{review.rating}</p>
             <h3 className="font-palanquin text-3xl text-center font-bold -mt-[20px]">{review.customerName}</h3>
        </div>
    )
}
export default CustomerReviewsCard;
