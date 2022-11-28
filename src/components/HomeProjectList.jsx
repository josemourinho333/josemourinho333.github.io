import React from 'react';
import HomeProject from './HomeProject';

const HomeProjectList = () => {
  return (
    <div className="bg-[#fbfbfd] flex flex-col text-neutral gap-y-2 p-2">
      <div className="h-[90vh] md:h-[60vh] lg:h-[70vh] bg-inherit flex flex-col md:flex-row gap-2">
        <HomeProject bg='bg-white' img="https://raw.githubusercontent.com/josemourinho333/scraps/master/docs/scraper-ui.PNG" name="Web Scraper" oneLiner="Be notified when someone lists a MacBook for sale below median price." repo="https://github.com/josemourinho333/scraps" demo=""/>
        <HomeProject bg='bg-neutral'/>
      </div>
      <div className="h-[90vh] md:h-[60vh] lg:h-[70vh] bg-inherit flex flex-col md:flex-row gap-2">
        <HomeProject bg='bg-neutral'/>
        <HomeProject bg='bg-white'/>
      </div>
    </div>
  )
}

export default HomeProjectList;