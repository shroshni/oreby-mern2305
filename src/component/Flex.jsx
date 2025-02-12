import React from "react";

const Flex = ({ children , className , dref}) => {
  return (
  <div ref={dref} className = {`flex ${className}`} flex>
    {children}
    </div>
    
  ) 
};

export default Flex;
