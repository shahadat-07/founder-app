import React from "react";

const Section_11 = ({ register, errors }) => {
  return (
    <section id="11" className="">
      <p className="text-center text-xl font-medium">
        To establish a C-Corporation, we need to know some details about the
        company managers.{" "}
      </p>
      <div className="flex flex-wrap mt-8">
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            CEO*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyCEO", { required: true })}
            type="text"
          />
          {errors.companyCEO && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            President*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyPresident", { required: true })}
            type="text"
          />
          {errors.companyPresident && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            CFO*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companyCFO", { required: true })}
            type="text"
          />
          {errors.companyCFO && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Secretary*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("companySecretary", { required: true })}
            type="text"
          />
          {errors.managerState && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div className="mt-4">
        <p className="font-medium text-xl mb-4">
          Please attach the following documents for further analysis
        </p>
        <div className="border-2 p-4 border-green-500	">
          <label className="font-medium" for="incomeStatement">
            Income statements and business balance sheets for the past 3-years
          </label>
          <input
            className="mt-2"
            type="file"
            {...register("incomeStatement", { required: true })}
          />{" "}
        </div>
        <br />
        <div className="border-2 p-4 border-green-500	">
          <label className="font-medium" for="projectedBalance">
            Projected balance sheets and income statements for 2-years
          </label>
          <input
            className="mt-2"
            type="file"
            {...register("projectedBalance", { required: true })}
          />
        </div>
        <br />
        <div className="border-2 p-4 border-green-500	">
          <label className="font-medium" for="cashFlow">
            Projected cash flow statements for at least the next 12-months
          </label>
          <input className="mt-2" type="file" id="cashFlow" name="cashFlow" />
        </div>
        <br />
        <div className="border-2 p-4 border-green-500	">
          <label className="font-medium" for="businessTax">
            Personal and business tax returns for the last 3-years
          </label>
          <input
            className="mt-2"
            type="file"
            {...register("businessTax", { required: true })}
          />
        </div>
      </div>
    </section>
  );
};

export default Section_11;
