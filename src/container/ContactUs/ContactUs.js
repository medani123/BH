import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="mt-5">
              <hr />
              <h1>Contact Us</h1>
              <h4>
                <strong> Arabian Summit Petroleum Services Company</strong>
              </h4>
              <h6>
                34446, Feras Bin Al Nader St
                <br /> Al Olaya District
                <br /> Al Khobar <br /> Saudi Arabia
              </h6>
              <br />
              <h6>
                <strong>Phone:</strong> +966 136672672
              </h6>
              <br />

              <h6>
                <strong>Email:</strong> info@arabiansps.com
              </h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="img-fluid mt-2   ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d447.10066836582314!2d50.1815215441866!3d26.30040957679441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1674034517801!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
