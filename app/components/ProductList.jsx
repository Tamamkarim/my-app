import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ productList }) => {
	console.log(productList)
  if (!Array.isArray(productList)) {
    console.error('productList should be an array');
    return null;
  }

  return (
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
      {productList.map(item => (
        <ProductItem product={item} key={item.id}/>
      ))}
    </div>
  );
};

export default ProductList;