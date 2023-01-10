import React, {useEffect} from 'react';
import HomeIntroCard from './HomeIntroCard';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRuby, SiJquery, SiSass, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRubyonrails, SiCypress, SiMocha, SiChai, SiJest, SiStorybook, SiEslint, SiGit, SiGithub, SiNpm, SiNetlify, SiFirebase, SiNextdotjs} from 'react-icons/si';

const HomeSkillsCarousel = () => {
  const icons = [<SiReact/>, <SiNextdotjs/>, <SiJavascript/>, <SiNodedotjs/>, <SiExpress/>, <SiPostgresql/>, <SiMysql/>, <SiFirebase/>, <SiRuby/>, <SiRubyonrails/>, <SiTailwindcss/>, <SiSass/>, <SiHtml5/>, <SiCss3/>, <SiBootstrap/>, <SiJquery/>, <SiCypress/>, <SiMocha/>, <SiChai/>, <SiJest/>, <SiStorybook/>, <SiEslint/>, <SiGit/>, <SiGithub/>, <SiNpm/>, <SiNetlify/>];

  useEffect(() => {
    const icons = document?.querySelectorAll('div.react-icons svg');
    icons.forEach((icon) => {
      icon.classList.add('w-10');
      icon.classList.add('h-10');
    });
  }, []);

  const mappedIcons = icons.map((icon, index) => {
    return (
      <HomeIntroCard key={index} icons={true}>
        <div key={index + 3000} className="react-icons w-full lex items-center justify-center bg-neutral text-white">
          {icon}
        </div>
      </HomeIntroCard>
    )
  });

  return (
    <div className="min-h-[50vh] bg-neutral text-neutral-content flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl md:text-3xl text-neutral-content font-bold mb-5">
        Tech stack. <span className="text-blue-500">Some of the techs and tools I use.</span>
      </h2>
      <div className="carousel carousel-center max-w-sm md:max-w-screen-md lg:max-w-screen-lg p-4 space-x-3 bg-neutral rounded-box">
        {mappedIcons}
      </div>
    </div>
  )
}

export default HomeSkillsCarousel;