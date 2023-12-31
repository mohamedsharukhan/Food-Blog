import React from 'react'

import { Link } from 'react-router-dom';



function OwlDiv(props) {
    // card div

    const { img, heading, content, para, date, } = props.cartValue;

    //   const cartList=props.cartValue;

    return (
        <div className='page'>

            <a href={'Owlpage?id=' + props.itemTwo} >

                {/* <a href={'Owlpage?id='+props.itemTwo+'&name='+}> */}

                {/* <Link to={'./Owlpage?id='+props.itemTwo}>  */}

                <div className='owldiv'>

                    <div className='owlimg'>
                        <img className="img" src={img} />

                    </div>
                    <div className='owlText'>
                        
                        <h5>{heading}</h5>
                        <h2>{content}</h2>
                        <div>
                            <a href="">{para}</a>
                            <span datetime="2022-06-11T22:36:00-07:00">{date}</span>
                        </div>
                    </div>
                </div>
                {/* </Link> */}

            </a>

        </div>
    )
}

export default OwlDiv