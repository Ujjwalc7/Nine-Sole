import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className=" flex flex-col max-w-md flex-wrap justify-center
     max-lg:items-center">
        <div className=" w-[70px] h-[70px]  items-center
        ">
            <img src={imgURL} alt="" width={90} height={80} className=" object-contain w-full rounded-full" />
        </div>
        <p className="info-text mt-2 max-w-lg max-lg:text-base">" {feedback} "</p>
        <div className="flex gap-2 mt-2">
            <img src={star} className=" max-lg: w-[18px]" /> 
            <p className=" max-lg:text-base">({rating})</p>
        </div>
        <h3 className="text-xl max-lg:text-lg mt-3 font-montserrat font-semibold italic">{customerName}</h3>


    </div>
  )
}
export default ReviewCard