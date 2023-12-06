import React from 'react';
import Link from 'next/link';

const ProjectInfoArea = ({item}) => {
  const myStyle ={ 
    color: '#0054B1',
    'hover':{
      color: '#007BFF',
    }
    
  };
  return (
    <>
    <div className="cd-project-info-area pb-100 w-100">
      <div className="container">
        <div className="cd-project-wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="cd-project-info-box">
                <h4 className="cd-case-title">{item?.title} | <Link href="/"><span style={myStyle}>{item?.category}</span></Link></h4>
                <p>{item?.desc_product}</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="cd-client-details">
              <div class="productdetails__button">
                <button class="tp-btn-yellow mb-20 mr-20">Live Preview</button>
                <button class="tp-btn-sm-sky">Beli Sekarang</button>
              </div>
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-2 col-md-2 col-12">
              <div className="cd-social-icon">
                <a className="cd-si-color-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="cd-si-color-2" href="#"><i className="fab fa-pinterest-p"></i></a>
                <a className="cd-si-color-3" href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectInfoArea;