import React from "react";

import { Link } from "react-router-dom";

function OwlDiv(props) {
  // card div

  const { img, heading, content, para, date } = props.cartValue;

  //   const cartList=props.cartValue;

  return (
    <div className="page">
      <Link to={"Owlpage?id=" + props.indexVal}>
{/* owlpage oru component */}

        {/* pass value to quary params */}
        {/* <a href={'Owlpage?id=' + props.indexVal} > */}

        {/* <a href={'Owlpage?id='+props.indexVal+'&name='+}> */}

        {/* <Link to={'./Owlpage?id='+props.itemTwo}>  */}

        <div className="owldiv">
          <div className="owlimg">
            <img className="img" src={img} />
          </div>
          <div className="owlText">
            <h5>{heading}</h5>
            <h2>{content}</h2>
            <div>
              <Link to={''}>{para}</Link>
              <span datetime="2022-06-11T22:36:00-07:00">{date}</span>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </Link>
    </div>
  );
}

export default OwlDiv;
