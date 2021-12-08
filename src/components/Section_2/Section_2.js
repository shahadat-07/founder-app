import React from "react";
import Country from "../Country/Country";

const Section_2 = ({ register }) => {
  return (
    <section id="2" className="">
      <p>Which state do you prefer to register your business in? </p>
      <Country ref={register()} />
      <br />
      <a href="#" className="text-sm text-red-600 font-semibold	">
        Which state is right for me?
      </a>
    </section>
  );
};

export default Section_2;
