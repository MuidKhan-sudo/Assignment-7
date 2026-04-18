import { Link } from "react-router"


const Card = ({ data }) => {
    
    return (
        <div >
            <Link to={"/friendDetails"}>
          
            <div  className="w-[280px] bg-white rounded-2xl shadow-lg p-6 text-center font-sans ">

                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                        src={data.picture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>


                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                    {data.name}
                </h2>


                <p className="text-sm text-gray-500 mb-6">
                    62d ago
                </p>


                <div className="flex flex-col gap-3 items-center">

                    <div className="px-8 py-2.5 bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider rounded-full">
                        {data.tags}
                    </div>
                    <div className="px-8 py-2.5 bg-orange-100 text-orange-700 text-xs font-semibold tracking-wider rounded-full">
                        {data.status}
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Card