import React from 'react'
import Banner from '../../components/homeComponents/Banner'
import StatsSection from '../../components/homeComponents/StatsSection'
import CardsSection from '../../components/cards/CardsSection'

const Home = () => {
  return (
    <div className='container mx-auto my-10'>
        <Banner></Banner>
        <StatsSection></StatsSection>
        <CardsSection></CardsSection>
    </div>
  )
}

export default Home