import React from "react";
import Form from "@/components/modules/ContactForm/Form";
import Map from "../modules/Map/Map";

export default function Contact() {
  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>تماس با ما</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6">
            <div className="map_container ">
              <Map
                position={[35.72021225108499, 51.42222691580869]}
                center={[35.72021225108499, 51.42222691580869]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
