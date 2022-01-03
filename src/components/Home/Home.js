import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Congratulation from "../Congratulation/Congratulation";
import WelcomeSection from "../Section_1/Section_1";
import CompanyManager from "../Section_11/Section_11";
import ChooseState from "../Section_2/Section_2";
import PersonalInformation from "../Section_3/Section_3";
import SelectCompany from "../Section_4/Section_4";
import PhysicalOperatingAddress from "../Section_5/Section_5";
import YesNo from "../Section_6/Section_6";
import CompanyBusinessAddress from "../Section_7/Section_7";
import BusinessDetails from "../Section_8/Section_8";
import NumberOfShares from "../Section_9/Section_9";
import RenderButton from "../utilities/RenderButton";
const Home = () => {
  const [formStep, setFromStep] = useState(1);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const completeFormStep = () => {
    setFromStep((current) => current + 1);
  };
  const goToPreviousState = () => {
    setFromStep((current) => current - 1);
  };
  // console.log(watch("firstName"));
  const submitForm = (values: any): void => {
    window.alert(JSON.stringify(values, null, 2));
    console.log(values.incomeStatement[0]);
    completeFormStep();
  };

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative pt-20">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10">
        <img src={Logo} alt="" />
      </div>
      <div className="max-w-3xl w-full mt-10 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-10 py-10">
          {formStep > 1 && (
            <button
              onClick={goToPreviousState}
              className="flex opacity-50 hover:opacity-100 mb-4"
            >
              {" "}
              <FaArrowLeft className="mt-1 mr-1" />
              Back
            </button>
          )}
          <form onSubmit={handleSubmit(submitForm)}>
            {formStep === 1 && <WelcomeSection />}
            {formStep === 2 && (
              <ChooseState register={register} errors={errors} />
            )}
            {formStep === 3 && (
              <PersonalInformation register={register} errors={errors} />
            )}
            {formStep === 4 && (
              <SelectCompany register={register} errors={errors} />
            )}
            {formStep === 5 && (
              <PhysicalOperatingAddress register={register} errors={errors} />
            )}
            {formStep === 6 && <YesNo register={register} />}
            {formStep === 7 && (
              <CompanyBusinessAddress register={register} errors={errors} />
            )}
            {formStep === 8 && (
              <BusinessDetails register={register} errors={errors} />
            )}
            {formStep === 9 && (
              <NumberOfShares register={register} errors={errors} />
            )}
            {/* {formStep === 10 && (
              <OwnerDetails register={register} errors={errors} />
            )} */}

            {formStep === 10 && (
              <CompanyManager register={register} errors={errors} />
            )}
            {formStep === 11 && <Congratulation />}

            <RenderButton
              isValid={isValid}
              formStep={formStep}
              completeFormStep={completeFormStep}
            />
          </form>
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
