import React from 'react';
import LeftContent from './MainContent/LeftContent';
import MiddleContent from './MainContent/MiddleContent';
import RightContent from './MainContent/RightContent';

const MainContainer = () => {
  return (
    <div>
      <div className="px-5 py-10 md:flex  ">
        <MiddleContent />
      </div>
    </div>
  );
};

export default MainContainer;
