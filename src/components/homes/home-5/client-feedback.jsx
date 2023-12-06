import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const testimonial_contents = {
  shapes: ['testimonial-shape-5.3.png', 'testimonial-shape-5.4.png'],
  img: '/assets/img/feature/buatwebsite.png',
  testi_items: [
    {
      ratings: [1, 2, 3, 4, 5],
      desc: <>•Akses informasi produk atau jasa yang mudah bagi konsumen
       anda karena Finpos Website dapat di akses melalui ponsel kapanpun dan dimanapun•</>,
      name: 'Benefit Ketika Anda Menggunakan',
      title: 'Finpos Website'
    },
    {
      ratings: [1, 2, 3, 4],
      desc: <>•Biaya berlangganan yang lebih hemat dengan kualitas website yang sudah berstandar International•</>,
      name: 'Benefit Ketika Anda Menggunakan',
      title: 'Finpos Website'
    },
    {
      ratings: [1, 2, 3, 4, 5],
      desc: <>•Data Konsumen yang sepenuhnya menjadi hak milik anda yang nantinya bisa diolah mandiri untuk aktivasi sales•</>,
      name: 'Benefit Ketika Anda Menggunakan',
      title: 'Finpos Website'
    },
    {
      ratings: [1, 2, 3, 4, 5],
      desc: <>•Meningkatkan kepercayaan konsumen dengan tampilan website yang menarik dan terlihat profesional•</>,
      name: 'Benefit Ketika Anda Menggunakan',
      title: 'Finpos Website'
    },
    {
      ratings: [1, 2, 3, 4, 5],
      desc: <>•Meningkatkan eksistensi perusahaan anda di Internet menjadi lebih dikenal dengan memanfaatkan SEO.
       Free maintenance SEO melalui pembuatan artikel di setiap paket berlangganan yang tersedia•</>,
      name: 'Benefit Ketika Anda Menggunakan',
      title: 'Finpos Website'
    },
  ]
}

const { img, shapes, testi_items } = testimonial_contents;

const ClientFeedback = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  return (

    <div className="tp-testimonial-area pt-110 pb-130 fix p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-testi-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/testimonial/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-12">
            <div className="tp-testimonial-thumb text-start">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-12">
            <div className="testimonial-pd-slider-section pl-35">
              <Swiper
                loop={sliderLoop}
                slidesPerView={1}
                modules={[Pagination]}
                autoplay={true}
                className="swiper-container testi-slider-pd-active p-relative"
                pagination={{
                  el: ".project-slider-dots",
                  clickable: true,
                }}
              >
                {testi_items.map((item,i) => {
                  const {desc,name,ratings,title} = item;
                  return <SwiperSlide key={i} className="white-bg">
                    <div className="tptesttimonial">
                      <div className="tptestimonial__meta-5">
                        <h4 className="tp-pd-testi-name">{name}</h4>
                        <h4 className="tp-pd-testi-title">{title}</h4>
                      </div>
                      <div className="tptestimonial__rating-5 mt-80">
                        {/* {ratings.map((r) => <span key={r}><i className="fas fa-star"></i></span>)} */}
                        <p>{desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                })}
                <div className="project-slider-dots project-blue-dots text-start text-md-end z-index-1"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;