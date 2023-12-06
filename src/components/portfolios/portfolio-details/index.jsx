import React, { useEffect } from 'react';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import Cta from '../../common/cta/cta';
import CaseImageArea from './case-image-area';
import CaseImageAreaTwo from './case-image-area-2';
import IntroduceTwo from './introduce-2';
import IntroduceArea from './introduce-area';
import ProjectInfoArea from './project-info-area';
import { Footer, Header, Wrapper } from '../../../layout';

const PortfolioDetails = ({case_item}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      {/* <Breadcrumb title={case_item?.title?case_item?.title:'Case Details'} /> */}
      <div className="row">
        <CaseImageArea case_item={case_item}/>
        <ProjectInfoArea item={case_item} />
      </div>
      {/* <IntroduceArea/> */}
      {/* <CaseImageAreaTwo/> */}
      {/* <IntroduceTwo/> */}
      {/* <Cta/> */}
      <Footer />
    </Wrapper>
  );
};

export default PortfolioDetails;