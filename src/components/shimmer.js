export default function Shimmer({count = 5}){
    return(
        <div className="card-list">

            {
                Array(count).fill(0).map((value, index)=>{
                    return <div key={index} className="shimmer-card"></div>
                }) 
            }

        </div>

    )
}