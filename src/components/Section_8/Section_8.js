import React from "react";

const Section_8 = ({ register, errors }) => {
  return (
    <section id="8" className="">
      <p className="text-center text-2xl font-medium">Company Details</p>
      <p className="text-center text-sm mb-6 mt-2">
        Provide some details about the business.
      </p>
      <div className="">
        <div className="w-full">
          <p className="text-sm font-medium mb-2">Product Description*</p>
          <p className="text-xs mb-3">
            Indicate items sold, products produced, or services provided. e.g.
            Online Store, Software Company, Marketing Agency, Consulting Firm,
            Retail Business, etc. This description is sent to Internal Revenue
            Service for determination of your company’s tax compliance.
          </p>
          <input
            required
            className="mb-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="productDescription"
            {...register("productDescription", { required: true })}
            type="text"
          />
          {errors.productDescription && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
          <br />
          <span className="text-xs">
            Please describe in three words or less.
          </span>
        </div>
        <div className="w-full">
          <p className="text-sm font-medium mb-2 mt-6">Business Description*</p>
          <p className="text-xs mb-3">
            Describe your business model and list your business partners.
            Detailed information helps with bank loan approval.
          </p>
          <input
            required
            className="mb-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            {...register("businessDescription", { required: true })}
            type="text"
          />
          {errors.businessDescription && (
            <span className="text-red-600 font-medium text-sm mt-4">
              This field is required
            </span>
          )}
          <br />
          <span className="text-xs">
            Please describe using more than 50 characters.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section_8;
