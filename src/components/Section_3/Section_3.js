import React from "react";
import { FaLock } from "react-icons/fa";
import Country from "../Country/Country";

const Section_3 = ({ register, errors }) => {
  return (
    <section id="3" className="">
      <p className="text-2xl text-center">Personal Information</p>
      <p className="text-center text-base mb-5">
        We need your information to create{" "}
        <span className="text-red-600 font-medium">
          your company file for Audit
        </span>
      </p>
      <div className="flex text-sm">
        <FaLock className="mt-1" />
        <p className="ml-2">
          We protect your personal information. Learn more about our privacy
          policy
        </p>
      </div>
      <div className="flex flex-wrap mt-8 mb-4">
        <div class="w-full sm:w-1/3 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            First Name*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            type="text"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Middle Name <span className="text-xs">(Optional)</span>
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            type="text"
            {...register("middleName")}
          />
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            type="text"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
      <p className="text-xs ml-3">
        As printed on your government-issued ID, such as a driver’s license, a
        state-issued photo ID, or a passport.
      </p>
      <div className="flex flex-wrap mt-8 mb-4">
        <div class="w-full sm:w-1/3 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Country of Residency*
          </label>
          <Country
            register={register}
            errors={errors}
            className="residencyCountry"
          />
          <br />
          <span className="text-xs">What country do you live in?</span>
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("email", { required: true })}
            type="email"
          />
          {errors.email && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
          <span className="text-xs">If possible, enter company email.</span>
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Phone Number*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("phoneNumber", { required: true })}
            type="number"
          />
          {errors.phoneNumber && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section_3;
