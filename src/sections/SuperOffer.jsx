import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from '../components/Button'
const SuperOffer = () =>{
    return(
    <section className="flex flex-1 justify-between  max-lg:flex-col max-container">
        <div className="flex flex-1 max-lg:pl-10">
          <img
             src={offer}
             alt='Shoe Promotion'
             width={773}
             height={687}
             className='object-contain w-full'
          />
        </div>
        <div className="flex flex-col flex-1 max-lg:mt-20">
          <h2 className="font-bold text-4xl font-palanquin text-center"> <span className="text-coral-red">Special</span> Offer </h2>
          <p className='mt-4 info-text'>
                Embark on a shopping journey that redefines your experience with
                unbeatable deals. From premier selections to incredible savings, we
                offer unparalleled value that sets us apart.
          </p>
          <p className='mt-6 info-text'>
                Navigate a realm of possibilities designed to fulfill your unique
                desires, surpassing the loftiest expectations. Your journey with us is
                nothing short of exceptional.
          </p>
          <div className="flex gap-4 mt-20">
            <Button label="Shop Now" iconUrl={arrowRight}/>
            <Button label="Learn More"   
               className="bg-white border border-solid border-slate-gray text-slate-gray hover:bg-coral-red hover:text-white hover:border-coral-red"
            />
          </div>
        </div>
    </section>
    )
}
export default SuperOffer