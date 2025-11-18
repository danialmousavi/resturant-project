"use client";
import React from "react";
import Image from "next/image";
import { getBlurDataURL } from "@/utils/helper";
import Link from "next/link";
import { addToCart, removeFromCart } from "@/utils/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function ProductCart({ item }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(removeFromCart(product.id));
    dispatch(addToCart({ product, qty: 1 }));
    toast.success("محصول به سبد خرید اضافه شد!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });
  };
  return (
    <div className="col-sm-6 col-lg-4" key={item.id}>
      <div className="box">
        <div>
          <div className="img-box">
            <Link href={`/product/${item.slug}`}>
              <Image
                src={item.primary_image}
                width="100"
                height="65"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt={item.name}
                placeholder="blur"
                blurDataURL={getBlurDataURL()}
              />
            </Link>
          </div>
          <div className="detail-box">
            <Link href={`/product/${item.slug}`}>
              <h5>{item.name}</h5>
            </Link>
            <p>{item.description}</p>
            <div className="options">
              <h6>
                {item.is_sale ? (
                  <>
                    <del>{item.price.toLocaleString()}</del>{" "}
                    {item.sale_price.toLocaleString()}
                  </>
                ) : (
                  item.price.toLocaleString()
                )}
                <span> تومان</span>
              </h6>
              <button onClick={() => handleAddToCart(item)}>
                <i className="bi bi-cart-fill text-white fs-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
