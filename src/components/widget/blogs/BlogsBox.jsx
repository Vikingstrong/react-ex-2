import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function BlogsBox({img, text, date}){

    return (
        <div className="flex flex-col gap-5">
            <img src={img} alt="" />
            <h3 className="text-xl font-semibold lg:text-[22px]">{text}</h3>
            <div className="flex items-center justify-between text-[#5E5E5E] font-light">
                <p className="text-lg lg:text-xl">{date}</p>
                <p className="underline">Read More <ArrowForwardIcon/></p>
            </div>
        </div>
    )
}