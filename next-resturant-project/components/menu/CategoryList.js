import React from "react";

export default function CategoryList({ categories }) {
  return (
    <div class="filter-list">
      <div class="form-label">دسته بندی</div>
      <ul>
        {categories.map((category) => (
          <li class="my-2 cursor-pointer filter-list-active">{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
