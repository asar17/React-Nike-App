import {useState} from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { arrowRight } from "../assets/icons";
import { statics , shoesCollection } from '../constant';
import { bigShoe1 } from "../assets/images"
const Hero = () =>{
    const [bigShoeImg,setBigShoeImg]=useState(bigShoe1)
    return(
    <section className="flex flex-col  xl:flex-row justify-center items-center  max-container gap-10 0 w-full min-h-screen">
        {/* right side */}
        <div className="w-full xl:w-2/5 pt-28 relative justify-center items-start max-xl:padding-x ">
            <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
            <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival </span>
                <br/>
                <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
            </h1>
            <p className="tfont-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
                Discover stylish Nike arrivals, quality 
                comfort, and innovation for your active life.
            </p>
            <Button label="Shop now" iconUrl={arrowRight}/>
            <div className="flex justify-start items-start gap-16 max-sm:gap-8 mt-20  font-bold">
                {statics.map((stat)=>(
                    <div className="">
                        <p className="font-palanquin text-4xl max-sm:text-xl">{stat.value}</p>
                        <p className="font-montserrat text-slate-gray">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
        {/* left side */}
        <div className="flex relative w-full justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">
            <img
              src={bigShoeImg}
              alt="shoeImage"
              width={610}
              height={500}
              className="object-contain z-10"
            />
            <div className="flex absolute -bottom-[8%]  gap-14 ">
                {shoesCollection.map((shoe,index)=>(
                    <div key={index}>
                        <ShoeCard 
                           shoe={shoe}
                           changeBigShoeImg={(shoe)=>setBigShoeImg(shoe)}
                           bigShoeImg={bigShoeImg}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}
export default Hero