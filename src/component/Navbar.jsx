import React, { useEffect, useState } from "react";
import Images from "./Images";
import Container from "./Container";
import Listitem from "./Listitem";
import List from "./List";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  let [menu, setMenu] = useState(true);

  let handleMenu = () => {
    setMenu(!menu);
  };
  console.log(menu);

  useEffect(() => {
    function navbarMenu(e) {
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
    navbarMenu();
    window.addEventListener("resize", navbarMenu());
  }, []);

  return (
    <nav className="bg-white py-5 relative z-50 ">
      <Container className="">
        <div className="px-5 py-5">
          <Flex className="flex justify-between items-center">
            <Images src="images/Logo.png" alt="logo" />

            {menu ? ( <IoMdClose
              onClick={handleMenu}
              className="lg:hidden absolute right-1 top-5"
            />) : (<FaBars
            onClick={handleMenu}
            className="lg:hidden absolute top-5 right-1"
          />)}
          
          <List className= {`${menu ? 'w-full lg:w-auto gap-5 lg:flex  absolute top-20 left-0 lg:sticky bg-secondary pl-5 lg:bg-transparent duration-500  '
              : 'w-full lg:w-auto gap-5 lg:flex  absolute top-20 left-[-100%] lg:sticky bg-red-500 pl-5 lg:bg-transparent duration-500' }`}>
                <Listitem className="mt-5">
                  <Link className="text-sm lg:text-secondary font-normal lg:hover:text-primary hover:font-bold duration-100">
                    Home
                  </Link>
                </Listitem>

                <Listitem className="mt-5">
                  <Link className="text-sm lg:text-secondary font-normal lg:hover:text-primary hover:font-bold duration-100">
                    Home
                  </Link>
                </Listitem>

                <Listitem className="mt-5">
                  <Link className="text-sm lg:text-secondary font-normal lg:hover:text-primary hover:font-bold duration-100">
                    Home
                  </Link>
                </Listitem>

                <Listitem className="mt-5">
                  <Link className="text-sm lg:text-secondary font-normal lg:hover:text-primary hover:font-bold duration-100">
                    Home
                  </Link>
                </Listitem>

                <Listitem className="mt-5">
                  <Link className="text-sm lg:text-secondary font-normal lg:hover:text-primary hover:font-bold duration-100">
                    Home
                  </Link>
                </Listitem>
              </List>
            
          </Flex>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
