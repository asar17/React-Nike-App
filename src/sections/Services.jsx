import { services } from '../constant/index'
import ServicesCard from '../components/ServicesCard'
const Services = () =>{
    return(
    <section className="flex justify-between flex-wrap gap-9">
       {services.map((item)=>(
        <ServicesCard item={item}/>
       ))}
    </section>
    )
}
export default Services