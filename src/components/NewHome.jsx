import React from 'react';
import Nav from '../components/Nav';

const NewHome = () => {
  return (
    <div
      className="min-h-screen text-black"
      style={{
        "backgroundSize": "100% 100%",
        "backgroundPosition": "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
        "backgroundImage": "radial-gradient(18% 28% at 24% 50%, #edf4f6 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #edf4f6 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #f6cef8 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #edf4f6 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #edf4f6 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #edf4f6 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #edf4f6 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #edf4f6 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #AAB0FFFF 0%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #edf4f6 24%, #073AFF00 100%),linear-gradient(188deg, #f0f2f7 1%, #4C00FCFF 100%)"
      }}
    >
      <Nav />
    </div>
  )
}

export default NewHome;