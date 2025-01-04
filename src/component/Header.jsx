import React, { useState, useRef, useEffect } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { HiOutlineBars2 } from "react-icons/hi2";
import List from "./List";
import Listitem from "./Listitem";
import { Link } from "react-router-dom";
import Input from "./Input";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Images from "./Images";
import { ImCross } from "react-icons/im";

const Header = () => {
  let [categoreModal, setCategoreModal] = useState(false);
  let [accountModal, setAccountModal] = useState(false);
  let [cartModal, setCartModal] = useState(false);

  let categoreRef = useRef();
  let accountRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (categoreRef.current.contains(e.target)) {
        setCategoreModal(true);
      } else {
        setCategoreModal(false);
      }

      if (accountRef.current.contains(e.target)) {
        setAccountModal(true);
      } else {
        setAccountModal(false);
      }

      if(cartRef.current.contains(e.target)){
        setCartModal(true);
        }else{
          setCartModal(false);
        }
    });
  }, []);

  return (
    <header className=" bg-headerbg py-6">
      <Container>
        <Flex className="justify-between items-center">
          <Flex dref={categoreRef} className="items-center relative">
            <HiOutlineBars2 />
            <p className="text-sm font-normal text-primary select-none ml-2">
              Shop by Category
            </p>

            <div>
              {categoreModal && (
                <List className="absolute top-16 left-0 w-[263px] bg-primary ">
                  <Listitem className=" border border-[#9747ff]">
                    <Link className="text-sm font-normal text-white px-5 py-5 inline-block hover:font-bold hover:ml-3 duration-200 ">
                      Accesories{" "}
                    </Link>
                  </Listitem>
                  <Listitem className=" border border-[#9747ff]">
                    <Link className="text-sm font-normal text-white px-5 py-5 inline-block hover:font-bold hover:ml-3 duration-200">
                      Furniture{" "}
                    </Link>
                  </Listitem>
                  <Listitem className=" border border-[#9747ff]">
                    <Link className="text-sm font-normal text-white px-5 py-5 inline-block hover:font-bold hover:ml-3 duration-200">
                      lectronics{" "}
                    </Link>
                  </Listitem>
                  <Listitem className=" border border-[#9747ff]">
                    <Link className="text-sm font-normal text-white px-5 py-5 inline-block hover:font-bold hover:ml-3 duration-200">
                      {" "}
                      Clothes{" "}
                    </Link>
                  </Listitem>
                  <Listitem className=" border border-[#9747ff]">
                    <Link className="text-sm font-normal text-white px-5 py-5 inline-block hover:font-bold hover:ml-3 duration-200">
                      {" "}
                      Bags{" "}
                    </Link>
                  </Listitem>
                  <Listitem className=" border border-[#9747ff]">
                    <Link className="text-sm font-normal text-white px-5 py-5 inline-block hover:font-bold hover:ml-3 duration-200">
                      {" "}
                      Home appliances{" "}
                    </Link>
                  </Listitem>
                </List>
              )}
            </div>
          </Flex>

          <div className="relative w-[601px]">
            <Input
              className="w-full h-[50px] hidden lg:block rounded-none bg-white placeholder:pl-5"
              placeholder="Search Products"
            />
            <IoSearch className=" absolute hidden lg:blocktop-4 right-4 text-2xl" />
          </div>

          <Flex className="gap-10 items-center">
            <div className="flex">
              
              <Flex dref={accountRef} className=" relative ">
              <FaUserAlt />
                <IoMdArrowDropdown />
                <div>
                  {accountModal && (
                    <div className="absolute top-7 right-0 w-[200px] text-center border border-solid border-[#9747ff] duration-300 bg-white">
                      <Link className="block hover:text-white hover:bg-black hover:font-bold text-sm font-normal px-3 py-3 ">
                        My Account
                      </Link>
                      <Link className="block hover:text-white hover:bg-black hover:font-bold text-sm  font-normal px-3 py-3 ">
                        Log Out
                      </Link>
                    </div>
                  )}
                </div>
              </Flex>
            </div>

            <Flex dref={cartRef} className="relative ">
              <FaShoppingCart />
              {cartModal && (
                 <div className=" absolute top-8 right-0 border border-solid border-[#9747ff]">
                 <div className=" flex  justify-between  p-5 w-[360px]  bg-headerbg ">
                   <div className="w-[80px] h-[80px] border border-1">
                     <Images src="images/smart watch.webp" alt="smart watch" />
                   </div>
                   <div className="">
                     <p className="font-bold py-2"> Black Smart Watch</p>
                     <p className="font-bold">$44.00</p>
                   </div>
                   <div className="flex items-center justify-center">
                     <ImCross />
                   </div>
                 </div>
                 <div className=" flex flex-col gap-5 border border-1 p-5 ">
                   <div className="text-xl">
                     Subtotal: <span className="font-bold">$44.00</span>
                   </div>
 
                   <div className="flex justify-between">
                     <div className="flex items-center justify-center w-[148px] h-[50px] border border-1 text-black font-bold hover:text-white hover:bg-black ">
                       View Cart
                     </div>
                     <div className="flex items-center justify-center w-[148px] h-[50px] border border-1 text-black font-bold hover:text-white hover:bg-black">
                       Checkout
                     </div>
                   </div>
                 </div>
               </div>
              )}
             
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
