import React from 'react'
import Container from './Container'
import Title from './Title'
import Product from './Product'
import Flex from './Flex'


const NewArrivals = () => {
  return (
    <div>
      <section className='mt-[123px] mb-[100px]'>
        <Container>
          <div>
            <Title className="mb-12" heading="New Arrivals"/>
            <Flex className='justify-between flex-wrap  lg:flex-nowrap'>
            <Product productImage="images/product1.png" isNew={true}/>
            <Product productImage="images/product1.png" isNew={false}/>
            <Product productImage="images/product1.png" isNew={true}/>
            <Product productImage="images/product1.png" isNew={false}/> 
            
            </Flex>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default NewArrivals
