import NavMore from "../../shared/NavMore";
import BlogsBox from "./BlogsBox";

import img1 from "../../../assets/blogs/img1.png"
import img2 from "../../../assets/blogs/img2.png"
import img3 from "../../../assets/blogs/img3.png"

export default function Blogs(){
    return (
        <section className="flex gap-10 lg:pt-25 flex-col px-4 lg:px-0 py-10 max-w-300 m-auto">
            <NavMore text="Our Blogs"/>
            <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-8">
                <BlogsBox img={img1} text="Accessorize Like a Pro" date="10th January 2024"/>
                <BlogsBox img={img2} text="10 Timeless Wardrobe Staples" date="3rd February 2024"/>
                <BlogsBox img={img3} text="The Art of Sustainable Fashion" date="1st March 2024"/>
            </div>
        </section>
    )
    
}