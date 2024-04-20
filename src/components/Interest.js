import React, { useState } from "react";
import { interest } from "../config/data";
import { RadioGroup } from '@headlessui/react'
import { useStepperContext } from "../contexts/StepperContext";

const Interest = () => {
    const [selected, setSelected] = useState(interest[0])
    const { userData, setUserData } = useStepperContext();

    const handleClick = (value) => {
      setUserData({...userData, interest: value});
    };

  return (
    <div className="relative">
    <RadioGroup value={selected} onChange={setSelected} >
    <div className="container my-auto">
        <div className="heading text-center">
          <h1 className="title font-bold text-3xl py-3">
              Which are you most interested in?
          </h1>
          <p className="text-slate-500 text-base font-semibold">
            Choose just one.This will help us to get you started (but won't limit your experience)
          </p>
        </div>
        <div className="relative flex flex-col justify-center items-stretch flex-wrap mt-9 w-full">
        {interest.map((item, index) => (
            <RadioGroup.Option 
            key={item.id} 
            value={item}
            onClick={()=>handleClick(item.name)}
            className={({active, checked})=> `${active ? ' border-[#F2B135] shadow-md ' : ' '}${checked ? 'border-[#F2B135] shadow-md' : 'border-[#E6E6E6]'} text-base mx-auto normal-case py-4 px-6 flex justify-start items-center font-semibold border-[0.5px] mb-3 rounded-md cursor-pointer hover:scale-[1.01] transition-all ease-in-out duration-200 max-w-[570px] w-full`}>
              <div className="relative max-h-[32px]">
                <img src={item.img} alt=" " className="w-[32px] min-h-[32px] mr-6" />
              </div>
              <div className="text-black">
                {item.name}{" "}
                <span className="text-slate-500">or soon to be enrolled</span>
              </div>
            </RadioGroup.Option>

        ))}
        </div>
      </div>
    </RadioGroup>
    </div>
  )
}

export default Interest