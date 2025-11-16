import Sidebar from '@/components/profile/Sidebar'
import React from 'react'

export default function ProfileLayout({children}) {
  return (
    <section className="profile_section layout_padding">
        <div className="container">
            <div className="row">
                <Sidebar/>
                <div className="col-sm-12 col-lg-9">
                    {children}
                </div>
            </div>
        </div>
    </section>
  )
}
