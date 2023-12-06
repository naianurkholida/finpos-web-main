import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const testimonial_data = [
  
    {
      id: 1,
      user: '/assets/img/testimonial/madeproject.id.svg',
      name: 'Dodi Mulyana, ',
      company: 'Direktur PT. Madda Corpora Indonesia',
      title: 'madeproject.id',
      ratings: [1, 2, 3, 4, 5],
      desc: '“Dengan harga website yang terjangkau dan tim support yang kompeten, Finpos Website memberikan saya kemudahan untuk memulai membuat sebuah website. “'
    },
  {
    id: 2,
    user: '/assets/img/testimonial/bebeklakon.svg',
    name: 'Soni Am Mustakim',
    company: 'Owner Bebek Lakon Yogyakarta',
    title: 'bebeklakon.com',
    ratings: [1, 2, 3, 4],
    desc: '“Finpos Website sangat cocok untuk saya pengusaha UMKM yang awam akan dunia digital. Saya sangat apresiasi tim support yang membantu saya dalam membuat website.“'
  },
  {
    id: 3,
    user: '/assets/img/testimonial/konkou.svg',
    name: 'Alif Naufal ',
    company: 'Owner Konkou',
    title: 'konkou.id',
    ratings: [1, 2, 3, 4, 5],
    desc: '“Bukan hanya website saja yang saya dapatkan, saya juga dapat support konten dari layanan ini. Semoga sukses terus untuk semuanya. “'
  },

]



const Testimonial = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  const [sliderLoopTwo, setSliderLoopTwo] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  React.useEffect(() => setSliderLoopTwo(true), []);
  return (
    <React.Fragment>
      <div className="tp-testimonial-area black-bg pt-130 pb-130 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-box text-center pb-25">
                <h5 className="tp-subtitle">Testimoni Klien</h5>
                <h2 className="tp-title tp-white-text">Tanggapan Mereka</h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
            {/* slider start */}
            <Swiper
              loop={sliderLoop}
              slidesPerView={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={50}
              className="swiper-container testimonial-slider-active"
              breakpoints={{
                // when window width is >= 1200px
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonial_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-testimonial-item">
                    <div className="tp-testi-meta d-flex justify-content-between mb-40">
                      <div className="tp-testi-icon-box d-flex align-items-center">
                        <div className="tp-testi-img mr-20"><img src={item.user} alt="" />
                        </div>
                        <div className="tp-testi-client-position">
                          <div className="tp-testi-ratting">
                            {item.ratings.map((r, i) => <i key={i} className="fas fa-star"></i>)}
                          <h3>{item.name}</h3>
                          <h6>{item.company}</h6>
                          <h6>{item.title}</h6>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                    <div className="tp-testi-p-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* slider end */}
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;