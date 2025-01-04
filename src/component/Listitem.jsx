import React from 'react'

const Listitem = ({children, className}) => {
  return (
    <li className={` font-bold ${className} `}>{children}</li>
  )
}

export default Listitem