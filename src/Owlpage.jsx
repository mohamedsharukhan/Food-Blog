import React from 'react'
import { cardValue } from './cardValue'
import { useSearchParams } from 'react-router-dom';
function Owlpage() {
  // card page
  const [searchParams, setSearchParams] = useSearchParams();

  const indexId = searchParams.get('id')


  // const { img, heading, para, detail, } = props.cartValue;

  const imgs = cardValue[indexId].img;
  const heading = cardValue[indexId].heading;
  const para = cardValue[indexId].para;
  const detail = cardValue[indexId].detail;


  return (
    <main className='p-5'>
      <div className="container p-5">

        <div className="row justify-content-center align-items-center g-2">
          <div className="col-8"> 
           <h1>{heading}</h1>
            </div>

          <div className="col-8 p-5 "> 
          <img src={imgs} alt="" />
          </div>
            


            <div className="col-8"><p>{para}</p></div>
            <div className="col-8"><p>{detail}</p></div>
          </div>
        </div>

      </main>
      )
}

      export default Owlpage