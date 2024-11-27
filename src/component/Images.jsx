import React from 'react'

const Images = ({ src, alt}) => {
  return (
    <div>
            <img src={src} alt={alt} />
    </div>
  )
}

export default Images