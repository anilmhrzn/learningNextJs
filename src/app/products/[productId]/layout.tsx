'use client'
import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    {children}

    this is the layout where the carasouel or related  products will go or will be shown
      <div>other goods or products you may buy </div>  
    </>
  );
};

export default ProductDetailsLayout;
