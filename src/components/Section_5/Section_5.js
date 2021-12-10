import React from "react";
import Country from "../Country/Country";

const Section_5 = ({ register, errors }) => {
  return (
    <section id="5" className="">
      <p className="text-center text-2xl font-medium">
        Physical Operating Address
      </p>
      <p className="text-center text-sm mb-6 mt-2">
        Used for forwarding important notices and documents to your business.
      </p>
      <div className="flex flex-wrap mt-8 mb-4">
        <div class="w-full sm:w-1/3 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Country*
          </label>
          <Country
            register={register}
            errors={errors}
            width={"w-full"}
            className="physicalOperatingAddress"
          />
          <br />
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Street Address*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("streetAddrees", { required: true })}
            type="text"
          />
          {errors.streetAddrees && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Suite, etc.<span className="text-xs">(Optional)</span>
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("suite", { required: true })}
            type="text"
          />
          {errors.suite && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap mt-8 mb-4">
        <div class="w-full sm:w-1/3 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            City*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("city", { required: true })}
            type="text"
          />
          {errors.city && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
          <br />
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            State/Province*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("state", { required: true })}
            type="text"
          />
          {errors.state && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            ZIP/Postal Code*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("zipCode", { required: true })}
            type="text"
          />
          {errors.zipCode && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section_5;
