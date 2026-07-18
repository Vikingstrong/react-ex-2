import Header from "./components/shared/header/Header"
import Hero from "./components/widget/hero/Hero"
import Trending from "./components/widget/trending/Trending"
import Skidka from "./components/widget/skidka/Skidka"
import PopularProduct from "./components/widget/popular/Popular"
import Samsung from "./components/widget/samsung/Samsung"
import Blogs from "./components/widget/blogs/Blogs"
import Footer from "./components/shared/footer/Footer"

import ProductCrud from "./components/widget/productsCrud/ProductsCrud"

export default function App(){
  
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Trending/>
      <Skidka/>
      <ProductCrud />
      <PopularProduct/>
      <Samsung />
      <Blogs />
    </main>
    <Footer />
    </>
  )
}