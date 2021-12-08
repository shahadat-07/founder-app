import React from "react";

const Section_6 = () => {
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
        <p
          className="p-2 border-solid border-2 border-gray-300 w-full mb-3"
          name="country"
        >
          YES
        </p>
        <p
          className="p-2 border-solid border-2 border-gray-300 w-full"
          name="country"
        >
          NO
        </p>
      </div>
    </section>
  );
};

export default Section_6;
