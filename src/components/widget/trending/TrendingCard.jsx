

export default function TrendingCard({img, text}){

    return (
        <div className="flex flex-col items-center gap-5">
            <img src={img} alt="" />
            <h2 className="text-3xl font-medium">{text}</h2>
        </div>
    )
}