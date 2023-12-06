import Link from 'next/link';
import React from 'react';

const about_contents = {
  about_img: '/assets/img/about/why-us-content.jpg',
  title: <>Why Choose <span className="tp-section-highlight"> US
    <svg width="247" height="12" viewBox="0 0 247 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-0.000488281 0L247 12H-0.000488281V0Z" fill="#FFDC60" />
    </svg> </span></>,
  sm_desc: 'Dibandingkan platform lainnya, kami juga memliki beberapa keunggulan yang kami yakin akan sangat membantu anda dalam mengembangkan bisnis anda',
  btn_text: 'detail'
}
const { about_img, btn_text, sm_desc, title } = about_contents;

const AboutArea = () => {
  return (
    <div className="tp-about-area grey-bg pt-120 pb-120 p-relative fix">
      <Shape shape_class="sm-1" img='chose/hero-shape-5.1.png' />
      <Shape shape_class="sm-2" img='chose/bp-chose-5.2.png' />
      <div className="bp-about-shape d-none d-md-block">
        <img src="/assets/img/about/about-shape-6.1.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
            <div className="bp-about-img">
              <img src={about_img} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-10 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-feature-section-title-box bs-section-title-space">
              <h2 className="tp-title tp-title-sm">{title}</h2>
              <p className="pb-25">{sm_desc}</p>
              <div className="tp-fea-button-five">
                <Link href="/contact">
                  <a className="tp-btn-sky">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;

const Shape = ({ shape_class, img }) => {
  return (
    <div className={`bs-about-${shape_class} d-none d-lg-block`}>
      <img src={`/assets/img/${img}`} alt="" />
    </div>
  )
}