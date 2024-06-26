import { products } from '../constant/index'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () =>{
    return(
    <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5 ">
            <h1 className="font-palanquin font-bold text-4xl">Our <span className="text-coral-red">Popular</span> Products</h1>
            <p className="sm:max-w-lg mt-2 font-montserrat stext-slate-gray">
                Experience top-notch quality and style with our sought-after
                selections. Discover a world of comfort, design, and value</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1  p-auto gap-14 ">
                {products.map((product,index)=>(
                    <PopularProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    </section>
    )
}
export default PopularProducts