import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div id="footer">
      <MDBFooter className="text-center text-lg-left">
        <div className="text-center p-3 text-white">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="https://github.com/sumitramkr/some">
            @sumitramkr
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
