import React, { useState } from "react";
import MyContext from "../../contexts/myContext";

const Section_9 = ({ register, formStep, errors }) => {
  const [shares, setShares] = useState(4);
  console.log("share", shares);
  const qty = 5;

  return (
    <MyContext.Provider value={qty}>
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
    </MyContext.Provider>
  );
};

export default Section_9;
