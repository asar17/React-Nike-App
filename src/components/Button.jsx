const Button = ({ label, iconUrl , className}) =>{
    return(
        <button className={`flex justify-center items-center  font-montserrat text-lg px-7 py-4 rounded-full gap-4  
        ${className? `${className}`:`bg-coral-red text-white border-coral-red`}  `}
        >
    
            {label}
            {iconUrl &&
                <img
                src={iconUrl}
                alt="shopIcon"
                />
            }
         
        </button>
    )
}
export default Button