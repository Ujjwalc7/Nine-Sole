import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className=" flex justify-between items-start gap-20
       flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <div className="flex flex-1 gap-2 items-end">
          <a href="/"> 
            <img src={logo} width={35} height={26} 
            className=" float-left max-md:w-[25px]"/>
          </a>
            <p className="text-white font-montserrat">Nine Sole
              </p>
          </div>
          <p className=" text-white-400 mt-6 max-md:text-xs text-base leading-7
           font-montserrat sm:max-w-sm"> Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
             </p>
             <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon)=>(
                <div className=" bg-white rounded-full w-12 h-12 flex justify-center items-center
                 max-md:w-8 max-md:h-8">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
             </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between lg:gap-10
         gap-20">
          
          {footerLinks.map((link)=>(
            <div key={link.title} className="flex flex-col">
            
              <h2 className=" text-xl text-coral-red
               mb-6 font-montserrat">{link.title}</h2>
            
            <ul>
              {link.links.map((i)=>(
                <li key={i.name} className="text-sm mt-3 leading-normal 
                 text-start text-white-400">
                <a href={i.link}>
                  <p>{i.name}</p>
                </a>
                </li>
              ))}
            </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between text-white-400 mt-24
       max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start gap-2
           items-center font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="" width={20} height={20}
             className=" rounded-full m-0"/>
             <p>Copyright. All rights reserved.</p>
          </div>
          <p className=" font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
      </footer>
  )
}
export default Footer