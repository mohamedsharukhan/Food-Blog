import React from "react";
import "./NavComponent.css";
import BfreshLogo from "./assets/img/nav-img/Bfresh-Logo.png";

function NavComponent() {
  return (
    <nav>
      <div className=" container p-3  ">
        <div className="row header">
          <div className="col-4 d-flex justify-content-end ">
            <ul>
              <li>
                <a href="/home">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>

          <div className="col-4 d-flex justify-content-center logo">
            <img src={BfreshLogo} alt=" Logo" />
          </div>

          <div className="col-4">
            <ul>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href=""></a>
                <i className="fa-brands fa-pinterest"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavComponent;
