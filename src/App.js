import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Profession from "./components/Profession";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";
import Intereset from "./components/Interest";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import LoadingComponent from "./components/LoadingComponent";
import Component5 from "./components/Component5";
import Result from "./components/Result";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(true);

  const steps = useMemo(
    () => ["Profession", "Interest", "demo", "Maths", "demo", "Complete"],
    []
  );

  useEffect(() => {
    if (currentStep === steps.length) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [currentStep, steps]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Profession />;
      case 2:
        return <Intereset />;
      case 3:
        return <Component3 />;
      case 4:
        return <Component4 />;
      case 5:
        return <Component5 />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center bg-white my-5">
      {currentStep !== steps.length ? (
        <>
          {/* stepper */}
          <Stepper
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
          <div className="container my-2 p-2 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </>
      ) : (
        <>{loading ? <LoadingComponent /> : <Result />}</>
      )}

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
