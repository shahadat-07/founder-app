import React, { useState } from "react";
import OwnerDetails from "../Section_10/Section_10";
const Section_9 = ({ register, formStep, errors }) => {
  const [shares, setShares] = useState(1);

  return (
    <>
      <section id="9" className="">
        <p className="text-center text-xl font-medium">
          The maximum number of shares a company is allowed to issue.
        </p>
        <p className="text-center text-sm mb-6 mt-2">
          Authorize Default Number of Shares
        </p>
        <div>
          <label className="font-medium">Amount of Shares*</label>
          <select
            className="p-1 mt-2 rounded-md border-solid border-2 border-gray-300 w-full"
            {...register("amountOfShares", { required: true })}
            onChange={(e) => setShares(e.target.value)}
          >
            <option defaultValue value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </section>
      <OwnerDetails register={register} errors={errors} shares={shares} />
      <div>
        <p className="font-medium">Is Shareholder 18 years old or over? </p>
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
    </>
  );
};

export default Section_9;
