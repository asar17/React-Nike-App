import Button from '../components/Button'
const Subscribe = () =>{
    return(
    <section className="max-lg:ml-6 flex flex-col items-center -mt-[10%]">
        <h3 className="font-bold leading-[68px]  text-4xl font-palanquin max-lg:text-3xl text-center">Sign Up For <span className="text-coral-red">Updates</span> & Newsletter </h3>
        <div className="flex w-full mt-4 h-20 border-gray border-2 border-solid rounded-xl max-sm:flex-col max-sm:gap-8 ">
            <input type="text" placeholder='subscribe@nike.com' className='input'/>
            <Button label="Sign Up"/>
        </div>
    </section>
    )
}
export default Subscribe

