import React from "react";
import Link from "next/link";
const Products = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div>list of products</div>
        <Link href="/products/caps">caps</Link>
        <Link href="/products/pant">pant</Link>
        <Link href="/products/shirt">shirt</Link>
        <Link href="/products/shoes">shoes</Link>
        <Link href="/products/shocks">shocks</Link>s{" "}
      </div>
    </>
  );
};

export default Products;
