import React from "react";
import Images from "./Images";
import Flex from "./Flex";
import Listitem from "./Listitem";
import List from "./List";
import { MdFavorite } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({productImage, isNew}) => {
  return (
    <div className="relative lg:w-[376px] sm:w-[300px] md:w-[320px]">
      <div className="relative group">
        <Images src={productImage} alt="product" />
        <div className="bg-white/50 before:top-0 before:left-0 before:bottom-0 before:right-0  before:transform  before:scale-x-0  before:duration-500 before:ease hover:before:transform hover:before:scale-x-1  w-full h-[156px] absolute bottom-0 left-0 hidden group-hover:block">
          <List className="flex flex-col gap-5  p-7 text-right">
            <Listitem className="text-base font-normal text-secondary flex justify-end gap-4 items-center hover:font-bold hover:text-primary duration-300 ">
              Add to Wish List 
              <MdFavorite className="text-xl" />
            </Listitem>

            <Listitem className="text-base font-normal  text-secondary flex justify-end gap-4 items-center hover:font-bold hover:text-primary duration-300">
              Compare
              <FaArrowsRotate className="text-xl " />
            </Listitem>

            <Listitem className="text-base font-normal text-secondary flex justify-end gap-4 items-center hover:font-bold hover:text-primary duration-300">
              Add to Cart
              <FaShoppingCart className="text-xl " />
            </Listitem>
          </List>


        </div>
      </div>

      {isNew && (<h4 className="bg-primary text-white font-bold font-sm py-3 px-7 inline-block absolute top-5 left-5">
        New
      </h4>)}

      <Flex className="justify-between mt-6">
        <h2 className="font-bold font-dmsans text-xl text-primary ">
          Basic Crew Neck Tee
        </h2>
        <h4 className="font-normal text-base text-secondary leading-[30px]">
          $44.00
        </h4>
      </Flex>
      <h4 className="font-normal text-base text-secondary leading-[30px]">
        Black
      </h4>
    </div>
  );
};

export default Product;
