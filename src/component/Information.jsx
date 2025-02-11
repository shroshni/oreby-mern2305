import React from 'react'
import { RiNumber2 } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div>
      
       <section className='py-5 border-y border-1 border-secondary'>
        <Container className="lg:container w-full">
          <Flex className='justify-between'>
          <Flex className='gap-4 items-center'> 
            <RiNumber2 className='text-2xl hidden sm:block'/>
            <Link className='font-normal text-base text-[#6D6D6D]'>Two years warranty</Link>
            </Flex>

            <Flex className=' gap-4 items-center'>
            <MdLocalShipping className='text-2xl hidden sm:block'/>
            <Link className='font-normal text-base text-[#6D6D6D]'>Free shipping</Link>
            </Flex>

            <Flex className=' gap-4 items-center'>
            <GiReturnArrow className='text- 2xl hidden sm:block'/>
            <Link className='font-normal text-base text-[#6D6D6D]'>Return policy in 30 days</Link>
            </Flex>

          </Flex>
          </Container>
        
        </section>
     
        
       
    </div>
  )
}

export default Information

