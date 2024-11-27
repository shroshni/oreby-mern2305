import React from 'react'
import Images from './Images'
import Container from './Container'
import Listitem from './Listitem'
import List from './List'
import Flex from './Flex'

const  Navbar = () => {
  return (
    <div> 
      <Container>
      <Flex>
      <Images src="images/Logo.png" alt="logo"/>
      <List>
       <Listitem>Home</Listitem>
       <Listitem>About</Listitem>
       <Listitem>Home</Listitem>
       <Listitem>Home</Listitem>
       <Listitem>Home</Listitem>
       <Listitem>Home</Listitem>
       <Listitem>Home</Listitem>
      </List>
      </Flex>
      </Container>
        
    </div>
  )
}

export default  Navbar