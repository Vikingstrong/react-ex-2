import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer(){

    return (
        <footer className="flex max-w-300 m-auto px-4 lg:px-0 py-20 flex-col items-start lg:items-center lg:flex-row justify-between gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
                <h1 className="text-3xl lg:text-5xl font-bold">Shopverse</h1>
                <p className="text-lg">@ 2024 Shopverse  All Rights Reserved</p>
                <div className="flex gap-5 items-center">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className='flex flex-col gap-5 lg:gap-10 lg:flex-row lg:items-center lg:text-end'>
                <nav className='flex flex-col gap-5 font-light text-xl'>
                    <p className='text-2xl font-medium'>Download</p>
                    <p>Windows</p>
                    <p>Mac OS</p>
                    <p>Android</p>
                    <p>iOS</p>
                </nav>
                <nav className='flex flex-col gap-5 font-light text-xl'>
                    <p className='text-2xl font-medium'>Resources</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Categories</p>
                    <p>Help</p>
                </nav>
            </div>
        </footer>
    )
}