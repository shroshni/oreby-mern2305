import React from 'react'

const Title = ({heading, className}) => {
  return (
    <div>
        <h2 className={`text-[39px] font-bold font-dmsans text-primary ${className}`}>{heading}</h2>
    </div>
  )
}

export default Title