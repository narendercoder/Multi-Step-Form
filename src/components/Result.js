import React from 'react'

const Result = () => {
  return (
    <div className='w-screen min-h-screen flex justify-center items-center'>
    <div className="container px-5 md:p-0">
      <div className='flex flex-col justify-center items-center'>
        <div className='mb-5 text-center'>
         <h1 className='text-3xl font-bold'>
         Learning paths based on your answer
         </h1>
         <span className='py-3 inline-block text-gray-500'>Choose one to get started. You can switch anytime</span>
        </div>
         <div className='flex  items-center'>
          <div className='flex flex-col md:flex-row gap-3'>
            <div className="card px-2 py-2 max-w-[400px] flex flex-col justify-center items-center gap-5">
             <div>
               <span className='rounded-lg px-2 py-1 font-bold text-sm bg-yellow-400 text-black'>Most Popular</span>
             </div>
             <div className='flex'>
             <div className='w-1/2'>
                <p><span className='font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability</p>
              </div>
              <div className='w-1/2 flex justify-center items-center px-2 max-h-[96px]'>
                <img src="https://images.squarespace-cdn.com/content/v1/59b07ebde5dd5b4656794977/1625588887212-BIHE6Z8I3YOQNBXVS349/Math_Foundations_WIP_v01_6.gif?format=500w" alt="" className='max-w-full h-full' />
              </div>
             </div>
            </div>
            <div className="card px-2 py-2 max-w-[400px] flex flex-col justify-center items-center gap-5">
             <div>
               <span className='rounded-lg px-2 py-1 font-bold text-sm bg-yellow-400 text-black'>Most Popular</span>
             </div>
             <div className='flex'>
             <div className='w-1/2'>
                <p><span className='font-bold'>Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.</p>
              </div>
              <div className='w-1/2 flex justify-center items-center px-2 max-h-[96px]'>
                <img src="https://images.squarespace-cdn.com/content/v1/59b07ebde5dd5b4656794977/1625588887212-BIHE6Z8I3YOQNBXVS349/Math_Foundations_WIP_v01_6.gif?format=500w" alt="" className='max-w-full h-full' />
              </div>
             </div>
            </div>
          </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Result