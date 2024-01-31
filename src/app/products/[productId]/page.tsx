import React from "react";

const Product = ({params}:{
    params:{
        productId:String
    }
}) => {
  return <div>{params.productId} is being displayed</div>;
};

export default Product;
