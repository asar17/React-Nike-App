import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";
import { copyrightSign } from "../assets/icons";

const Footer = () =>{
    return(
    <footer className="bg-black max-container">
      <div className="flex flex-col gap-14">
        {/* first div */}
        <div className="flex flex-col items-start gap-6">
            <a href="/">
              <img src={footerLogo} alt="footerLogo" width={150} height={46} className="m-0"/>
            </a>
            <p className="text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                Get shoes ready for the new term at your nearest Nike store. Find
                Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social)=>(
                <div className="flex justify-center items-center p-2 rounded-full bg-white">
                  <img src={social.src} width={24} height={24} alt={social.alt} className=""/>
                </div>
              ))}
            </div>
         </div>
         {/* second div */}
         <div className="flex lg:gap-10 gap-20 max-lg:items-center  max-lg:justify-between max-md:flex-col flex-wrap flex-1">
                  {footerLinks.map((f)=>(
                    <div className="flex flex-col text-white ">
                        <h3 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">{f.title}</h3>
                         <ul className="font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray cursor-pointer">
                              {f.links.map((link)=>(
                                <li>
                                  {link.name}
                                </li>
                                 
                              ))}
                          </ul>
                          </div>
                   ))}
                
         </div>
         {/* third div */}
         <div className="flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img 
              src={copyrightSign}
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
         </div>
      </div>
    </footer>

  )
}
export default Footer