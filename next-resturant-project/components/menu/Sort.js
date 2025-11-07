"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function Sort() {
    const pathname=usePathname();
    const router=useRouter();
    const searchparms=useSearchParams();
    
    const handleSort=(sort)=>{
        const params=new URLSearchParams();
        params.set('sortBy',sort);
        router.replace(`${pathname}?${params.toString()}`);
    }
  return (
    <>
                    <div>
                        <label className="form-label">مرتب سازی</label>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={()=>handleSort("max")} checked={searchparms.has("sortBy")&&searchparms.get("sortBy")=="max"}/>
                            <label className="form-check-label cursor-pointer">
                                بیشترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"  onClick={()=>handleSort("min")} checked={searchparms.has("sortBy")&&searchparms.get("sortBy")=="min"}/>
                            <label className="form-check-label cursor-pointer">
                                کمترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={()=>handleSort("bestseller")} checked={searchparms.has("sortBy")&&searchparms.get("sortBy")=="bestseller"}/>
                            <label className="form-check-label cursor-pointer">
                                پرفروش ترین
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={()=>handleSort("sale")} checked={searchparms.has("sortBy")&&searchparms.get("sortBy")=="sale"}/>
                            <label className="form-check-label cursor-pointer">
                                با تخفیف
                            </label>
                        </div>
                    </div>    
    </>
  )
}
