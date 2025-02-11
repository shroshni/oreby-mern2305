import React from 'react'

const Container = ( {children, className}) => {
  return (
    <div className={`lg:w-container sm:w-full mx-auto px-5 ${className}`}>{children}
</div>
  )
}

export default Container