const ShoeCard = ({shoe,bigShoeImg,changeBigShoeImg}) => {
   const handleChangeBigShoeImg = () =>{
        changeBigShoeImg(shoe.bigShoeUrl)
   }
    return(
        <div className={`border border-solid ${bigShoeImg == shoe.bigShoeUrl ? "border-coral-red" : "border-transparent" } rounded-xl cursor-pointer max-sm:flex-1`} onClick={handleChangeBigShoeImg}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40">
                <img
                   src={shoe.actualShoeUrl}
                   width={127}
                   height={103.34}
                   className='object-contain'
                />
            </div>
        </div>
       
    )
}
export default ShoeCard;