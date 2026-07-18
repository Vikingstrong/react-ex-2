import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import logo from '../../../assets/logo/logo.png'


export default function Header(){

    return (
        <header className='max-w-300 p-4 lg:px-0 m-auto flex justify-between items-center'>
            <img src={logo} alt="" />
            <nav className='hidden lg:flex items-center gap-15 text-2xl'>
                <p>About</p>
                <p>Shop</p>
                <p>Categories</p>
                <p>Help</p>
            </nav>
            <div className='hidden lg:flex items-center gap-5'>
                <div className='bg-[#D9D9D9] flex items-center gap-2 py-3 px-3 rounded-4xl'>
                    <SearchIcon />
                    <input className="text-black text-sm outline-0" type="text" placeholder='Search for "Phones" ' />
                </div>
                <FavoriteBorderIcon/>
                <ShoppingBasketIcon />
            </div>
            <p className='lg:hidden text-2xl'>☰</p>
        </header>
    )
}