import React, { useState } from "react";
import { profession } from "../config/data";
import { RadioGroup } from '@headlessui/react'
import { useStepperContext } from "../contexts/StepperContext";
import { useEffect } from "react";

const Profession = () => {
    const [selected, setSelected] = useState(profession[0])
    const { userData, setUserData } = useStepperContext();

    const handleChange = (value) => {
      setUserData({...userData, profession: value});
    };

    useEffect(()=>{
        handleChange(selected.name)
    }, [selected])
  
    console.log(userData)

  return (
    <div className="relative">
    <RadioGroup value={selected} onChange={setSelected} >
    <div className="container my-auto">
        <div className="heading text-center">
          <h1 className="title font-bold text-3xl py-3">
            Which describes you best ?
          </h1>
          <p className="text-slate-500 text-base font-semibold">
            This will help us personalize your experience
          </p>
        </div>
        <div className="relative flex flex-col justify-center items-stretch flex-wrap mt-9 w-full">
        {profession.map((item, index) => (
            <RadioGroup.Option 
            key={item.id} 
            value={item}
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
  );
};

export default Profession;
