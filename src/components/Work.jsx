import React, { useState, useEffect } from 'react';
import WorkItem from './WorkItem';

const Work = ({activeTab}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);


  if (activeTab === "Education" ) {
    return (
      <section className="flex-col">
        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2022</div>
            <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-sm md:text-base">Full Stack Web Development</div>
            <div className="info-content text-sm">Lighthouse Labs</div>
          </div>
        </WorkItem>
        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            {
              width > 500
                ? <div className="text-gray-500 text-xs text-center md:text-base md:text-left">
                    2014 - 2016
                  </div>
                : <div className="text-gray-500 text-xs text-center md:text-base md:text-left">
                    2014<br/>-<br/>2016
                  </div>
            }
            <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-sm md:text-base">Business Administration</div>
            <div className="info-content text-sm">University of the Fraser Valley</div>
          </div>
        </WorkItem>
      </section>
    )
  };

  if (activeTab === "Experience") {
    return (
      <section className="flex-col">
        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2022</div>
            <div className="text-gray-500 text-[0.5rem] md:text-sm">May - Current</div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-sm md:text-base">Web Developer/Admin (contract)</div>
            <div className="info-content text-sm">The Happy Herd Animal Sanctuary</div>
          </div>    
        </WorkItem>

        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            {
              width > 500
                ? <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2019 - 2022</div>
                : <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2019<br/>-<br/>2022</div>
              }
            <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-sm md:text-base">Marketing Coordinator</div>
            <div className="info-content text-sm">Mike's Computer Shop</div>
          </div>    
        </WorkItem>

        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            {
              width > 500
                ? <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2017 - 2019</div>
                : <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2017<br/>-<br/>2019</div>
              }
            <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-sm md:text-base">Purchaser</div>
            <div className="info-content text-sm">Mike's Computer Shop</div>
          </div>    
        </WorkItem>

        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            {
              width > 500
                ? <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2016 - 2017</div>
                : <div className="text-gray-500 text-xs text-center md:text-base md:text-left">2016<br/>-<br/>2017</div>
              }
            <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-sm md:text-base">CSR</div>
            <div className="info-content text-sm">Mike's Computer Shop</div>
          </div>    
        </WorkItem>

      </section>
    )
  };

  return (
    <section className="flex-col w-full md:w-2/3 m-auto">
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          <div className="text-gray-500 text-xs text-center md:text-base md:text-left"></div>
          <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-blue-500 font-black text-2xl md:text-3xl">Experience</div>
        </div>    
      </WorkItem>
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2022</div>
          <div className="text-gray-500 text-[0.7rem] md:text-base">May - Current</div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-neutral font-black text-md md:text-xl">Web Developer/Admin (contract)</div>
          <div className="info-content text-md md:text-lg">The Happy Herd Animal Sanctuary</div>
          <ul className="list-disc ml-1 mt-2 text-sm md:ml-5 md:text-base">
            <li>Transition from full WordPress into a headless CMS and serve frontend with NextJS</li>
            <li>Create a fully contained tour booking system</li>
            <li>Update user experience and user interface using the latest technology</li>
            <li>Design the new website with modern trends</li>
            <li>Maintain and improve the current Happy Herd website </li>
            <li>Manage and update content and plugins</li>
            <li>Optimize the user experience and fix bugs</li>
          </ul>
        </div>    
      </WorkItem>
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          {
            width > 500
              ? <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2019 - 2022</div>
              : <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2019<br/>-<br/>2022</div>
          }
          <div className="text-gray-500 text-[0.7rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-neutral font-bold text-md md:text-xl">Marketing Coordinator</div>
          <div className="info-content text-md md:text-lg">Mike's Computer Shop</div>
          <ul className="list-disc ml-1 mt-2 text-sm md:ml-5 md:text-base">
            <li>Designed and coded landing pages for any marketing initiatives to funnel inbound leads with Bootstrap, and Javascript</li>
            <li>Improved SEO by implmenting new strategies and helped the dev team update HTML on the website</li>
            <li>Sucessfully managed multiple projects at once and executing cross-department initiatives</li>
            <li>Managed and coordinated marketing opportunities with various external organizations</li>
            <li>Created and managed graphic assets using most of the Adobe suite programs as well as Figma</li>
            <li>Increased traffic by 25%, conversions by 13% and subscribers substantially</li>
            <li>Executed A/B tests on email + SMS campaigns and optimized performance and conversion</li>
          </ul>
        </div>    
      </WorkItem>
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          {
            width > 500
              ? <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2017 - 2019</div>
              : <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2017<br/>-<br/>2019</div>
          }
          <div className="text-gray-500 text-[0.7rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-neutral font-bold text-md md:text-xl">Purchaser</div>
          <div className="info-content text-md md:text-lg">Mike's Computer Shop</div>
          <ul className="list-disc ml-1 mt-2 text-sm md:ml-5 md:text-base">
            <li>Worked with the CEO and PM on inventory forecasting and run rates</li>
            <li>Managed distribution accounts on buy-ins and fostering relationships</li>
            <li>Planned logistics and warehousing of the inventory</li>
            <li>Managed 3PL inventory and ensured they are properly counted on</li>
            <li>Manage total inventory and stocked retail stores based on run rates</li>
            <li>Worked on pricing promotional items internally and with suppliers</li>
          </ul>
        </div>    
      </WorkItem>
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          {
            width > 500
              ? <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2016 - 2017</div>
              : <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2016<br/>-<br/>2017</div>
          }
          <div className="text-gray-500 text-[0.7rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-neutral font-bold text-md md:text-xl">CSR</div>
          <div className="info-content text-md md:text-lg">Mike's Computer Shop</div>
          <ul className="list-disc ml-1 mt-2 text-sm md:ml-5 md:text-base">
            <li>Ensured issues and questions from customers are answered and resolved in a timely manner</li>
            <li>Resolved shipping issues while shipment was in transit</li>
            <li>Took on extra responsibilities as needed</li>
          </ul>
        </div>    
      </WorkItem>
      <div className="divider"></div> 
        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            <div className="text-gray-500 text-lg text-center md:text-xl md:text-left"></div>
            <div className="text-gray-500 text-[0.7rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-blue-500 font-black text-2xl md:text-3xl">Education</div>
          </div>    
        </WorkItem>
        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2022</div>
            <div className="text-gray-500 text-[0.7rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-md md:text-xl">Full Stack Web Development</div>
            <div className="info-content text-md md:text-lg">Lighthouse Labs</div>
          </div>    
        </WorkItem>
        <WorkItem>
          <div className="basis-1/4 flex flex-col items-end">
            {
              width > 500
                ? <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2014 - 2016</div>
                : <div className="text-gray-500 text-lg text-center md:text-xl md:text-left">2014<br/>-<br/>2016</div>
            }
            <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
          </div>
          <div className="basis-2/4 flex flex-col items-start">
            <div className="text-neutral font-bold text-md md:text-xl">Business Administration</div>
            <div className="info-content text-md md:text-lg">University of the Fraser Valley</div>
          </div>    
        </WorkItem>
      <div className="divider"></div> 
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          <div className="text-gray-500 text-lg text-center md:text-xl md:text-left"></div>
          <div className="text-gray-500 text-[0.7rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-blue-500 font-black text-2xl md:text-3xl">Skills and Tech Stack</div>
        </div>    
      </WorkItem>
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          <div className="text-gray-500 text-lg text-center md:text-xl md:text-left"></div>
          <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-neutral font-bold text-sm md:text-base"></div>
          <div className="info-content text-sm"></div>
          <ul className="list-disc ml-1 mt-2 text-sm md:ml-5 md:text-base">
            <li>JavaScript frameworks including reaect.js and Next.js</li>
            <li>CSS libraries and tools such as Tailwind CSS, Bootstrap, Sass, DaisyUI</li>
            <li>Backend stack including Node.js and Express</li>
            <li>Full stack frameworks like Rails</li>
            <li>Database tools like Postgres, MySQL</li>
            <li>Built tools like Webpack</li>
            <li>Design tools like Figma and XD</li>
          </ul>
        </div>    
      </WorkItem>
      <div className="divider"></div> 
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          <div className="text-gray-500 text-lg text-center md:text-xl md:text-left"></div>
          <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-blue-500 font-black text-2xl md:text-3xl">Contact Info</div>
        </div>    
      </WorkItem>
      <WorkItem>
        <div className="basis-1/4 flex flex-col items-end">
          <div className="text-gray-500 text-lg text-center md:text-xl md:text-left"></div>
          <div className="text-gray-500 text-[0.5rem] md:text-sm"></div>
        </div>
        <div className="basis-2/4 flex flex-col items-start">
          <div className="text-neutral font-bold text-sm md:text-base"></div>
          <div className="info-content text-sm"></div>
          <ul className="list-disc ml-1 mt-2 text-sm md:ml-5 md:text-base">
            <li>Email: <a href="mailto:yoo.phil92@gmail.com" className="underline">yoo.phil92@gmail.com</a></li>
            <li>LinkedIn:  <a href="https://www.linkedin.com/in/philyoo333/" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/philyoo333</a></li>
            <li>Github: <a href="https://github.com/josemourinho333" target="_blank" rel="noopener noreferrer" className="underline">github.com/josemourinho333</a></li>
            <li>Tel: <a href="tel:+16049964504" className="underline">604-996-4504</a></li>
            <li>Location: Abbotsford, BC (open to relocation)</li>
          </ul>
        </div>    
      </WorkItem>
    </section>
  )
  
}

export default Work;