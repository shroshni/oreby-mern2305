import React from 'react'
import Banner from '../component/Banner'
import Information from '../component/Information'
import Offers from '../component/Offers'
import NewArrivals from '../component/NewArrivals'
import Product from '../component/Product'
const Home = () => {
  return (
    <div>
     <Banner /> 
     <Information />  
     <Offers  />
     <NewArrivals/>
     
    </div>
  )
}

export default Home