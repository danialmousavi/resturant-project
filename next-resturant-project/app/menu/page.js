import CategoryList from '@/components/menu/categoryList'
import { GetFetch } from '@/utils/services/fetcher'
import React from 'react'

export default async function page() {
    const categories=await GetFetch("categories");
    console.log("categories",categories);
    
  return (
    <section class="food_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-3">
                    <div>
                        <label class="form-label">جستجو</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="نام محصول ..." />
                            <a href="#" class="input-group-text">
                                <i class="bi bi-search"></i>
                            </a>
                        </div>
                    </div>
                    <hr />
                        <CategoryList categories={categories}/>
                    <hr />
                    <div>
                        <label class="form-label">مرتب سازی</label>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" />
                            <label class="form-check-label cursor-pointer">
                                بیشترین قیمت
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            <label class="form-check-label cursor-pointer">
                                کمترین قیمت
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" />
                            <label class="form-check-label cursor-pointer">
                                پرفروش ترین
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" />
                            <label class="form-check-label cursor-pointer">
                                با تخفیف
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-9">
                    <div class="row gx-3">
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/b1.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                <del>45,000</del>
                                                34,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/p4.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                121,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/p1.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                121,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/b2.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                51,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/s1.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                <del>51,000</del>
                                                44,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/p3.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                140,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/s2.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                <del>40,000</del>
                                                34,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/p4.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                144,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img class="img-fluid" src="./images/b5.jpg" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div class="options">
                                            <h6>
                                                44,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i class="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="d-flex justify-content-center mt-5">
                        <ul class="pagination">
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}
