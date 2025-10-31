import React from "react";
import Image from "next/image";
import { getBlurDataURL } from "@/utils/helper";

export default function ProductCart({item}) {
  return (
    <div className="col-sm-6 col-lg-4" key={item.id}>
      <div className="box">
        <div>
          <div className="img-box">
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
          </div>
          <div className="detail-box">
            <h5>{item.name}</h5>
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
              <a href="#">
                <i className="bi bi-cart-fill text-white fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
