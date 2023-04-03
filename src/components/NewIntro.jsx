import React from 'react'

const NewIntro = () => {
  return (
    <div className="flex-grow flex flex-col text-lg w-full md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2 gap-4 justify-center items-start">
      <div>
        <span className="uppercase font-black text-2xl">Currently</span> <br />I'm building things at <span className="italic underline">TSB Communications</span> with awesome people.
      </div>
      <div>
        I'm a software developer based in the lower mainland.<br />
        <span className="font-black">But</span> feel free to shoot me a message if you're looking to work together, I would love to have a chat!
      </div>
    </div>
  )
}

export default NewIntro