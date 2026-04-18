import React from 'react'
import { useLoaderData } from 'react-router'
import Card from './Card'

const CardsSection = () => {
    const Cardsdata = useLoaderData()

    return (
        <div className='mx-13'>
            <h2 className='font-bold'>Your Friends</h2>
            
            <div className='grid grid-cols-4 gap-2.5'>
                {Cardsdata.map((data => <Card data={data}></Card>))}
            </div>

        
           
        </div>
    )
}

export default CardsSection