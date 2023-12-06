import React from 'react';
import LoginForm from '../forms/login-form';

const LoginArea = () => {
  return (
    <>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0 border-form">
            <div className="tp-login-thumb col-xl-6 col-lg-6 col-12">
              <div className="login-space-photo d-flex justify-content-center align-items-end h-100">
                <img className='join-teh-ocha w-100' src="/assets/img/contact/grid.svg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12 jarak">
              <div className="login tp-login-wrapper login-space d-flex justify-content-center">
                <div className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title text-light">Percayakan websitemu dengan team ahli kami!</h3>
                  </div>
                  <div className="tplogin__form">
                    <LoginForm />
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginArea;