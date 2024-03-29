
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './SliderComponent.css';


import OwlDiv from './OwlDiv';

import { cardValue } from './cardValue'

import HeaderComponent from './HeaderComponent';



function SliderComponent() {



    return (
        <main className=''>
            <HeaderComponent />

            <div className='container-fluid owlslider ' >
                <OwlCarousel items={3}
                    className="owl-theme"
                    loop
                    nav
                    margin={8} >


                    {cardValue.map((item, index) => (
                        <OwlDiv cartValue={item} indexVal={index} />
                    ))}

                </OwlCarousel>
            </div>
        </main>
     

    )
}

export default SliderComponent  