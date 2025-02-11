import Container from "./Container";
import React from 'react'
import Images from './Images'
import Flex from './Flex'

const Offers = () => {
  return (
    <section className=" mt-10 lg:mt-[140px] lg:px-[160px]">
        <Container>
            <Flex className='flex-wrap lg:flex-nowrap gap-10'>
           
            <Images src="/images/Ad_1.png" alt="Ad1" />
            
             <div className="flex flex-col gap-10">
             <Images src="/images/Ad_2.png" alt="Ad2"/>
             <Images src="/images/Ad_3.png" alt="Ad3"/>
             </div>
            </Flex>
           
        </Container>
    </section>
  )
}

export default Offers