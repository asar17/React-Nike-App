const ServicesCard = ({item}) => {
    return(
        <div className="flex flex-col flex-1 gap-4 shadow-3xl px-16 py-10 rounded-xl">
            <div className="w-11 h-11 rounded-full bg-coral-red flex justify-center items-center">
                <img src={item.imgURL} className="" width={24} height={24}/>
            </div>
            <h2 className="font-palanquin text-3xl leading-normal font-bold mt-5">{item.label}</h2>
            <p className="md:max-w-sm font-montserrat text-lg leading-normal text-slate-gray">{item.subtext}</p>
        </div>
    )
}
export default ServicesCard