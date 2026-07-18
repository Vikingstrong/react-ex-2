import NavMore from "../../shared/NavMore";
import PopularCard from "./PopularCard";

import img1 from "../../../assets/popular/img1.png"
import img2 from "../../../assets/popular/img2.png"
import img3 from "../../../assets/popular/img3.png"
import img4 from "../../../assets/popular/img4.png"
import img5 from "../../../assets/popular/img5.png"
import img6 from "../../../assets/popular/img6.png"
import img7 from "../../../assets/popular/img7.png"
import img8 from "../../../assets/popular/img8.png"


export default function PopularProduct(){

    return (
        <section className="flex flex-col gap-10 max-w-300 m-auto p-4 lg:px-0 py-10 lg:pb-20">
            <NavMore text="Popular Products"/>
            <div className="flex flex-wrap gap-5 justify-between">
                <PopularCard img={img1} name="Magnetic Case" price="$13.49" oldPrice='$18.99'/>
                <PopularCard img={img2} name="UCOMX Nano 3 in 1" price="$39.99" oldPrice='$49.99 '/>
                <PopularCard img={img3} name="NB Fresh Foam" price="$71.99" oldPrice='$81.99'/>
                <PopularCard img={img4} name="Bose QuietComfort" price="$379.00" oldPrice='$429.00'/>
                <PopularCard img={img5} name="BUGANI BT Speaker" price="$59.93" oldPrice='$129.98'/>
                <PopularCard img={img6} name="Galaxy Tab A9+" price="$169.99" oldPrice='$219.99'/>
                <PopularCard img={img7} name="Acer Aspire 1" price="$228.27" oldPrice='$300.00'/>
                <PopularCard img={img8} name="Redragon M810" price="$32.99" oldPrice='$39.99'/>
            </div>
        </section>
    )
}