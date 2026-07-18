import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function NavMore({text}){

    return (
        <div className="flex w-full justify-between">
            <p className="text-xl lg:text-3xl font-medium">{text}</p>
            <p className="lg:text-2xl underline">Show More <ArrowForwardIcon /> </p>
        </div>
    )
}