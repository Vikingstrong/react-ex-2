

export default function SkidkaBox({img, text, mainText}){

    return (
        <div className="flex flex-col w-full gap-5 p-5 lg:p-10 bg-[#FAFAFA] max-h-100 items-center relative rounded-4xl">
            <h2 className="text-2xl lg:text-5xl font-medium">{mainText}</h2>
            <p className="text-xl lg:text-3xl">MIN {text}% OFF</p>
            <img className="w-100" src={img} alt="" />
            <button className="absolute bottom-10 py-2 px-4 bg-[#D75300] text-white rounded-4xl lg:text-2xl">Shop Now</button>
        </div>
    )
}