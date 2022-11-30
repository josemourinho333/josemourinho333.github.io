import React, {useState, useEffect} from 'react';
import Work from './Work';

const HomeBackground = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const tabClickHandler = (tabName) => {
    if (tabName === "Experience") {
      setActiveTab(tabName);
    };

    if (tabName === "Education") {
      setActiveTab(tabName);
    };
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content w-4/5 flex-col lg:flex-row bg-inherit gap-10">
        <div className="basis-1/2 bg-inherit text-center lg:text-left pt-10 lg:pt-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral bg-inherit">My journey so far</h1>
          <p className="py-6 bg-inherit">A brief look at my background. Get in touch with me via email <a href="mailto:yoo.phil92@gmail.com" className="font-bold underline bg-inherit text-inherit">yoo.phil92@gmail.com</a>, I would be happy to connect.</p>
        </div>
        <div className="card w-full h-[300px] lg:basis-1/2 flex-shrink-0 drop-shadow-xl border border-zinc-100 bg-base-100 text-neutral-content py-5 px-3 rounded-box">
          <div className="tabs bg-inherit justify-evenly">
            <button className={`tab tab-sm tab-bordered bg-inherit basis-1/2 ${activeTab === "Experience" ? "tab-active" : ''}`} onClick={() => tabClickHandler('Experience')}>Experience</button> 
            <button className={`tab tab-sm tab-bordered bg-inherit basis-1/2 ${activeTab === "Education" ? "tab-active" : ''}`} onClick={() => tabClickHandler('Education')}>Education</button>
          </div>
          <div className="bg-inherit overflow-y-auto text-neutral px-3 py-5">
            {
              activeTab === "Experience"
                ? <Work activeTab={activeTab}/>
                : activeTab === "Education"
                ? <Work activeTab={activeTab}/>
                : ''
            }
          </div> 
        </div>
      </div>
    </div>

  )
}

export default HomeBackground;