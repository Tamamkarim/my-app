'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../utils/ProductApis'
function ProductSection() {
	const [productList,setProductList]= useState([])
	useEffect(()=>{
		getLatestProducts_();
	},[])
	const getLatestProducts_=()=>{
		ProductApis.getLatestProducts().then(res=>{
			console.log(res.data.data);
			setProductList(res.data.data)
			console.log(ProductList)
		})
	}
	
	return (
		
		<div className='px-10 md:px-20'>
		<h2 className='my-4 text-xl'>Our Lastet Porducts</h2>
        	<ProductList productList={productList}/></div>
	)
}

export default ProductSection