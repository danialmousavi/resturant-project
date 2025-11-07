import { getBlurDataURL } from "@/utils/helper";
import Image from "next/image";
import React from "react";


export async function generateStaticParams() {
  try {
    const res = await fetch(`http://localhost:8000/api/menu`, { cache: "force-cache" });
    if (!res.ok) throw new Error("Failed to fetch menu data");

    const data = await res.json();
    const posts = data.data.products;

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return []; // جلوگیری از شکست build
  }
}

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`http://localhost:8000/api/products/${decodeURI(params.slug)}`, {
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("Failed to fetch metadata for product");

    const data = await res.json();
    const product = data.data;

    return {
      title: `${product.name} | فروشگاه`,
      description: product.description || "جزئیات محصول",
    };
  } catch {
    return {
      title: "محصول یافت نشد | فروشگاه",
      description: "صفحه مورد نظر شما پیدا نشد.",
    };
  }
}

export default async function ProductPage({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`http://localhost:8000/api/products/${decodeURI(slug)}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    const data = await res.json();
    const product = data.data;

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
                          <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index + 1}
                          ></button>
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
                            alt={product.name}
                          />
                        </div>
                        {product.images.map((img) => (
                          <div className="carousel-item" key={img.id}>
                            <Image
                              src={img.image}
                              width={464}
                              height={309}
                              placeholder="blur"
                              blurDataURL={getBlurDataURL()}
                              alt={product.name}
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
              <div className="col-sm-6 col-lg-3">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img className="img-fluid" src="./images/b1.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>لورم ایپسوم متن</h5>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است.
                      </p>
                      <div className="options">
                        <h6>
                          <del>45,000</del>
                          34,000
                          <span>تومان</span>
                        </h6>
                        <a href="">
                          <i className="bi bi-cart-fill text-white fs-5"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    return (
      <div className="container text-center py-5">
        <h2>مشکلی در بارگذاری محصول پیش آمد 😔</h2>
        <p>لطفاً بعداً دوباره تلاش کنید.</p>
      </div>
    );
  }
}
