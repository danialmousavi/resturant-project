"use client"
import React, { useState } from 'react'

export default function CreateForm({provinces,cities}) {
    const [citiesFilter, setCitiesFilter] = useState(cities.filter(city => city.province_id == provinces[0].id))

    function changeProvince(e) {
        setCitiesFilter(cities.filter(city => city.province_id == e.target.value))
    }
  return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample">
                ایجاد آدرس جدید
            </button>

            <div className="collapse mt-3" id="collapseExample">
                <div className="card card-body">
                    <div className="row g-4">
                        <div className="col col-md-6">
                            <label className="form-label">عنوان</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-md-6">
                            <label className="form-label">شماره تماس</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-md-6">
                            <label className="form-label">کد پستی</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-md-6">
                            <label className="form-label">استان</label>
                            <select className="form-select" onChange={changeProvince}>
                                {provinces.map(province => (
                                    <option key={province.id} value={province.id}>{province.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col col-md-6">
                            <label className="form-label">شهر</label>
                            <select className="form-select">
                                {citiesFilter.map(city => (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col col-md-12">
                            <label className="form-label">آدرس</label>
                            <textarea type="text" rows="5" className="form-control"></textarea>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4">ایجاد</button>
                    </div>
                </div>
            </div>
        </>
  )
}
