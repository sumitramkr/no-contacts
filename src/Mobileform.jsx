import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "bootstrap/dist/css/bootstrap.min.css";

function Mobileform() {
  const [value, setValue] = useState();
  let phoneNumber = "https://wa.me/" + value;
  console.log(phoneNumber);
  return (
    <div className="phone row">
      <div className="col-12">
        <PhoneInput
          placeholder="+CCC XXXXXXXXXX"
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="buttonLink col-12">
        <a className="btn btn-success" href={phoneNumber} role="button">
          Message
        </a>
      </div>
    </div>
  );
}

export default Mobileform;
