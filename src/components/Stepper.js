import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Stepper = ({ handleClick, currentStep, steps }) => {
    const [newStep, setNewStep] = useState([]);
    const stepsRef = useRef();
  
    const updateStep = (stepNumber, steps) => {
      const newSteps = [...steps];
      let count = 0;
      while (count < newSteps.length) {
        //current step
        if (count === stepNumber) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: true,
          };
          count++;
        }
  
        //step completed
        else if (count < stepNumber) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: true,
            completed: true,
          };
          count++;
        }
        //step pending
        else {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: false,
            completed: false,
          };
          count++;
        }
      }
  
      return newSteps;
    };
  
    useEffect(() => {
      const stepsState = steps.map((step, index) =>
        Object.assign(
          {},
          {
            description: step,
            completed: false,
            highlighted: index === 0 ? true : false,
            selected: index === 0 ? true : false,
          }
        )
      );
  
      stepsRef.current = stepsState;
      const current = updateStep(currentStep - 1, stepsRef.current);
      setNewStep(current);
    }, [steps, currentStep]);
  
    const stepsDisplay = newStep.map((step, index) => {
      return (
        <div
          key={index}
          className={
            index !== newStep.length - 1
              ? "w-full flex items-center"
              : "flex items-center"
          }
        >
          <div className="relative flex flex-col items-center text-teal-600">
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
              step.completed ? "border-green-600" : "border-gray-300 "
            }  `}
          ></div>
        </div>
      );
    });
  
    return (
      <div className="flex w-full px-2">
        <button
        onClick={() => handleClick()}
        className={`cursor-pointer py-2 px-2 font-semibold uppercase text-black transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? "hidden" : ""
        }`}
      >
        <IoIosArrowBack />
      </button>
      <div className="container mx-auto py-4 flex justify-between items-center">
        {stepsDisplay}
      </div>
      </div>
      
    );
  };
  export default Stepper;
