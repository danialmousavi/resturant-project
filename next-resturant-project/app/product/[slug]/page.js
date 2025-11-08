import ProductCart from "@/components/modules/product/ProductCart";
import { getBlurDataURL } from "@/utils/helper";
import { GetFetch } from "@/utils/services/fetcher";
import Image from "next/image";
import React from "react";

export default async function ProductPage({ params }) {
  const { slug } = params;
  const res = await fetch(
    `http://localhost:8000/api/products/${decodeURI(slug)}`
  );
  const data = await res.json();

  const product = data.data;
  const moreProductsResponse = await GetFetch("random-products?count=3");

  return (
    <>
      <section className="single_page_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row gy-5">
                <div className="col-sm-12 col-lg-6">
                  <h3 className="fw-bold mb-4">{product.name}</h3>
                  <h6>
                    {product.is_sale ? (
                      <>
                        <del>{product.price.toLocaleString()}</del>{" "}
                        {product.sale_price.toLocaleString()}
                      </>
                    ) : (
                      product.price.toLocaleString()
                    )}
                    <span> تومان</span>
                  </h6>
                  <p>{product.description}</p>

                  <div className="mt-5 d-flex">
                    <button className="btn-add">افزودن به سبد خرید</button>
                    <div className="input-counter ms-4">
                      <span className="plus-btn">+</span> 
                      
                      <div className="input-number">1</div>
                      <span className="minus-btn">-</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>
                      {product.images.map((img, index) => (
                        <>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index + 1}
                          ></button>
                        </>
                      ))}
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Image
                          src={product.primary_image}
                          width={464}
                          height={309}
                          placeholder="blur"
                          blurDataURL={getBlurDataURL()}
                            alt="product img"

                        />
                      </div>
                      {product.images.map((img) => (
                        <div className="carousel-item">
                          <Image
                            src={img.image}
                            width={464}
                            height={309}
                            placeholder="blur"
                            blurDataURL={getBlurDataURL()}
                            alt="product img"
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="food_section my-5">
        <div className="container">
          <div className="row gx-3">
            {moreProductsResponse.map((product) => (
                <ProductCart key={product.id} item={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
