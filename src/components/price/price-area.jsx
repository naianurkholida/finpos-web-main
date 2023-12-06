import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

function SinglePrice({ active = false, title, price_month, sm_title, lists, price_year, sm_service }) {
  return (
    <div className="col-12">
      <div className={`cpprice ${active ? 'active' : ''} text-center mb-20 bg-white`}>
        <div className="cpprice__title">
          <h3 className="cp-price-title">{title}</h3>
        </div>
        <div className="cpprice__meta">
          <span>Rp<b> {price_month}</b>/Bulan</span>
        </div>
        <div className="cpprice__meta-small">
          <span>Rp<b> {price_year}</b>/Tahun</span>
        </div>
        <div className="cpprice__title-sm">
          <h4 className="cp-price-sm-title">{sm_title}</h4>
          <p>{sm_service}</p>
        </div>
        <div className="cpprice__list">
          <ul>
            {lists && lists.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <div className="cpprice__button d-flex flex-column">
          <button className="tp-btn-yellow">Pesan Disini <i className="fal fa-long-arrow-right"></i></button>
          <Link href="">Lihat selengkapnya</Link>
        </div>
      </div>
    </div>
  )
}


const PriceArea = ({ packages }) => {
  return (
    <div className="cp-price-area pt-30 pb-130">
      <div className="container">
        <Swiper
          spaceBetween={30}
          navigation
          slidesPerView={3}
          breakpoints={{
            // when window width is >= 992px (desktop)
            992: {
              slidesPerView: 3,
            },
            // when window width is < 992px (mobile)
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {packages.map((item, index) => (
            <SwiperSlide key={index}>
              <SinglePrice
                title={item.title}
                price_month={item.price_month}
                price_year={item.price_year}
                sm_title={item.sm_title}
                lists={item.list}
                active={item.active !== undefined ? item.active : false}
                sm_service={item.sm_service}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default PriceArea;