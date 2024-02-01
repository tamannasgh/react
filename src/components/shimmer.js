export default function Shimmer({count = 5}){
    return(
        <div className="flex flex-wrap justify-center mt-4">

            {
                Array(count).fill(0).map((value, index)=>{
                    return <div key={index} className="w-72 h-72 my-5 mx-4 rounded-md bg-slate-200"></div>
                }) 
            }

        </div>

    )
}