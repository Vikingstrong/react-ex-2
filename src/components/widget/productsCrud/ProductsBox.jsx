import {Button} from '@mui/material'

export default function ProductBox({item}){

    

    const {id, img, category, name, price, status} = item

    return (
        <div className="flex flex-col items-center gap-3 w-full lg:w-[23%] p-10 py-5 rounded-4xl bg-[#F9F9F9]">
            <img className="lg:w-50 rounded-4xl lg:h-50 object-cover" src={img} alt="" />
            <h1 className="text-xl font-semibold">{name.slice(0,13)} {name.length > 13 ? "..." : ""}</h1>
            <p className="text-lg font-medium">Price: ${price}</p>
            <p>{status ? "In Stock" : "Not Have Stock"}</p>
            <div className="flex items-center gap-5">
                <Button variant='contained' color='error'>Delete</Button>
                <Button variant='outlined' color='success'>Info</Button>
            </div>
        </div>
    )
}