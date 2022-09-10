import "./scss/styles.js";
import Intro from './components/Intro';
import Current from "./components/Current.jsx";
import Featured from "./components/Featured/index";
import About from './components/About';
import Skills from "./components/Skills.jsx";
import Nav from "./components/Nav/index.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Contact />
        <Intro />
        <Current />
        <About/>
        <Featured 
          header={true}
          img='https://github.com/josemourinho333/josemourinho333.github.io/blob/section-featured/docs/shesa10-card.png?raw=true'
          name="'She's a 10 but ...' Generator"
          stack='Ruby on Rails, ReactJS, REST'
          desc={`Full stack "she's a 10 but ..." random generator. 
          Is it trendy? Yes. Is it useless? Completely. 
          Is it hilarious though? Maybe.`}
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
        <Skills />
        <Education />
        <Work />
      </div>
      <Footer />
    </>
  );
}

export default App;
