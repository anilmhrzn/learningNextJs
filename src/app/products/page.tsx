import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
<section>

    <div>This is Products page list of products are:</div>
    <div className='flex flex-col ml-10'>

    <Link href='/products/caps'>caps</Link>
    <Link href='/products/pant'>pant</Link>
    </div>
</section>
  )
}

export default Products