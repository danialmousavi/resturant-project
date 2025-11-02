"use client";

import { useState, useMemo } from "react";
import ProductCart from "../product/ProductCart";

export default function FoodSections({ tabPanel, tabList }) {
  const [selectedTabList, setSelectedTabList] = useState(tabList[0]);

  // تبدیل tabPanel به map بر اساس دسته
  const categoryMap = useMemo(() => {
    const map = {};
    tabPanel.forEach((group) => {
      if (group.length > 0) {
        const category = group[0].category;
        map[category] = group;
      }
    });
    return map;
  }, [tabPanel]);

  const activeProducts = categoryMap[selectedTabList] || [];

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        {/* 🔹 تب‌ها */}
        <ul className="filters_menu">
          {tabList.map((tab, index) => (
            <li
              key={index}
              onClick={() => setSelectedTabList(tab)}
              className={selectedTabList === tab ? "active" : ""}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* 🔹 محصولات */}
        <div className="filters-content">
          <div className="row grid">
            {activeProducts.length > 0 ? (
              activeProducts.map((item) => (
                <ProductCart key={item.id} item={item}/>
              ))
            ) : (
              <p className="text-center text-muted">
                محصولی برای این دسته وجود ندارد.
              </p>
            )}
          </div>
        </div>

        {/* دکمه مشاهده بیشتر */}
        <div className="btn-box">
          <a href="#">مشاهده بیشتر</a>
        </div>
      </div>
    </section>
  );
}
