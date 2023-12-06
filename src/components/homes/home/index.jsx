import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import LoginArea from '../../login/login-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import Testimonial from './testimonial';
import FeatureArea from '../home-5/feature-area';
import PriceList from './price-list';
import ContactArea from '../../contact/contact-area';
import AboutArea from '../home-6/about-area';
import Services from '../home-4/services-area';
import MasonryItems from '../../portfolios/portfolio-masonry/masonry-items';
import FeatureArea4 from '../home-4/feature-area4';
import ClientFeedback from '../home-5/client-feedback';
import AboutContact from '../../about-me/about-contact';
import Product from '../home-4/project-area'

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>

      

      <Header /> {/* navbar */}
      <HeroArea /> {/* banner */}
      {/* <Services /> services */}
      <FeatureArea /> {/* templates*/}
      {/* <MasonryItems/> */}
      <Product/>
      <PriceList />
      {/* <CreativeArea /> */}
      {/* <BrandArea /> */}
      {/* <ServicesArea /> */}
      {/* <ProjectArea />     */}
      {/* <BlogArea /> */}
      {/* <NewsLetter /> */}
      <AboutArea/>
      <Services/>
      {/* <FeatureArea4/> */}
      <ClientFeedback/>
      <Testimonial />
      <ContactArea/>
      <LoginArea/>
      <AboutContact/>
      <Footer />

    </Wrapper>
  );
};

export default Home;