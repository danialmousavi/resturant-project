import React from 'react'
import Pagination from './Pagination'
import { GetFetch } from '@/utils/services/fetcher'
import ProductCart from '../modules/product/ProductCart';

export default async function ProductList() {
    const products=await GetFetch("menu");
    console.log("products",products);
    
  return (
                <div className="col-sm-12 col-lg-9">
                    <div className="row gx-3">
                        {products?.products.map(product=>(
                            <ProductCart item={product}/>
                        ))}
                    </div>
                    <Pagination/>
                </div>
  )
}
