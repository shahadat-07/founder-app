import React from "react";

const Section_6 = ({ register }) => {
  return (
    <section id="6" className="">
      <p className="text-center text-xl font-medium">
        Are you interested in using the provided U.S. business address?
      </p>
      <p className="text-center text-sm mb-6 mt-2">
        We work with a registered agent to provide all customers a U.S. business
        address. If you prefer to use a different address or already have a U.S.
        business address, select “No”
      </p>
      <div>
        <select
          required
          className="p-2 border-solid border-2 border-gray-300 w-full"
          {...register("interestedInProvidedAddress")}
        >
          <option value="Select Here">Select Here</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </div>
    </section>
  );
};

export default Section_6;
