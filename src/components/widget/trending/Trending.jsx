import TrendingCard from "./TrendingCard"
import NavMore from "../../shared/NavMore"

import img1 from "../../../assets/trending/img1.png"
import img2 from "../../../assets/trending/img2.png"
import img3 from "../../../assets/trending/img3.png"
import img4 from "../../../assets/trending/img4.png"
import img5 from "../../../assets/trending/img5.png"

export default function Trending(){

    return (
        <section className="flex flex-col gap-10 max-w-300 m-auto p-4 lg:px-0 lg:py-15">
            <NavMore text="Trending Categories"/>
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
                <TrendingCard img={img1} text="Mobiles"/>
                <TrendingCard img={img2} text="Laptops"/>
                <TrendingCard img={img3} text="Headphones"/>
                <TrendingCard img={img4} text="Monitors"/>
                <TrendingCard img={img5} text="Speakers"/>
            </div>
        </section>
    )
}