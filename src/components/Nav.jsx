import { useState, useEffect } from "react"
import { hamburger } from "../assets/icons"
import logo from "../assets/images/logo.png"
import { navLinks } from "../constants"
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {RiSearch2Line} from "react-icons/ri"



const Nav = () => {
    const [show, setShow] = useState(true);
    const [mobileMenu, setMoileMenu] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const controllNavbar=()=>{
        // console.log(window.scrollY);
        if(window.scrollY > 100){
            if(window.scrollY > lastScrollY){
                setShow(false)
                setLastScrollY(window.scrollY)
            }else{
                setLastScrollY(window.scrollY)
                setShow(true)
            }
        }else{
            setLastScrollY(window.scrollY)
            setShow(true)
        }

        // setLastScrollY(window.scrollY)
    }

    const handleMenu=()=>{
        if(!mobileMenu){
            setMoileMenu(true)
            
        }else{
            setMoileMenu(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',controllNavbar)
        return ()=>{
            window.removeEventListener('scroll',controllNavbar)
        }
    },[lastScrollY])

  return (
    
    <header className={`padding-x py-6 max-lg:py-5 max-sm:py-3 fixed z-20 w-full
    backdrop-blur-md backdrop-sepia-0 ${!show && " -translate-y-28 ease-in-out duration-300 "} ease-in-out duration-300 `}>
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={logo} alt="logo" width={30} height={30} className=" max-lg:w-[27px] max-lg:h-[35px]"/>
            </a>
            <ul className=" flex-1 flex justify-center items-center gap-16
             max-lg:hidden">
                {navLinks.map((item)=>(
                    <li key={item.label}>
                    <a href={item.href} className=" font-montserrat
                     leading-normal text-lg text-slate-gray">{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="max-lg:hidden flex gap-6 items-center">
                <div className="flex flex-1 justify-start items-center
                rounded-full flex-wrap 
                  bg-gray-300">
                    <div  className=" hover:bg-gray-400/40 rounded-full p-3
                     cursor-pointer">
                    <RiSearch2Line/>
                    </div>
                <input type="text" placeholder="Search" className="rounded-e-full outline-none bg-gray-300 w-[170px]"/>
                </div>
                <AiOutlineHeart style={{fontSize:"27px", cursor:"pointer"}}/>
                <HiOutlineShoppingBag  style={{fontSize:"27px", cursor:"pointer"}}/>
            </div>
            <div className="lg:hidden hover:border-[3px] p-1 border-slate-400 rounded-[6px]"
             onClick={handleMenu}>
                <img src={hamburger} alt="" width={25} height={25}/>
            </div>
            
        </nav>
        <ul className={`absolute flex-1 flex-col justify-center items-center gap-16
             bg-white h-screen w-full left-0 ${mobileMenu ? "translate-x-[1%] ease-in-out duration-300" 
            : "-translate-x-[100%] ease-in-out duration-300"}`}>
                {navLinks.map((item)=>(
                    <li key={item.label} className=" font-montserrat
                    leading-normal text-lg text-slate-gray text-center
                     mt-20 flex-1 flex justify-center items-center
                     gap-6" onClick={()=>setMoileMenu(false)}>
                        
                    <img src={item.icon} width={28} height={28}/>
                        
                    <a href={item.href} >{item.label}</a>
                    </li>
                ))}

            </ul>
    </header>
  )
}
export default Nav