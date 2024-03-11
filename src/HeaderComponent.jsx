import React from "react";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <div>
      <div className="container p-2 text-center  Header">
        <div className="row ">
          <div className="col-7 d-flex justify-content-center ">
            <ul id="menu">
              <li>
                <a href="">HOME</a>
              </li>

              <li className="parent">
                <a href="#">
                  FEATURES <i className="fa-solid fa-caret-down"></i>{" "}
                </a>

                <ul className="child fistList">
                  <li className="parent ">
                    <a href="#">
                      Multi DropDown
                      <i className="fa-solid fa-caret-down fa-rotate-270 expand"></i>
                    </a>

                    <ul className="child">
                      <li>
                        <a href="#" nowrap>
                          DropDown1
                        </a>
                      </li>
                      <li>
                        <a href="#" nowrap>
                          DropDown2
                        </a>
                      </li>
                      <li>
                        <a href="#" nowrap>
                          DropDown3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">ShortCodes</a>
                  </li>
                  <li>
                    <a href="#">SiteMap</a>
                  </li>
                  <li>
                    <a href="#">Error Page</a>
                  </li>
                </ul>
              </li>

              <li className="parent">
                <a href="#">
                  DOCUMENTATION <i className="fa-solid fa-caret-down "></i>
                </a>
                <ul className="child listTwo">
                  <li>
                    <a href="#">Web Documentation</a>
                  </li>
                  <li>
                    <a href="#">Video Documentation</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-4 BtnDivLogin ">
            <button
              type="button"
              className="btn btnShowLogin "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
            <a href="">
              <i className="fa-solid fa-magnifying-glass text-dark "></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
