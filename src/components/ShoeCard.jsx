
const ShoeCard = ({shoe, changeBigShoeImage, bigShoeImg}) => {
const handleClick=()=>{
    if(bigShoeImg !== shoe.bigShoe){
        changeBigShoeImage(shoe.bigShoe)
    }
}

  return (
    <div className={` border-2 rounded-xl ${bigShoeImg === shoe.bigShoe ? 'border-coral-red' : 
     'border-transparent'} cursor-pointer max-sm:flex-1` }
      onClick={handleClick}>
        <div className=" flex flex-1 justify-center items-center bg-card bg-center sm:w-40
         bg-cover rounded-xl sm:h-40 max-sm:p-4 h-[100px]">
            <img src={shoe.thumbnail} alt="shoe thumbnail"
             className="object-contain w-full h-full"/>
        </div>
    </div>
  )
}
export default ShoeCard