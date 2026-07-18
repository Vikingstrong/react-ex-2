import img from "../../../assets/samsung/img1.png"
import bgimg from "../../../assets/samsung/bgImg.png"

export default function Samsung(){

    return (
        <section className="relative samsung lg:min-h-100 flex bg-[#F8F8F8] items-center rounded-2xl flex-col lg:flex-row justify-between p-10 py-20 m-4 lg:p-10 lg:py-30 max-w-300 lg:m-auto">
            <img className="w-[70%] hidden lg:block z-10 absolute bottom-0 lg:-top-15 lg:right-0 lg:w-80" src={img} alt="" />
            <img className="absolute top-25 lg:top-10 left-5 z-0" src={bgimg} alt="" />
            <div className="flex flex-col gap-5 items-center lg:w-[50%] text-center lg:text-start lg:items-start">
                <h3 className="text-xl lg:text-3xl font-semibold">galaxy sale is live now</h3>
                <h2 className="text-3xl lg:text-6xl font-bold">Galaxy S24 | S24+</h2>
                <p className="text-lg font-medium lg:text-xl">Get up to $1,000 in trade-in credit from participating carriers. Terms apply.</p>
            </div>
        </section>
    )
}