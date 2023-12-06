import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-50">
                  <img src="/assets/img/contact/image-contact.jpg" className='contact-photo' alt="" />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">E-mail</h4>
                  <span><a href="mailto:(admin@bara.co.id)">(admin@bara.co.id)</a></span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Kontak</h4>
                  <span><a href="tel:(+62816593922)">(+62 816 593 922)</a></span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Alamat</h4>
                  <span><a href="https://www.google.com/maps/place/BARA+Enterprise/@-6.8926167,107.555901,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e42240a75e7b:0xf49afe8767d59be4!8m2!3d-6.8926167!4d107.5584759!16s%2Fg%2F1hm31twm9?entry=ttu" target="blank">Jl. Jend. H. Amir Machmud No.260B, Sukaraja
Kec. Cicendo, Kota Bandung, Jawa Barat 40175</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">Get in touch With us</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;