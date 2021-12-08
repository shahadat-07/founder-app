import React from "react";
import { FaCircle, FaLock } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Country from "../Country/Country";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-40">
        <img src={Logo} alt="" />
      </div>
      <div className="max-w-3xl w-full mt-10 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form>
            <section id="1" className="text-gray-600 ">
              <p>
                Welcome to Fuller Landau, an independent audit firm providing
                audit, tax, and advisory services. Our mission is to provide
                every business client auditing, accounting and consultancy
                solutions they can trust. Our team of experts pays attention to
                the finer details and adopts an “out-of-the-box” approach to
                provide client brand incredible value. To walk-the-talk, our
                partners mandate us with the expression opinion on 5 most
                fundamental aspects, which include:
              </p>
              <p className="mt-3">⦁ Borrower’s Credit history</p>
              <p>
                ⦁ Borrower’s Cash flow history and projections for the business
              </p>
              <p>
                ⦁ Collateral available to secure the loan (ONLY applicable for
                secured loans)
              </p>
              <p>⦁ Borrower’s Character</p>
              <p className="text-sm mt-4">
                By filling the form that follows, you agree to our terms and
                condition.
              </p>
            </section>
            <section id="2" className="">
              <p>Which state do you prefer to register your business in? </p>
              <Country />
              <br />
              <a href="#" className="text-sm text-red-600 font-semibold	">
                Which state is right for me?
              </a>
            </section>
            <section id="3" className="">
              <p className="text-2xl text-center">Personal Information</p>
              <p className="text-center text-base mb-5">
                We need your information to create{" "}
                <span className="text-red-600 font-medium">
                  your company file for Audit
                </span>
              </p>
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
                    name="firstName"
                    id="firstName"
                    type="text"
                  />
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
                    name="middleName"
                    id="middleName"
                    type="text"
                  />
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
                    id="lastName"
                    name="lastName"
                    type="text"
                  />
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
                  <Country />
                  <br />
                  <span className="text-xs">What country do you live in?</span>
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
                    name="email"
                    id="email"
                    type="email"
                  />
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
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                  />
                </div>
              </div>
            </section>
            <section id="4" className="">
              <p className="text-center text-2xl font-medium">
                Select a Company Name
              </p>
              <p className="text-center text-sm mb-6 mt-2">
                We auto-check government{" "}
                <span className="text-red-600 font-medium">
                  databases for registration of your company
                </span>
                , but cannot fully guarantee your company name will be approved
                by the State fo Delaware.
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
                    <p className="font-medium text-sm">
                      Avoid Restricted Words
                    </p>
                  </div>
                  <p className="text-xs ml-3">
                    Words like “Bank” or “School” are subject to approval by the
                    state. Here’s a full list of{" "}
                    <a
                      href="#"
                      className="text-red-600 font-medium hover:underline"
                    >
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
                    Choosing a company name in a different language can be
                    delayed and even denied by the state.
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
                    The company name should not start with an article adjective,
                    i.e. “A Business, Inc.” or “The Company, LLC”.
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
                    The company name should not contain special characters. It
                    can, but will be subject to state approval.
                  </p>
                </div>
                <div className="mb-2">
                  {" "}
                  <div className="flex mt-3">
                    <FaCircle size="7px" className="mt-2 mr-2" />
                    <p className="font-medium text-sm">
                      Consider Case-sensitivity
                    </p>
                  </div>
                  <p className="text-xs ml-3">
                    Uppercase and lowercase letters are considered. If you
                    enter, “BusineSs”, the state will register as : “BusineSs,
                    LLC”.
                  </p>
                </div>
                <div className="mb-2">
                  {" "}
                  <div className="flex mt-3">
                    <FaCircle size="7px" className="mt-2 mr-2" />
                    <p className="font-medium text-sm">
                      Avoid Restricted Words
                    </p>
                  </div>
                  <p className="text-xs ml-3">
                    Words like “Bank” or “School” are subject to approval by the
                    state. Here’s a full list of restricted words.
                  </p>
                </div>
              </div>
            </section>
            <section id="5" className="">
              <p className="text-center text-2xl font-medium">
                Physical Operating Address
              </p>
              <p className="text-center text-sm mb-6 mt-2">
                Used for forwarding important notices and documents to your
                business.
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
            <section id="6" className="">
              <p className="text-center text-xl font-medium">
                Are you interested in using the provided U.S. business address?
              </p>
              <p className="text-center text-sm mb-6 mt-2">
                We work with a registered agent to provide all customers a U.S.
                business address. If you prefer to use a different address or
                already have a U.S. business address, select “No”
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
            <section id="7" className="">
              <p className="text-center text-2xl font-medium">
                Company Business Address
              </p>
              <p className="text-center text-sm mb-6 mt-2">
                What is the operating address of your business?
              </p>
              <div className="flex flex-wrap mt-8 mb-4">
                <div class="w-full sm:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Street Address*
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="streetAddrees"
                    id="streetAddrees"
                    type="text"
                  />
                  <br />
                </div>
                <div className="w-full sm:w-1/2 px-3">
                  <label
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Suite, etc.<span className="text-xs">(Optional)</span>
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="streetAddree"
                    id="streetAddree"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div class="w-full sm:w-1/2 px-3">
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
                <div className="w-full sm:w-1/2 px-3">
                  <label
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    County*
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="country"
                    id="country"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div class="w-full sm:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    State*
                  </label>
                  <Country />
                  <br />
                </div>
                <div className="w-full sm:w-1/2 px-3">
                  <label
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    ZIP/Postal Code*
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="zipCode"
                    id="zipCode"
                    type="text"
                  />
                </div>
              </div>
            </section>
            <section id="8" className="">
              <p className="text-center text-2xl font-medium">
                Company Details
              </p>
              <p className="text-center text-sm mb-6 mt-2">
                Provide some details about the business.
              </p>
              <div className="">
                <div className="w-full">
                  <p className="text-sm font-medium mb-2">
                    Product Description*
                  </p>
                  <p className="text-xs mb-3">
                    Indicate items sold, products produced, or services
                    provided. e.g. Online Store, Software Company, Marketing
                    Agency, Consulting Firm, Retail Business, etc. This
                    description is sent to Internal Revenue Service for
                    determination of your company’s tax compliance.
                  </p>
                  <input
                    required
                    className="mb-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="productDescription"
                    id="productDescription"
                    type="text"
                  />
                  <span className="text-xs">
                    Please describe in three words or less.
                  </span>
                </div>
                <div className="w-full">
                  <p className="text-sm font-medium mb-2 mt-6">
                    Business Description*
                  </p>
                  <p className="text-xs mb-3">
                    Describe your business model and list your business
                    partners. Detailed information helps with bank loan
                    approval.
                  </p>
                  <input
                    required
                    className="mb-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="productDescription"
                    id="productDescription"
                    type="text"
                  />
                  <span className="text-xs">
                    Please describe using more than 50 characters.
                  </span>
                </div>
              </div>
            </section>
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
                  name="country"
                >
                  <option defaultValue value="0">
                    0
                  </option>
                  <option value="1">1</option>
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
            <section id="10" className="">
              <p className="text-2xl text-center font-medium">
                {" "}
                Shareholders Details
              </p>
              <p className="text-center text-base mb-5">
                To establish a C-Corporation, we need to know some details about
                the owners.
              </p>
              <p className="font-medium mb-4">Owner#1</p>
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
                    name="firstName"
                    id="firstName"
                    type="text"
                  />
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
                    name="middleName"
                    id="middleName"
                    type="text"
                  />
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
                    id="lastName"
                    name="lastName"
                    type="text"
                  />
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
                  <Country />
                  <br />
                  <span className="text-xs">What country do you live in?</span>
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
                    name="email"
                    id="email"
                    type="email"
                  />
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
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <p className="font-medium">
                  Is Shareholder 18 years old or over?{" "}
                </p>
                <label class="container">
                  <input
                    className="mr-2"
                    type="radio"
                    checked="checked"
                    name="radio"
                  />
                  Yes
                  <span class="checkmark"></span>
                </label>{" "}
                <br />
                <label class="container">
                  <input className="mr-2" type="radio" name="radio" />
                  No
                  <span class="checkmark"></span>
                </label>
              </div>
            </section>
            <section id="11">
              <p className="text-center text-xl font-medium">
                To establish a C-Corporation, we need to know some details about
                the company managers.{" "}
              </p>
              <div className="flex flex-wrap mt-8">
                <div className="w-full sm:w-1/2 px-3">
                  <label
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    CEO*
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="ceo"
                    id="ceo"
                    type="text"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-3">
                  <label
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    President*
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="president"
                    id="president"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mt-4">
                <div className="w-full sm:w-1/2 px-3">
                  <label
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    CFO*
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    name="cfo"
                    id="cfo"
                    type="text"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-3">
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
              </div>
              <div className="mt-4">
                <p className="font-medium text-xl mb-4">
                  Please attach the following documents for further analysis
                </p>
                <div className="border-2 p-4 border-green-500	">
                  <label className="font-medium" for="incomeStatement">
                    Income statements and business balance sheets for the past
                    3-years
                  </label>
                  <input
                    className="mt-2"
                    type="file"
                    id="incomeStatement"
                    name="incomeStatement"
                  />{" "}
                </div>
                <br />
                <div className="border-2 p-4 border-green-500	">
                  <label className="font-medium" for="projectedBalance">
                    Projected balance sheets and income statements for 2-years
                  </label>
                  <input
                    className="mt-2"
                    type="file"
                    id="projectedBalance"
                    name="projectedBalance"
                  />
                </div>
                <br />
                <div className="border-2 p-4 border-green-500	">
                  <label className="font-medium" for="cashFlow">
                    Projected cash flow statements for at least the next
                    12-months
                  </label>
                  <input
                    className="mt-2"
                    type="file"
                    id="cashFlow"
                    name="cashFlow"
                  />
                </div>
                <br />
                <div className="border-2 p-4 border-green-500	">
                  <label className="font-medium" for="businessTax">
                    Personal and business tax returns for the last 3-years
                  </label>
                  <input
                    className="mt-2"
                    type="file"
                    id="businessTax"
                    name="businessTax"
                  />
                </div>
              </div>
            </section>
            <button
              type="submit"
              className="mt-6 bg-green-600 text-white rounded px-6 py-3 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
