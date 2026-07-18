import stars from "../../../assets/popular/stars.png"


export default function PopularCard({img, name, price, oldPrice}){

    return (
        <div className="flex w-full lg:w-[23%] flex-col justify-between gap-5 bg-[#F9F9F9] p-10 lg:px-15 items-center rounded-4xl">
            <img className="lg:w-41 lg:h-41 object-contain" src={img} alt="" />
            <div className="flex flex-col gap-2 items-center">
                <img src={stars} alt="" />
                <h4>{name}</h4>
                <div className="flex gap-1 items-end">
                    <p className="text-[#D75300] text-lg">{price}</p>
                    <p className="text-[#898989] text-sm">{oldPrice}</p>
                </div>
            </div>
        </div>
    )
}