import React, { useEffect } from 'react';
import HomeIntroCard from './HomeIntroCard';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRuby, SiJquery, SiSass, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRubyonrails, SiCypress, SiMocha, SiChai, SiJest, SiStorybook, SiEslint, SiGit, SiGithub, SiNpm, SiNetlify, SiFirebase, SiNextdotjs} from 'react-icons/si';

const SkillsList = () => {
  const icons = [<SiReact/>, <SiNextdotjs/>, <SiJavascript/>, <SiNodedotjs/>, <SiExpress/>, <SiPostgresql/>, <SiMysql/>, <SiFirebase/>, <SiRuby/>, <SiRubyonrails/>, <SiTailwindcss/>, <SiSass/>, <SiHtml5/>, <SiCss3/>, <SiBootstrap/>, <SiJquery/>, <SiCypress/>, <SiMocha/>, <SiChai/>, <SiJest/>, <SiStorybook/>, <SiEslint/>, <SiGit/>, <SiGithub/>, <SiNpm/>, <SiNetlify/>];

  useEffect(() => {
    const icons = document?.querySelectorAll('div.react-icons svg');
    icons.forEach((icon) => {
      icon.classList.add('w-16');
      icon.classList.add('h-16');
    });
  }, []);

  const mappedIcons = icons.map((icon, index) => {
    console.log('icon', icon.type.name);
    let stackName;

    if (icon.type.name === 'SiNodedotjs' || icon.type.name === 'SiNextdotjs' ) {
      stackName = icon.type.name.replace('dot', '').substring(2);
    } else {
      stackName = icon.type.name.substring(2);
    }

    return (
      <HomeIntroCard key={index} icons={true}>
        <div key={index + 3000} className="react-icons w-full flex items-center justify-center bg-neutral text-white">
          <div className="tooltip tooltip-open tooltip-bottom tooltip-info" data-tip={stackName}>
            {icon}
          </div>
        </div>
      </HomeIntroCard>
    )
  });

  return (
    <div className="min-h-screen bg-neutral text-neutral-content flex flex-col justify-center items-center gap-y-10">
      <h2 className="text-center text-2xl md:text-3xl text-neutral-content font-bold">
        Some of the <span className="text-blue-500">techs</span> and <span className="text-blue-500">tools</span> I use.
      </h2>
      <div className="flex flex-row gap-12 flex-wrap w-3/4 justify-center items-center">
        {mappedIcons}
      </div>
    </div>
  )
}

export default SkillsList;