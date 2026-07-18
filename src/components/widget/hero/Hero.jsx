
import bgImg from "../../../assets/hero/bgimg.png"
import img1 from "../../../assets/hero/img1.png"
import img2 from "../../../assets/hero/img2.png"

import "./hero.css"

export default function Hero(){

    return (
        <section className="max-w-300 herosect lg:relative bg-no-repeat bg-cover rounded-4xl m-4 lg:m-auto p-4 lg:p-10 flex flex-col lg:flex-row-reverse items-center gap-5 lg:gap-0 justify-between">
            <img className="lg:mr-35" src={img1} alt="" />
            <div className="mb-10 lg:mb-0 flex text-white flex-col lg:gap-10 gap-5 text-center items-center lg:text-start lg:items-start">
                <p className="text-xl lg:text-3xl">Sale up to 20% off</p>
                <h1 className="text-2xl lg:text-5xl font-bold">Apple Watch Ultra 2</h1>
                <p className="lg:text-lg">The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP.</p>
                <div className="flex gap-5 items-center lg:items-start">
                    <button className="py-2 px-4 bg-[#D75300] text-white rounded-4xl lg:text-2xl">Shop Now</button>
                    <button className="py-2 px-4 bg-white text-black rounded-4xl lg:text-2xl">Learn More</button>
                </div>
            </div>
            <img className="hidden lg:block absolute right-0" src={img2} alt="" />
        </section>
    )
}