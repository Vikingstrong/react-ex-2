import SkidkaBox from "./SkidkaBox";

import img1 from "../../../assets/skidka/img1.png"
import img2 from "../../../assets/skidka/img2.png"

export default function Skidka(){

    return (
        <section className="max-w-300 m-auto flex flex-col gap-5 lg:gap-10 lg:flex-row justify-between px-4 lg:px-0 py-10">
            <SkidkaBox img={img1} mainText="Nike, Adidas" text="40"/>
            <SkidkaBox img={img2} mainText="PlayStation 5" text="25"/>
        </section>
    )
}