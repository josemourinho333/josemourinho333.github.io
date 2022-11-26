import React from 'react';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRuby, SiJquery, SiSass, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRubyonrails, SiCypress, SiMocha, SiChai, SiJest, SiStorybook, SiEslint, SiGit, SiGithub, SiNpm, SiNetlify, SiHeroku, SiAdobeillustrator, SiAdobeaftereffects, SiAdobephotoshop, SiAdobexd, SiFigma, SiGimp, SiCanva, SiGoogleanalytics, SiGoogleads, SiDocker  } from 'react-icons/si';
import { TbBrandMeta } from 'react-icons/tb';

const ImgContainer = ({img, url, name}) => {

  if (!img) {
    const classSetting = 'w-10 h-10';

    return (
      <div className="carousel-item w-1/5 bg-white flex-col justify-center items-center my-1">
        {
          !name
            ? ''
            : name === 'ReactJS'
            ? <SiReact className={classSetting}/>
            : name === 'Ruby'
            ? <SiRuby className={classSetting}/>
            : name === "Javascript"
            ? <SiJavascript className={classSetting} />
            : name === 'jQuery'
            ? <SiJquery className={classSetting}/>
            : name === "SASS"
            ? <SiSass className={classSetting} />
            : name === 'Tailwind'
            ? <SiTailwindcss className={classSetting} />
            : name === "Bootstrap"
            ? <SiBootstrap className={classSetting} />
            : name === "CSS3"
            ? <SiCss3 className={classSetting} />
            : name === "HTML5"
            ? <SiHtml5 className={classSetting} />
            : name === "NodeJS"
            ? <SiNodedotjs className={classSetting} />
            : name === "Express"
            ? <SiExpress className={classSetting} />
            : name === "Rails"
            ? <SiRubyonrails className={classSetting} />
            : name === "PostgreSQL"
            ? <SiPostgresql className={classSetting} />
            : name === "MySQL"
            ? <SiMysql className={classSetting} />
            : name === "Cypress"
            ? <SiCypress className={classSetting} />
            : name === "Jest"
            ? <SiJest className={classSetting} />
            : name === "Mocha"
            ? <SiMocha className={classSetting} />
            : name === "Chai"
            ? <SiChai className={classSetting} />
            : name === "Storybook"
            ? <SiStorybook className={classSetting} />
            : name === "Eslint"
            ? <SiEslint className={classSetting} />
            : name === "Github"
            ? <SiGithub className={classSetting} />
            : name === "Git"
            ? <SiGit className={classSetting} />
            : name === "NPM"
            ? <SiNpm className={classSetting} />
            : name === "Netlify"
            ? <SiNetlify className={classSetting} />
            : name === "Heroku"
            ? <SiHeroku className={classSetting} />
            : name === "Docker"
            ? <SiDocker className={classSetting} />
            : name === "XD"
            ? <SiAdobexd className={classSetting} />
            : name === "Figma"
            ? <SiFigma className={classSetting} />
            : name === "Photoshop"
            ? <SiAdobephotoshop className={classSetting} />
            : name === "Illustrator"
            ? <SiAdobeillustrator className={classSetting} />
            : name === "Gimp"
            ? <SiGimp className={classSetting} />
            : name === "Canva"
            ? <SiCanva className={classSetting} />
            : name === "After Effects"
            ? <SiAdobeaftereffects className={classSetting} />
            : name === "Analytics"
            ? <SiGoogleanalytics className={classSetting} />
            : name === "Ads"
            ? <SiGoogleads className={classSetting} />
            : name === "Meta"
            ? <TbBrandMeta className={classSetting} />
            : ''
        }
        <h2 className="text-sm mt-1 text-gray-700">{name}</h2>
      </div>
    )
  }

  return (
    <a href={url} className="shrink-0 w-1/2">
      <div className="carousel-item shadow-sm">
        <div className="card card-compact bg-gray-200 rounded-lg w-11/12 m-auto max-h-[300px]">
        <figure className="h-1/2"><img src={img} alt={name}/></figure>
          <div className="card-body">
          <h2 className="card-title text-sm truncate">{name}</h2>
            <p className="text-sm text-gray-500 truncate">{url}</p>
        </div>
        </div>
      </div>
    </a>
  )
}

export default ImgContainer;