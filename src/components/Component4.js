import React, { useState } from "react";
import { data3 } from "../config/data";
import { RadioGroup } from "@headlessui/react";
import { useStepperContext } from "../contexts/StepperContext";
import { useEffect } from "react";

const Component4 = () => {
  const [selected, setSelected] = useState(data3[0]);
  const { userData, setUserData } = useStepperContext();

  const handleChange = (value) => {
    setUserData({ ...userData, maths: value });
  };

  useEffect(() => {
    handleChange(selected.name);
  }, [selected]);
  console.log(userData)
  return (
    <div className="relative flex justify-center items-center min-h-[62vh]">
      <RadioGroup value={selected} onChange={setSelected}>
        <div className="container my-auto">
          <div className="heading text-center">
            <h1 className="title font-bold text-3xl py-3">
              What is your math comfort level?
            </h1>
          </div>
          <div className="relative flex items-stretch justify-center flex-wrap mt-9 w-full">
            {data3.map((item, index) => (
              <RadioGroup.Option
                key={item.id}
                value={item}
                className={({ active, checked }) =>
                  `${active ? " border-[#F2B135] shadow-md " : " "}${
                    checked ? "border-[#F2B135] shadow-md" : "border-[#E6E6E6]"
                  } block-1 py-6 px-2 w-[200px] max-w-[200px] rounded-md h-[180px] flex flex-col items-center justify-between m-2 text-center border-[1px] border-solid  cursor-pointer hover:border-[#f2b135] hover:scale-[1.01] transition-all ease-in-out duration-200`
                }
              >
                <span className="w-full flex items-center justify-center h-[60px] my-2">
                  <img
                    src={item.img}
                    alt=""
                    className="p-2 max-h-full max-w-[180px]"
                  />
                </span>
                <span>{item.name}</span>
                <span className="text-lg opacity-50">{item.desc}</span>
              </RadioGroup.Option>
            ))}
          </div>
        </div>
      </RadioGroup>

      {/* <div className="container flex justify-center items-center">
            <div>
                <div>
                    <h1></h1>
                </div>
                <div className='relative mt-9 flex flex-col'>
                   <div className="flex items-stretch justify-center flex-wrap">
                   <div className='block-1 py-6 px-2 w-[200px] max-w-[200px] rounded-md h-[180px] flex flex-col items-center justify-between m-2 text-center border-[1px] border-solid border-[#ddd] cursor-pointer hover:border-[#f2b135] shadow-lg'>
                    <span className='w-full flex items-center justify-center h-[60px] my-2'>
                      <img src="https://ds055uzetaobb.cloudfront.net/answer-images/arithmetic-pC3bWR.png" alt="" className='p-2 max-h-full max-w-[180px]'  />
                    </span>
                    <span>Arithmetic</span>
                    <span className='text-lg opacity-50'>Introductory</span>
                   </div>
                  
                   </div>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default Component4;
