import React from "react";
import Pagination from "./Pagination";
import ProductCart from "../modules/product/ProductCart";
import { notFound } from "next/navigation";

export default async function ProductList({ params }) {
  console.log("params:", params);

  let products = [];
  let meta = {};

  try {
    // اگر params رشته‌ی query است باید به درستی به URL اضافه شود
    const queryString =
      typeof params === "string"
        ? params
        : new URLSearchParams(params).toString();

    const res = await fetch(`http://localhost:8000/api/menu?${queryString}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();

    if (data?.data?.products?.length) {
      products = data.data.products;
      meta = data.data.meta || {};
    } else {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return notFound();
  }

  return (
    <div className="col-sm-12 col-lg-9">
      <div className="row gx-3">
        {products.map((product) => (
          <ProductCart key={product.id} item={product} />
        ))}
      </div>
      {meta?.links && <Pagination links={meta.links} />}
    </div>
  );
}
