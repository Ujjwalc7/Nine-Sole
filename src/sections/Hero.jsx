import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import {statistics,shoes} from "../constants/index"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <>
    <section id="home" className=" w-full flex xl:flex-row flex-col
     min-h-screen gap-10 max-container justify-center">
      <div className="relative xl:w-2/5 flex flex-col justify-center
       items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px]
         max-sm:leading-[82px] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
          </span> <br />
          <span className=" text-coral-red inline-block mt-3">
            Nine Sole
          </span> Shoes
          </h1>
          <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6
           mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quallity comfort,
             and innovation for your active life.
          </p>
          <Button label="Shop now" iconURL={arrowRight}/>
          <div className=" flex justify-start items-start flex-wrap
           w-full mt-20 gap-16">
            {statistics.map((item)=>(
              <div key={item.label}>
                <p className=" text-4xl font-montserrat
                 font-bold">
                  {item.value}
                </p>
                <p className=" leading-7 font-montserrat text-slate-gray">
                  {item.label}
                </p>
              </div>
            ))}
           </div>
      </div>

      <div className=" flex flex-1 justify-center items-center xl:min-h-screen
       max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500}
         className=" object-contain relative z-10"/>
      </div>
      
    </section>
    <div className="flex flex-1 gap-6 max-sm:gap-2 p-5 absolute -m-[5%] sm:-m-[3%] xl:left-[50%] xl:top-[100%] -left-[-18%]">
     {shoes.map((shoe,index)=>(
       <div key={shoe}>
         <ShoeCard shoe={shoe} changeBigShoeImage={(shoe)=>{
           setBigShoeImg(shoe)
         }}
          bigShoeImg={bigShoeImg} />
       </div>
     ))}
   </div>
   </>
  )
}
export default Hero