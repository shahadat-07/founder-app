import React from "react";
import Country from "../Country/Country";

const Section_2 = ({ register, errors }) => {
  return (
    <section>
      <p className="mb-4">
        Which state do you prefer to register your business in?{" "}
      </p>
      <Country
        register={register}
        errors={errors}
        width={"w-full"}
        className="businessState"
      />
      <br />
      <a href="#" className="text-sm text-red-600 font-semibold">
        Which state is right for me?
      </a>
    </section>
  );
};

export default Section_2;
