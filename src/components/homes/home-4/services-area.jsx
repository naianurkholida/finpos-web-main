import Link from 'next/link';
import React from 'react';
import { services_data } from '../../../data';
import { HighlightTwo } from '../../../svg';

const services_items = services_data.filter(ser => ser.home_4);

const ServicesArea = () => {
  return (
    <div className="tp-service-area pb-90 grey-bg">
      <div className="container">
        
        <div className="row">
          {services_items.map((service, i) => {
            const { delay, duration, id, img, title, border_effect } = service;
            return <div key={id} className=" col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration={duration} data-wow-delay={delay}>
              <div className={` tp-sv-border-effect ${border_effect}`}>
                <div className={`tp-service-item-four sv-color-${i + 1} mb-30`}>
                  <div className="tp-service-item-four__img  mb-40">
                    <img src={img} alt="" />
                  </div>
                  <div className="tp-service-item-four__title">
                    <h3 className="tp-sv-sm-title">
                      <Link href={`/service-details/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          })}

          {/* <div className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp" data-wow-duration="1.1s" data-wow-delay="1.3s">
            <div className="sv-color-eight  mb-30">
              <div className="sv-color-eight__title text-center">
                <h3 className="tp-sv-sm-title"><a href="#">More Services</a></h3>
                <Link href={`/service-1`}>
                  <a><i className="fal fa-long-arrow-up"></i></a>
                </Link>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;