import React from "react";

export default function CategoryList({ categories }) {
  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        {categories.map((category) => (
          <li className="my-2 cursor-pointer filter-list-active">{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
