import Link from "next/link";
import React from "react";
import SocialLinks from "../social-links";
import CopyrightArea from "./component/copyright-area";

const footer_contents = {
  shapes: ["hero-shape-5.1.png", "testimonial-shape-5.4.png"],
  logo: "/assets/img/logo/logo-finpos-gelap.svg",
  widget_desc:
    "Mulailah tunjukan produk dan jasa anda kepada dunia.",
  footer_widgets: [
    {
      w_class: "d-flex justify-content-lg-center",
      title: "Useful Links",
      widget_lists: [
        "Contact us",
        "How it Works",
        "Create",
        "Explore",
        "Terms & Services",
      ],
    },
    {
      padd: "pl-20",
      title: "Community",
      widget_lists: [
        "Help Center",
        "Partners",
        "Suggestions",
        "Blog",
        "Newsletters",
      ],
    },
  ],
  copy_right_text: (
    <> ©{new Date().getFullYear()} All Rights Reserved Copyright</>
  ),
  conditions: ["Terms and conditions", "Privacy policy", "Login / Signup"],
};
const {
  conditions,
  copy_right_text,
  footer_widgets,
  logo,
  widget_desc,
  shapes,
} = footer_contents;

const Footer = () => {
  return (
    <footer>
      <div className="tp-footer-area pt-130 pb-30 p-relative">
        {shapes.map((s, i) => (
          <div
            key={i}
            className={`bp-foooter-shape-${i + 1} d-none d-lg-block`}
          >
            <img src={`/assets/img/footer/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div
            className="row wow tpfadeUp"
            data-wow-duration=".3s"
            data-wow-delay=".5s"
          >
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget">
                <div className="tp-footer-widget__logo mb-30">
                  <Link href="/">
                    <a>
                      <img src={logo} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="tp-footer-widget__text mb-30">
                  <p>{widget_desc}</p>
                </div>
                <div className="tp-footer-widget__social-link tp-footer-widget__social-link-2 ">
                  <SocialLinks />
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => {
              const { title, widget_lists, w_class, padd } = w;
              return (
                <div
                  key={i}
                  className={`col-xl-3 col-lg-2 col-md-6 ${
                    w_class ? w_class : ""
                  }`}
                >
                  <div className={`tp-footer-widget ${padd ? padd : ""}`}>
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title text-black">{title}</h3>
                    </div>
                    <div className="tp-footer-widget__list">
                      <ul>
                        {widget_lists.map((l, i) => (
                          <li key={i}>
                            <a href="#">{l}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget">
                <div
                  className="single-footer-widget wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  {/* <div class="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <img src="/assets/img/email_rev2.png" alt="email" />
                  </div> */}
                  <div class="mb-8 flex w-full max-w-[370px]">
                    <div className="widget-title">
                      <>
                      <h5 class="mb-1 text-xl font-bold text-dark dark:text-white">
                        E-mail
                      </h5>
                      </>
                      <p class="text-base text-body-color dark:text-dark-6">
                      admin@bara.co.id
                      </p>
                      <h5 class="mb-1 text-xl font-bold text-dark dark:text-white">
                        Kontak
                      </h5>
                      <p class="text-base text-body-color dark:text-dark-6">
                      (022) 201 25 40 /  0816 593 922
                      </p>
                      <h5 class="mb-1 text-xl font-bold text-dark dark:text-white">
                        Alamat
                      </h5>
                      <p class="text-base text-body-color dark:text-dark-6">
                      Jl. Jend. H. Amir Machmud No.260B, Sukaraja Kec. Cicendo, Kota Bandung, Jawa Barat 40175
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CopyrightArea start */}
        <CopyrightArea
          copy_right_text={copy_right_text}
          conditions={conditions}
          color={"tp-copyright-color"}
        />
        {/* CopyrightArea end */}
      </div>
    </footer>
  );
};

export default Footer;
