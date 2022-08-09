import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#21081a" }}
      className="text-center text-lg-left"
    >
      <div
        className="text-center p-3 text-white"
        style={{ backgroundColor: "#198754" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://github.com/sumitramkr/some">
          @sumitramkr
        </a>
      </div>
    </MDBFooter>
  );
}
