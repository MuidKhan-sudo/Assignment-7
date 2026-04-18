import React from 'react'

const StatsSection = () => {
    return (
        <div className='container mx-auto my-7'>
            <div className='flex justify-center gap-8'>
                <div className='text-center p-10 rounded-xl shadow-2xl text-[#244D3F] '>
                    <h2 className='text-3xl'>10</h2>
                    <p>Total Friends</p>
                </div>
                <div className='text-center p-10 rounded-xl shadow-2xl text-[#244D3F] '>
                    <h2 className='text-3xl'>3</h2>
                    <p>On Track</p>
                </div>
                <div className='text-center p-10 rounded-xl shadow-2xl text-[#244D3F] '>
                    <h2 className='text-3xl'>6</h2>
                    <p>Needs Attention</p>
                </div>
                <div className='text-center p-10 rounded-xl shadow-2xl text-[#244D3F] '>
                    <h2 className='text-3xl'>12</h2>
                    <p>Interection This Month</p>
                </div>
            </div>


        </div>
    )
}

export default StatsSection