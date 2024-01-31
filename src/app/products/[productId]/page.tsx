import React from 'react'

const Product = ({params}:{
    params:{
        productId:String;
    }
}) => {
  return (
    <div>Product {params.productId}</div>
  )
}

export default Product