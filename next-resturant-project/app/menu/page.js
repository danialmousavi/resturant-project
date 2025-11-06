import CategoryList from '@/components/menu/CategoryList';
import Loading from '@/components/menu/Loading';
import ProductList from '@/components/menu/ProductList';
import Search from '@/components/menu/Search';
import { GetFetch } from '@/utils/services/fetcher'
import React, { Suspense } from 'react'

export default async function page({searchParams}) {
    const categories=await GetFetch("categories");
    const params = new URLSearchParams(searchParams)
  return (
    <section className="food_section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-3">
                    <Search/>
                    <hr />
                        <CategoryList categories={categories}/>
                    <hr />
                    <div>
                        <label className="form-label">مرتب سازی</label>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                بیشترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                            <label className="form-check-label cursor-pointer">
                                کمترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                پرفروش ترین
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                با تخفیف
                            </label>
                        </div>
                    </div>
                </div>
                <Suspense key={params.toString()}  fallback={<Loading/>}>
                    <ProductList params={params.toString()}/>
                </Suspense>
            </div>
        </div>
    </section>
  )
}
