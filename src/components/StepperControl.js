import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
    {/* <button
        onClick={() => handleClick()}
        className={`absolute left-[5%] top-0 cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? "hidden" : ""
        }`}
      >
        Back
      </button> */}
    {/* next button */}
    <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  )
}

export default StepperControl