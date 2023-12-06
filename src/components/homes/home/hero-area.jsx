import Link from 'next/link';
import React from 'react';
import useModal from '../../../hooks/use-modal';
import { HighlightSix } from '../../../svg';

const hero_contents = {
  title: <>Transformasi bisnis anda mulai <span className="tp-highlight"> <HighlightSix /> <i>dari sini</i>
  </span></>,
  sm_text: <>Tingkatkan Online Presence Anda dengan Layanan Pembuatan Website Profesional Kami! <br/></>,
  // video_title: 'Behind the scenes',
  hero_img: '/assets/img/hero/background.jpg',
}
const { hero_img, sm_text, title, video_id, video_title } = hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <div className="tp-hero-area  tp-hero-border tp-bp-hero-space p-relative dark-bg fix">
        <div className="tp-bp-hero-shape d-none d-lg-block wow tpfadeRight"
          data-wow-duration=".3s" data-wow-delay=".6s">
          <img className="background" src="assets/img/hero/hero-shape-6.1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-12">
              <div className="tp-hero-section-box tp-bp-hero-section-box">
                <h3 className="tp-hero-title tp-bs-hero-title wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">{title}</h3>
                <p className="wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">{sm_text}</p>
                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
                  <div className="xs-bottom-space">
                    <Link href="/contact">
                      <a className="tp-btn-sky mr-55">Order Now</a>
                    </Link>
                  </div>
                </div>
                <div className="tp-hero-social  pb-30 d-xxl-none d-xl-block">
                  <div className="tp-hero-social bp-hero-social bs-xl-hero-social">
                    {/* <HeroSocials hide_title={true} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
                  <img className="teh-ocha z-index-1"  src={hero_img} alt="hero img" />
            
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroArea;