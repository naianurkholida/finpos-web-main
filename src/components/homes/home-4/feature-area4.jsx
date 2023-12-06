import React from 'react';
import { FeatureOne, FeatureThree, FeatureTwo, Document, Managed, ArrowBig } from '../../../svg';

const feature_contents = {
  feature_img:'/assets/img/feature/buatwebsite.png',
  subtitle:'Why Choose us',
  title:'Benefit ketika anda menggunakan ',
  highlight_text:'Finpos Website',
  feature_lists:[
    {
      id:1,
      icon:<FeatureOne/>,
      title:'Akses informasi produk atau jasa yang mudah bagi konsumen ',
      subtitle:<>karena Finpos Website dapat di akses melalui ponsel kapanpun dan dimanapun.</>,
    },
    {
      id:2,
      icon:<FeatureTwo/>,
      title:'Biaya berlangganan yang lebih hemat',
      subtitle:<>dengan kualitas website yang sudah berstandar International. 
      dengan kualitas website yang sudah berstandar International.</>,
    },
    {
      id:3,
      icon:<FeatureThree/>,
      title:'Data Konsumen yang sepenuhnya menjadi hak milik anda',
      subtitle:<>nantinya bisa diolah mandiri untuk aktivasi sales.
      .</>,
    },
    {
      id:4,
      icon:<Document/>,
      title:'Meningkatkan kepercayaan konsumen',
      subtitle:<>dengan tampilan website yang menarik dan terlihat profesional.
      .</>,
    },
    {
      id:5,
      icon:<ArrowBig/>,
      title:'Meningkatkan eksistensi perusahaan anda di Internet',
      subtitle:<>menjadi lebih dikenal dengan memanfaatkan SEO. 
      Free maintenance SEO melalui pembuatan artikel di setiap paket berlangganan yang tersedia.
      .</>,
    },
  ]
}

const {feature_img,feature_lists,highlight_text,subtitle,title} = feature_contents;

const FeatureArea4 = () => {
  return (
    <div className="tp-feature-arae pt-130 pb-100 p-relative">
      <div className="ce-chose-shape d-none d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.png" alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s">
            <div className="tp-fea-img">
              <img src={feature_img} alt=""/>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                {/* <h5 className="tp-subtitle pb-10">{subtitle}</h5> */}
                <h2 className="tp-title-sm pb-40">{title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="240" height="11" viewBox="0 0 240 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="fea-wrapper-main">
                {feature_lists.map((list,i) => {
                  const {icon,id,subtitle,title} = list;
                  return <div key={id} className="tp-feature-list d-flex">
                  <div className={`tp-feature-list__icon-img fea-color-${i+1} mr-25`}>
                    {icon}
                  </div>
                  <div className="tp-feature-list__content">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea4;