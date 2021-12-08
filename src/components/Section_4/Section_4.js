import React from "react";
import { FaCircle } from "react-icons/fa";

const Section_4 = ({ register }) => {
  return (
    <section id="4" className="">
      <p className="text-center text-2xl font-medium">Select a Company Name</p>
      <p className="text-center text-sm mb-6 mt-2">
        We auto-check government{" "}
        <span className="text-red-600 font-medium">
          databases for registration of your company
        </span>
        , but cannot fully guarantee your company name will be approved by the
        State fo Delaware.
      </p>
      <div className="flex flex-wrap ">
        <div className="w-full sm:w-1/2 px-3">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Company Name*
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="companyName"
            id="companyName"
            type="text"
            ref={register()}
          />
        </div>
        <div className="w-full sm:w-1/3 px-3">
          <label
            class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Entity Ending*
          </label>
          <select
            required
            className="p-2 border-solid border-2 border-gray-300 w-80"
            name="country"
            ref={register()}
          >
            <option value="Choose State "></option>
            <option value="LLC">LLC</option>
            <option value="L.L.C.">L.L.C.</option>
            <option value="Limited Liability Company">
              Limited Liability Company
            </option>
          </select>
        </div>
      </div>
      <div>
        <p className="font-medium mt-4">Tips for Choosing a Name</p>
        <div className="mb-2">
          {" "}
          <div className="flex mt-3">
            <FaCircle size="7px" className="mt-2 mr-2" />
            <p className="font-medium text-sm">Avoid Restricted Words</p>
          </div>
          <p className="text-xs ml-3">
            Words like “Bank” or “School” are subject to approval by the state.
            Here’s a full list of{" "}
            <a href="#" className="text-red-600 font-medium hover:underline">
              restricted words.
            </a>
          </p>
        </div>
        <div className="mb-2">
          {" "}
          <div className="flex mt-3">
            <FaCircle size="7px" className="mt-2 mr-2" />
            <p className="font-medium text-sm">Use English Words</p>
          </div>
          <p className="text-xs ml-3">
            Choosing a company name in a different language can be delayed and
            even denied by the state.
          </p>
        </div>
        <div className="mb-2">
          {" "}
          <div className="flex mt-3">
            <FaCircle size="7px" className="mt-2 mr-2" />
            <p className="font-medium text-sm">
              Do not start with “A” or “An” or “The”
            </p>
          </div>
          <p className="text-xs ml-3">
            The company name should not start with an article adjective, i.e. “A
            Business, Inc.” or “The Company, LLC”.
          </p>
        </div>
        <div className="mb-2">
          {" "}
          <div className="flex mt-3">
            <FaCircle size="7px" className="mt-2 mr-2" />
            <p className="font-medium text-sm">
              Avoid using Special Characters
            </p>
          </div>
          <p className="text-xs ml-3">
            The company name should not contain special characters. It can, but
            will be subject to state approval.
          </p>
        </div>
        <div className="mb-2">
          {" "}
          <div className="flex mt-3">
            <FaCircle size="7px" className="mt-2 mr-2" />
            <p className="font-medium text-sm">Consider Case-sensitivity</p>
          </div>
          <p className="text-xs ml-3">
            Uppercase and lowercase letters are considered. If you enter,
            “BusineSs”, the state will register as : “BusineSs, LLC”.
          </p>
        </div>
        <div className="mb-2">
          {" "}
          <div className="flex mt-3">
            <FaCircle size="7px" className="mt-2 mr-2" />
            <p className="font-medium text-sm">Avoid Restricted Words</p>
          </div>
          <p className="text-xs ml-3">
            Words like “Bank” or “School” are subject to approval by the state.
            Here’s a full list of restricted words.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_4;
