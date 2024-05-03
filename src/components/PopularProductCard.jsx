import { star } from "../assets/icons";
const PopularProductCard = ({product}) => {
    return(
        <div className="flex flex-col justify-start gap-2 w-full max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center">
            <img src={product.imgUrl} alt="imgProduct" className='w-[282px] h-[282px]'/>
            <div className="flex gap-2 mt-5"> 
                <img src={star} alt="starIcon" width={20} height={20}/> 
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
                <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{product.name}</h1>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{product.price}</p>
            
        </div>
    )

}
export default PopularProductCard