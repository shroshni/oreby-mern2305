import React from 'react'

const Container = ( {children, className}) => {
  return (
    <div className={`w-container  mx-auto px-5 ${className}`}>{children}
</div>
  )
}

export default Container