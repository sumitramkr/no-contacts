import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "bootstrap/dist/css/bootstrap.min.css";

function Mobileform() {
  const [value, setValue] = useState();
  let phoneNumber = "https://wa.me/" + value;
  console.log(phoneNumber);
  return (
    <div>
      <div className="phone">
        <PhoneInput
          placeholder="+CCC XXXXXXXXXX"
          value={value}
          onChange={setValue}
        />

        <div className="buttonLink">
          <a className="btn btn-success" href={phoneNumber} role="button">
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobileform;
