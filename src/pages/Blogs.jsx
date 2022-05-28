import React from "react";
import searchByName from "../assets/images/productSearchByName.png";

const Blogs = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 px-12 py-12">
      <div>
        <div className="mb-12">
          <h2 className="text-2xl text-warning">
            How will you improve the performance of a React Application?
          </h2>
          <p className=" pl-6 w-2/3">
            React is a JavaScript library for building user interfaces.
            Optimizing performance is an important technique to consider before
            shipping a React application.
            <h4 className="text-xl my-3 font-semibold">
              To improve the performance of React app:
            </h4>
            <ul className="list-disc	pl-6">
              <li>Avoid inline functions as much as possible</li>
              <li> Immutability is the key to avoid unnecessary re-renders.</li>
              <li>
                Always render hidden components like Modals and Dropdown
                conditionally.
              </li>
              <li>Call multiple APIs parallelly</li>
            </ul>
          </p>
        </div>
        <div className="my-12">
          <h2 className="text-2xl text-warning">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <h4 className="pl-6 text-xl my-3 font-semibold">
            Four main types of state to manage React apps:
          </h4>
          <ul className="list-disc	pl-12">
            <li>
              <span className="font-semibold text-base">Local state –</span>{" "}
              Local state is data we manage in one or another component.
            </li>
            <li>
              <span className="font-semibold text-base">Global state –</span>{" "}
              Global state is data we manage across multiple components.
            </li>
            <li>
              <span className="font-semibold text-base">Server state –</span>{" "}
              Data that comes from an external server that must be integrated
              with our UI state.
            </li>
            <li>
              <span className="font-semibold text-base">URL state –</span> Data
              that exists on our URLs, including the pathname and query
              parameters.
            </li>
          </ul>
        </div>
        <div className="my-12">
          <h2 className="text-2xl text-warning">
            What is a unit test? Why should write unit tests?
          </h2>{" "}
          <p className=" w-2/3">
            Unit test is a type of software testing where individual units or
            components are tested. Its purpose is to validate that each unit of
            code performs as expected.
            <h4 className="pl-6 text-xl my-3 font-semibold">
              Benefits to writing unit tests:
            </h4>
            <ul className="list-disc	pl-12">
              <li>Unit tests save time and money.</li>
              <li>Well-written unit tests act as documentation.</li>
              <li>It simplifies the debugging process.</li>
              <li>Unit tests make code reuse easier.</li>
              <li>unit tests are faster than integration and end-to-end. </li>
            </ul>
          </p>
        </div>
        <div className="my-12">
          <h2 className="text-2xl text-warning">
            Why we should never update React State directly in React?
          </h2>{" "}
          <p className=" indent-8 w-2/3 text-justify pl-6">
            When we update the state of a component all it's children are going
            to be rendered. when a component is rendered we basically get a
            react element, so that is updating our virtual dom and it also has a
            copy of the old virtual DOM. React will figure out what is changed
            and based on that it will update the real DOM accordingly. If we
            update React State directly, we will lose control of the state
            across all components.
          </p>
        </div>
        <div className="my-12 w-[75%]">
          <h2 className="text-2xl text-warning">
            We have an array of products. Each product has a name, price,
            description, etc. How will we implement a search to find products by
            name?
          </h2>{" "}
          <p className=" indent-8 ">
            We can do it easily by implementing JavaScript find arrow function.
            <img src={searchByName} className="w-2/3" alt="" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
