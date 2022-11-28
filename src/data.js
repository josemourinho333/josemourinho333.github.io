// Just add it in the beginning as the app will reverse the order so first one here you see is awlays latest.
const projectData = [
  {
    name: 'Tarot Card Reader & Learning',
    oneLiner: 'See what the message is for you today.',
    images: [
      'https://github.com/josemourinho333/tarot-me/raw/master/docs/Screen%20Shot%202022-11-20%20at%206.16.04%20PM.png?raw=true',
      'https://github.com/josemourinho333/tarot-me/raw/master/docs/Screen%20Shot%202022-11-20%20at%206.16.24%20PM.png?raw=true',
      'https://github.com/josemourinho333/tarot-me/raw/master/docs/Screen%20Shot%202022-11-20%20at%206.16.47%20PM.png?raw=true',
      'https://github.com/josemourinho333/tarot-me/raw/master/docs/Screen%20Shot%202022-11-20%20at%206.16.57%20PM.png?raw=true',
      'https://github.com/josemourinho333/tarot-me/raw/master/docs/Screen%20Shot%202022-11-20%20at%206.17.10%20PM.png?raw=true',
      'https://github.com/josemourinho333/tarot-me/raw/master/docs/Screen%20Shot%202022-11-20%20at%206.17.32%20PM.png?raw=true'
    ],
    thumbnail: 'https://cdn.shopify.com/s/files/1/0561/8477/files/Divine-Feminine-Tarot-NOCTURNAL-22.png?v=1606221524',
    description: 'Full stack app that will pull random tarot cards for you depending on what type of reading you choose in the first step. Once cards are drawn, you can click on them to read about them and their meanings. You can also go to learn page to learn and read about all 78 cards.',
    stack: [
      'NextJS', 'ReactJS', 'JavaScript', 'NodeJS', 'Express', 'Postgres', 'Tailwind', 'DasiyUI', 'Axios'
    ],
    repo: 'https://github.com/josemourinho333/tarot-me',
    demo: 'https://scintillating-scone-d0792d.netlify.app/',
    challenges: [
      { 
        issue: 'Issues with data fetching times and rendering the page properly once completed',
        resolution: 'This was a issue I never experienced. Console logging the fetch works and I see the data fetched but browser would not render the component properly depending on the condition and would get stuck on showing loading component. I fixed this after researching the issue and reworkign the data fetching logic and where it happens. Saving the data in local storage for faster loading.'
      },
    ]
  },
  {
    name: 'Web3 Smart Contract',
    oneLiner: 'Send crypto to another wallet.',
    images: [

    ],
    thumbnail: '',
    description: 'Simple Web 3.0 blockchain app where users can send crypto to a wallet and interact with smart contracts with metamask.',
    stack: [
      'NextJS', 'React', 'JavaScript', 'Solidity', 'ethersJS', 'hardhat', 'Tailwind'
    ],
    repo: 'https://github.com/josemourinho333/curly-octo-broccoli',
    demo: '',
    challenges: [
      { 
        issue: '',
        resolution: ''
      },
    ]
  },
  {
    name: 'Web Scraper',
    oneLiner: 'Be notified when someone lists a MacBook for sale below median price.',
    images: [
      'https://github.com/josemourinho333/scraps/raw/master/docs/scraper-ui.PNG?raw=true',
      'https://github.com/josemourinho333/scraps/raw/master/docs/scraper-listing.PNG?raw=true',
      'https://github.com/josemourinho333/scraps/raw/master/docs/scraper-alert.PNG?raw=true',
      'https://github.com/josemourinho333/scraps/raw/master/docs/scraper-settings.PNG?raw=true',
      'https://github.com/josemourinho333/tarot-me/raw/master/docs/Screen%20Shot%202022-11-20%20at%206'
    ],
    thumbnail: '',
    description: 'Full stack app that will scrape Craigslist searching for Macbooks. The application will calculate median values for Airs and Pros and alert me via email if the deal is good and worth looking at. Cronjob is set up to scrape data every 30 minutes and email me if needed. Purpose for this app was to practice TypeScript, get more comfortable with building a full stack application and get familiar with setting up cronjob while creating a potential for me to snag a Macbook for myself or for me to resell for profit.',
    stack: [
      'ReactJS', 'TypeScript', 'JavaScript', 'NodeJS', 'Express', 'Postgres', 'Tailwind', 'DasiyUI', 'Axios', 'Cheerio',  'Crontab', 'Nodemailer'
    ],
    repo: 'https://github.com/josemourinho333/scraps',
    demo: '',
    challenges: [
      { 
        issue: 'Figuring out where the filtering of unneeded/bad listings needed to happen.',
        resolution: 'At first, I grabbed all listings and filtered them on the browser then wrote on the database but afterwards there was no really a need to view listings anymore on the browser so filtering moved to when I got back the parsed HTML using Cheerio then wrote straight into database. Frontend ended up being a place where I added new keywords to filter the data by.'
      },
    ]
  },
  {
    name: '... is a 10 but ... generator',
    oneLiner: 'Get a random line generated for the trendy "...is a 10 but ..." meme.',
    images: [
      
    ],
    thumbnail: '',
    description: 'You may find this app completely useless. And you completely right. I wanted to build a full stack app on something fun and silly and this is the result of it! App is built on React and Rails.',
    stack: [
      'Ruby on Rails', 'ReactJS', 'JavaScript'
    ],
    repo: 'https://github.com/josemourinho333/refactored-garbanzo',
    demo: 'https://peaceful-bastion-57486.herokuapp.com/',
    challenges: [
      { 
        issue: 'Figuring out how the different pronouns would fit in the whole final content.',
        resolution: 'Resolved by having different pronoun categories for both genders and compiling them properly before spitting them out. More complex ones wlil need to be manually edited on the admin side.'
      },
    ]
  },
  {
    name: 'Keen Dating App',
    oneLiner: 'Meet people you are keen on.',
    images: [
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Matches-page.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Landing-Login.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Homepage.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Preferences-page.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Preference-option.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Profile-view-edit.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Profile-view-edit-2.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Chatting-giphy.PNG?raw=true',
      'https://github.com/josemourinho333/Keen-Dating-App/raw/master/docs/Chatting-emojis.PNG?raw=true'
    ],
    thumbnail: '',
    description: 'Full stack dating app where users can swipe and match with other users. Matches can have a chat in real time and facetime eachother. Users can filter depending on preferences they set and edit their profiles.',
    stack: [
      'ReactJS', 'JavaScript', 'Pigeon Maps API', 'Giphy API', 'Socket.io', 'NodeJS', 'Express', 'Postgres', 'Axios', 'Tailwind'
    ],
    repo: 'https://github.com/josemourinho333/Keen-Dating-App',
    demo: '',
    challenges: [
      { 
        issue: 'Getting used to agile environment and finising in 2 weeks time.',
        resolution: 'After coding by myself for awhile it took some time to adjust to working in a team environment and collaborating with each other to solve problems and finish the app one time with minimal features we wanted included. It took constant communication between the team members and asking/getting help when needed right away.'
      },
    ]
  },
  {
    name: 'TrailerFlix',
    oneLiner: 'Discover movies, shows and watch trailers...Netflix style.',
    images: [
      'https://github.com/josemourinho333/streaming-site-clone/raw/master/docs/hero.PNG?raw=true',
      'https://github.com/josemourinho333/streaming-site-clone/raw/master/docs/homepage.PNG?raw=true',
      'https://github.com/josemourinho333/streaming-site-clone/raw/master/docs/categories.PNG?raw=true',
      'https://github.com/josemourinho333/streaming-site-clone/raw/master/docs/infopage-1.PNG?raw=true',
      'https://github.com/josemourinho333/streaming-site-clone/raw/master/docs/infopage-2.PNG?raw=true',
      'https://github.com/josemourinho333/streaming-site-clone/raw/master/docs/infopage-3.PNG?raw=true',
      'https://github.com/josemourinho333/streaming-site-clone/raw/master/docs/login.PNG?raw=true'
    ],
    thumbnail: '',
    description: 'This was a React project with Redux, TheMovieDB API and Tailwind where users can log into their TheMovieDB account and favourite, add to their watchlist, watch trailers, learn about movies/shows and interact.',
    stack: [
      'ReactJS', 'Redux', 'JavaScript', 'TMDB Api', 'Axios', 'Tailwind'
    ],
    repo: 'https://github.com/josemourinho333/streaming-site-clone',
    demo: '',
    challenges: [
      { 
        issue: 'Learning Redux and how it works',
        resolution: 'First time using Redux and it took some time reading the documents and learning how to implement it in my app. Afterwards, it was straight forward consuming them.'
      },
    ]
  },
  {
    name: 'Jungle',
    oneLiner: 'Buy and Sell Plants',
    images: [
      'https://camo.githubusercontent.com/8b2654c5887e126a0746124f4a128b50d1ee980ad0b7be517148770256759c9b/68747470733a2f2f692e696d6775722e636f6d2f7541516f4952442e706e67',
      'https://camo.githubusercontent.com/f3dfa3c4cd542aab3bb792c28c2d9a2956a9f39395b464eb124d97acf5636f12/68747470733a2f2f692e696d6775722e636f6d2f6b70695448436d2e706e67',
      'https://camo.githubusercontent.com/411235bdfd5eedf5eecac7ead07b7e093094c88959113bb9e102898bdc801517/68747470733a2f2f692e696d6775722e636f6d2f594764734631362e706e67',
      'https://camo.githubusercontent.com/304720555c65f9dcf7013ea9fc2cc4c731f6ea30375dec7dd679cb5068b4b30a/68747470733a2f2f692e696d6775722e636f6d2f6579464354706c2e706e67',
      'https://camo.githubusercontent.com/f0904b9260cca63bd0630f6f8254b1cc1a697e7016097c992d432b69880c8871/68747470733a2f2f692e696d6775722e636f6d2f4e7248336c48412e706e67'
    ],
    thumbnail: '',
    description: 'Full stack app where users can buy and sell plants with Stripe.',
    stack: [
      'Ruby on Rails', 'JavaScript', 'SCSS', 'HTML/CSS', 'Bootstrap'
    ],
    repo: 'https://github.com/josemourinho333/jungle-ruby-app',
    demo: '',
    challenges: [
      { 
        issue: 'Implementing Stripe',
        resolution: 'Took a lot of trial and error and in the end got it working via tutorials and documentations and stackoverflow.'
      },
    ]
  },
  {
    name: 'eCommerce Template',
    oneLiner: 'Your typeical eCommerce template.',
    images: [
      
    ],
    thumbnail: '',
    description: 'Built with Ruby on Rails building a super simple eCommerce template site using fakestore API.',
    stack: [
      'Ruby on Rails', 'JavaScript', 'SCSS', 'HTML/CSS'
    ],
    repo: 'https://github.com/josemourinho333/fakestore-rails',
    demo: '',
    challenges: [
      { 
        issue: 'Consuming API on Ruby',
        resolution: 'First time data fetching from an external API on Ruby app, and after reading the documentations it was super clear and probably one of my favourite ways of doing it, though JavaScript/React way is more embedded in my brain.'
      },
    ]
  },
  {
    name: 'Interview Scheduler',
    oneLiner: 'Schedule an interview today.',
    images: [
      
    ],
    thumbnail: '',
    description: 'A simple interview/appointment booking app using React, Webpack, Babel, Axios, WebSockets and tested with Storybook, Jest and Testing Library.',
    stack: [
      'ReacJS', 'JavaScript', 'SCSS', 'HTML/CSS'
    ],
    repo: 'https://github.com/josemourinho333/scheduler',
    demo: 'https://beautiful-beignet-2c88ff.netlify.app/',
    challenges: [
      { 
        issue: '',
        resolution: ''
      },
    ]
  },
  {
    name: 'Diary and Notes',
    oneLiner: 'Leave your thoughts.',
    images: [
      
    ],
    thumbnail: '',
    description: 'Simple diary/notes app utilizing local storage to store written pieces from the user.',
    stack: [
      'JavaScript', 'HTML/CSS'
    ],
    repo: 'https://github.com/josemourinho333/diary-notes',
    demo: '',
    challenges: [
      { 
        issue: 'First time using local storage',
        resolution: 'After reading about some code and documentation on how local storage works, it was straight forward and easy. Saw good use cases for using local storage other apps that I will be working on.'
      },
    ]
  },
];

export default projectData;