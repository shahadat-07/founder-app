import React from "react";
import Country from "../Country/Country";

const Section_7 = ({ register, errors }) => {
  return (
    <section id="7" className="">
      <p className="text-center text-2xl font-medium">
        Company Business Address
      </p>
      <p className="text-center text-sm mb-6 mt-2">
        What is the operating address of your business?
      </p>
      <div className="flex flex-wrap mt-8 mb-4">
        <div class="w-full sm:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Street Address*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyBusinessStreetAddress", { required: true })}
            type="text"
          />
          {errors.companyBusinessStreetAddress && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
          <br />
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Suite, etc.<span className="text-xs">(Optional)</span>
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyBusinessSuite", { required: true })}
            type="text"
          />
          {errors.companyBusinessSuite && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div class="w-full sm:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            City*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyBusinessCity", { required: true })}
            type="text"
          />
          {errors.companyBusinessCity && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
          <br />
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Country*
          </label>
          <Country
            register={register}
            errors={errors}
            className={"companyBusinessCountry"}
            width={"w-full"}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div class="w-full sm:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            State*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyBusinessState", { required: true })}
            type="text"
          />
          {errors.companyBusinessState && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
          <br />
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            ZIP/Postal Code*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyBusinessZipCode", { required: true })}
            type="text"
          />
          {errors.companyBusinessZipCode && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section_7;
