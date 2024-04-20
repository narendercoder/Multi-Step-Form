import React from "react";

 const Component3 = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[62vh]">
      <div className="container flex items-center w-full">
      <div className="flex items-center flex-col md:flex-row flex-wrap w-full">
        <div className="flex justify-start w-full md:w-1/2">
         <div className="mx-auto w-[300px]">
         <video
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
            playsInline="playsinline"
            className="max-w-[300px]"
            src="https://brilliant.org/site_media/version-0/images/nux-animations/pulley-blob.mp4"
          ></video>
         </div>
        </div>
        <div className="w-full px-5 md:px-0 md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex justify-center md:justify-start mb-4 text-center md:text-left text-3xl font-bold w-full">
            <h1>You’re in the right place</h1>
          </div>
          <div className="max-w-[464px] flex justify-center items-center">
            <p className="mb-4 text-base text-center md:text-left">
              Brilliant gets you hands-on with a whole universe of concepts in
              math, science, and computer science. You'll solve fun problems
              while growing your critical thinking skills.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Component3


