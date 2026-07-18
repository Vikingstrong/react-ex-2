import dataProduct from "../../../config/data"
import ProductBox from "./ProductsBox"

export default function ProductCrud(){

    const [dataOfProduct, setDataOfProduct] = useState(dataProduct)

    function del(id){
    }

    return (
        <section className="flex flex-wrap gap-5 max-w-300 m-4 lg:m-auto">
            {
                dataProduct.map(item => (
                    <ProductBox key={item.id} item={item}></ProductBox> 
                ))
            }
        </section>
    )
}