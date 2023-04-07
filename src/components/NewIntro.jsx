import React from 'react'

const NewIntro = () => {
  return (
    <div className="flex-grow flex flex-col text-lg basis-1/2 gap-4 justify-center items-start">
      <div>
        <span className="uppercase font-black text-3xl">Currently</span> <br />building things at <span className="italic">TSB Communications</span> with awesome people.
      </div>
      <div>
        I'm a software developer based in the lower mainland.<br />
        Shoot me a message if you're looking to work together, <br />I would love to have a chat!
      </div>
    </div>
  )
}

export default NewIntro