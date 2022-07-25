import React from "react";
import map from "../pwc_map.PNG";

function Contactus() {
  return (
    <section>
      <div>
        <h2 class="contactUs">Contact Us</h2>
      </div>

      <div class="contact">
        <div>
          <p>Email: ng_pwc.enquiry@pwc.com</p>
          <br />
          <p>Phone: +234818 3524 765</p>
          <br />
          <address>
            Head Office <br />
            Landmark Tower <br />
            5b Water Corporation Road <br />
            Victoria Island <br />
            P.O.Box 2419 <br />
            Lagos, Nigeria.
          </address>
        </div>

        <div>
          <img src={map} width="400" height="400" alt="map" />
        </div>
      </div>
    </section>
  );
}

export default Contactus;
