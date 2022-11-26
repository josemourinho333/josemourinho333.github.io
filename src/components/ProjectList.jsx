import React from 'react';
import Featured from './Featured';

const ProjectList = () => {
  return (
    <div className="hidden lg:flex lg:flex-col">
      <h5 className="featured-header font-bold text-xl mt-4">
        Projects
      </h5>
      <Featured 
        current={false}
        header={true}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/tarot-me.png?raw=true'
        name='Tarot Card Reader & Learn'
        stack='NextJS, ReactJS, NodeJS, Express, Postgres, Tailwind, DasiyUI, Axios'
        desc={'The most popular, free and best looking fulls tack tarot reading and learning website.'}
        github='https://github.com/josemourinho333/tarot-me'
        website='https://637d2361d1c07a00088c3ef1--scintillating-scone-d0792d.netlify.app/'
      />
      <Featured 
        current={false}
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/scraper-card.png?raw=true'
        name='Web Scraper'
        stack='TypeScript, ReactJS, NodeJS, Express, Postgres, Crontab, Cheerio, NodeMailer, EJS, Tailwind, DaisyUI, Webpack'
        desc={'Scraping Craigslist for Macbooks to resell. Cronjob set up to scrape every 30 mins and email me any good deals.'}
        github='https://github.com/josemourinho333/scraps'
        website=''
      />
      <Featured 
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/section-featured/docs/shesa10-card.png?raw=true'
        name="'... is a 10 but ...' Generator"
        stack='Ruby on Rails, ReactJS, REST'
        desc={`Full stack "... is a 10 but ..." random generator.`}
        github='https://github.com/josemourinho333/refactored-garbanzo'
        website='https://peaceful-bastion-57486.herokuapp.com/'
      />
      <Featured 
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/keen-card.png?raw=true'
        name="Keen Dating"
        stack='ReactJS, NodeJS, Express, PostgreSQL, Tailwind, Socket.io, WebRTC, PeerJS,  Maps API, Giphy Api'
        desc='Full stack dating app with swiping, matching, live chat, video chat, location API, emojis, gifs, and more.'
        github='https://github.com/josemourinho333/Keen-Dating-App'
        website=''
      />
      <Featured 
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/streaming-site-clone-card.png?raw=true'
        name="Netflix Clone"
        stack='ReactJS, Redux, TheMovieDB API, Tailwind'
        desc='But with trailers. Users can log into their TMDB account and update their lists, add to their favs, create lists, watch trailers and more.'
        github='https://github.com/josemourinho333/streaming-site-clone'
        website=''
      />
      <Featured 
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/fakestore-card.png?raw=true'
        name="Fake eCommerce Store"
        stack='Ruby on Rails, SCSS, Fakestore API'
        desc='Rails eCommerce site where users can browse, filter and view products. Focus mostly on layout and Rails functionality.'
        github='https://github.com/josemourinho333/fakestore-rails'
        website=''
      />
      <Featured 
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/jungle-card.png?raw=true'
        name="The Jungle"
        stack='Ruby on Rails, ActiveRecord, PostgreSQL, SCSS'
        desc='Mini eCommerce app where users can browse, and buy plants via strip payment and sellers can add and update their products.'
        github='https://github.com/josemourinho333/jungle-ruby-app'
        website=''
      />
      <Featured 
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/scheduler-card.png?raw=true'
        name="Interview Scheduler"
        stack='React, SCSS, WebScokets'
        desc='React SPA where users can schedule an interview with interviewers and update their bookings.'
        github='https://github.com/josemourinho333/scheduler'
        website='https://beautiful-beignet-2c88ff.netlify.app/'
      />
      <Featured 
        header={false}
        img='https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/diary-notes-card.png?raw=true'
        name="Diary/Notes App"
        stack='JavaScript'
        desc='Super simple diary/notes app where users can jot down their thoughts or basically anything they want.'
        github='https://github.com/josemourinho333/diary-notes'
        website=''
      />
    </div>
  )
}

export default ProjectList;