import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from '../constant/index'
const Nav = () =>{
    return(
       <header className="w-full absolute px-8 py-8 z-10">
          <nav className="flex justify-between max-container">
            {/* right side */}
            <img 
               src={headerLogo}
               alt="headerLogo"
               width={129}
               height={129}
            />
            {/* center side */}
            <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden"> 
                  {navLinks.map((link)=>(
                     <li key={link.href}>
                        <a 
                           href={link.href}
                           className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
            </ul>
         
            <div className="flex text-lg gap-2 wide:mr-24 font-montserrat font-medium leading-normal max-lg:hidden">
               <a href="/">Sign In</a>
               <span>/</span>
               <a href="/">Explore Now</a>
            </div>
            {/* left side */}
            <div className="hidden max-lg:block">
               <img 
                  src={hamburger}
                  alt="settingIcon"
                  width={25}
                  height={25}
                  className="lg:hidden"
               />
            </div>
          </nav>
       </header>
    )
}
export default Nav