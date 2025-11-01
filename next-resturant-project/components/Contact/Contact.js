import React from 'react'
import Form from '@/components/modules/ContactForm/Form'

export default function Contact() {
  return (
    <section className="book_section layout_padding">
        <div className="container">
            <div className="heading_container">
                <h2>
                    تماس با ما
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Form/>
                </div>
                <div className="col-md-6">
                    <div className="map_container ">
                        <div id="map" style={{height: "345px"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
