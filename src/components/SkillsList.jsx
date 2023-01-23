import React, { useEffect } from 'react';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRuby, SiJquery, SiSass, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRubyonrails, SiCypress, SiMocha, SiChai, SiJest, SiStorybook, SiEslint, SiGit, SiGithub, SiNpm, SiNetlify, SiFirebase, SiNextdotjs, SiVuedotjs, SiLaravel} from 'react-icons/si';

const SkillsList = () => {

  useEffect(() => {
    const icons = document?.querySelectorAll('div.react-icons svg');
    icons.forEach((icon) => {
      icon.classList.add('w-16');
      icon.classList.add('h-16');
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral text-neutral-content flex flex-col justify-center items-center gap-y-10">
      <h2 className="text-center text-2xl md:text-3xl text-neutral-content font-bold">
        Some of the <span className="text-blue-500">techs</span> and <span className="text-blue-500">tools</span> I use.
      </h2>
      <div className="flex flex-row gap-12 flex-wrap w-3/4 justify-center items-center">

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="React">
            <SiReact/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Next.js">
            <SiNextdotjs/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Vue.js">
            <SiVuedotjs/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Javascript">
            <SiJavascript/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Node.js">
            <SiNodedotjs/>
          </div>
          
          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Express">
            <SiExpress/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="PostgreSQL">
            <SiPostgresql/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="MySQL">
            <SiMysql/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Firebase">
            <SiFirebase/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Laravel">
            <SiLaravel/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Ruby">
            <SiRuby/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Ruby on Rails">
            <SiRubyonrails/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Tailwind">
            <SiTailwindcss/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="SaSS">
            <SiSass/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="HTML5">
            <SiHtml5/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="CSS3">
            <SiCss3/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Bootstrap">
            <SiBootstrap/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="jQuery">
            <SiJquery/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Cypress">
            <SiCypress/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Mocha">
            <SiMocha/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Chai">
            <SiChai/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Jest">
            <SiJest/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Storybook">
            <SiStorybook/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="ESLint">
            <SiEslint/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Git">
            <SiGit/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Github">
            <SiGithub/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Npm">
            <SiNpm/>
          </div>

          <div className="react-icons tooltip tooltip-open tooltip-bottom tooltip-info" data-tip="Netlify">
            <SiNetlify/>
          </div>

      </div>
    </div>
  )
}

export default SkillsList;