import React from "react";
import Country from "../Country/Country";

const Section_5 = () => {
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
          <Country />
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
            name="streetAddree"
            id="streetAddree"
            type="text"
          />
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
            id="suite"
            name="suite"
            type="text"
          />
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
            name="city"
            id="city"
            type="text"
          />
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
            name="state"
            id="state"
            type="text"
          />
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
            id="zipCode"
            name="zipCode"
            type="text"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_5;
