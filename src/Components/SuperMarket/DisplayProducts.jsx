import React from 'react'
import Product from './Product'

const DisplayProducts = (props) => {

  const selectedProducts = props.products.map((product, idx) => {
    return product.category === props.productCategory &&
      <Product
        key={idx}
        product={product}
        addToCart={props.addToCart}
      />
  })

  return (
    <div className="product-list">
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts

// import React from 'react'
// import Product from './Product'
// import { products } from '../../data/market-data'


// const DisplayProducts = (props) => {
  

//   return (
//     <div className="product-list">
//         {props.products.map((product, idx) => (
//           product.category && 
//           <Product
//             key={idx}
//             product={product}

//           />
//         ))}
//     </div>
//   )
// }

// export default DisplayProducts