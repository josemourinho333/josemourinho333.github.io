import React from 'react';
import MainCategory from './MainCategory';

const MainCategoryList = () => {

  return (
    <div className="flex justify-center gap-1">
      <MainCategory cat='mail'/>
      <MainCategory cat='call'/>
      <MainCategory cat='github'/>
      <MainCategory cat='resume'/>
    </div>
  )
}

export default MainCategoryList;