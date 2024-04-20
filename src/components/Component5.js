import React from 'react'

const Component5 = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[62vh]">
    <div className="flex items-center w-full">
    <div className="flex items-center flex-col md:flex-row flex-wrap w-full">
      <div className="flex justify-start w-full md:w-1/2">
       <div className="mx-auto w-[300px]">
       <video
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          playsInline="playsinline"
          className="max-w-[300px]"
          src="https://brilliant.org/site_media/version-0/images/nux-animations/cheerleader-blorb.mp4"
        ></video>
       </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex justify-center md:justify-start mb-4 text-center mx-auto text-3xl font-bold">
          <h1>You’re on your way!</h1>
        </div>
        <div className='text-4xl text-[#EEA71F] text-center md:text-left'>
        ★★★★★
        </div>
        <div className="max-w-[464px] flex justify-center mt-5 w-full">
          <div>
          <p className="mb-4 text-base text-center md:text-left">
          <em>“If you like bending your mind over interesting problems or want to explore a rich world full of beautiful mysteries, this app will be a sure thing for you.”</em>
          </p>
          <p><br/></p>
        <p><em>— Bob V.</em></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Component5