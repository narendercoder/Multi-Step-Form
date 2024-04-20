import React from 'react'

 const LoadingComponent = () => {


  return (
    <div className='w-screen h-screen overflow-hidden'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            {/* <div className='relative rounded-full border-[15px] border-gray-200 w-[100px] h-[100px]'>
             <div className='rounded-full absolute top-0 left-0 border-[15px] border-[#EEA71F] w-[100px] h-[100px]'>

             </div>
            </div> */}
            <div class="loader"></div>
            <div className='font-bold mt-5 text-center text-xl max-w-[580px]'>
                <h1>Finding learning path recommendations for you based on your responses</h1>
            </div>
        </div>
    </div>
  )
}
export default LoadingComponent;
