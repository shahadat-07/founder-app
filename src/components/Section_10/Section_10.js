import React from "react";
import { FaLock } from "react-icons/fa";
import MyContext from "../../contexts/myContext";
import Country from "../Country/Country";

const Section_10 = ({ register, errors }) => {
  return (
    <div>
      <MyContext.Consumer>
        {(value) =>
          [...Array(value)].map((elementInArray, index) => {
            return (
              <section id="10" className="">
                <p className="text-2xl text-center font-medium">
                  {" "}
                  Shareholders Details
                </p>
                <p className="text-center text-base mb-5">
                  To establish a C-Corporation, we need to know some details
                  about the owners.
                </p>
                <p className="font-medium mb-4">{`Owner#${index + 1}`}</p>
                <div className="flex text-sm">
                  <FaLock className="mt-1" />
                  <p className="ml-2">
                    We protect your personal information. Learn more about our
                    privacy policy
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
                      {...register("Owner1firstName", { required: true })}
                      type="text"
                    />
                    {errors.Owner1firstName && (
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
                      {...register("Owner1middleName")}
                      type="text"
                    />
                    {errors.Owner1middleName && (
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
                      Last Name*
                    </label>
                    <input
                      required
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                      {...register("Owner1lastName", { required: true })}
                      type="text"
                    />
                    {errors.Owner1lastName && (
                      <span className="text-red-600 font-medium text-sm mt-4">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs ml-3">
                  As printed on your government-issued ID, such as a driver’s
                  license, a state-issued photo ID, or a passport.
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
                      className="Owner1Country"
                      width={"w-full"}
                    />
                    <br />
                    <span className="text-xs">
                      What country do you live in?
                    </span>
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
                      {...register("Owner1Email", { required: true })}
                      type="email"
                    />
                    {errors.Owner1Email && (
                      <span className="text-red-600 font-medium text-sm mt-4">
                        This field is required
                      </span>
                    )}
                    <span className="text-xs">
                      If possible, enter company email.
                    </span>
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
                      {...register("Owner1PhoneNumber", { required: true })}
                      type="number"
                    />
                    {errors.Owner1PhoneNumber && (
                      <span className="text-red-600 font-medium text-sm mt-4">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="font-medium">
                    Is Shareholder 18 years old or over?{" "}
                  </p>
                  <select
                    required
                    className="p-2 border-solid border-2 border-gray-300 w-full"
                    {...register("shareholderAgeIs18")}
                  >
                    <option value="Select Here">Select Here</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
              </section>
            );
          })
        }
      </MyContext.Consumer>
    </div>
  );
};

export default Section_10;
