import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <section className="h-screen flex items-center">
      <div className="card card-body bg-base-100 max-w-4xl mx-auto">
        <h2 className=" text-2xl">
          Name : <span className="text-3xl">Raihan Bin Wahid</span>
        </h2>
        <h2 className=" text-2xl">
          Email : <span className="text-3xl">dev.rbwahid@gmail.com</span>
        </h2>
        <h2 className=" text-2xl">
          Education :{" "}
          <span className="text-3xl">
            Government Sundarban Adarsha College, Khulna
          </span>
        </h2>
        <p className=" text-right mr-12 font-bold">Session - 2015-2016</p>
        <h2 className="text-2xl">Skills:</h2>
        <div className="grid  grid-cols-3 ">
          <ul className=" ml-16 list-disc">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
          <ul className=" list-disc">
            <li>React Query</li>
            <li>React Router Dom</li>
            <li>Tailwind CSS</li>
            <li>daisyUI</li>
          </ul>
          <ul className=" list-disc">
            <li>Stripe</li>
            <li>Firebase Auth</li>
            <li>JWT</li>
            <li>Postman</li>
          </ul>
        </div>
        <h2 className="text-2xl">Projects:</h2>
        <div className="ml-12 w-[700px]">
          <div className="flex justify-evenly items-center">
            <h3 className="text-xl font-semibold">
              The Treasure Chest (Book warehouse){" "}
            </h3>
            <a
              className=" text-blue-500 font-bold"
              href="https://the-treasure-chest-14e40.web.app/about"
              target={"_blank"}
              rel="noreferrer"
            >
              LIVE
            </a>

            <small className="mr-12 font-semibold">
              {" "}
              May 1 2022 - May 7 2022
            </small>
          </div>
          <ul className="ml-16 list-disc">
            <li>Implemented authentication using Firebase</li>
            <li>Verified authorization and APIs secured using JWT</li>
            <li>Handled CRUD operation with Node.js & MongoDB</li>
          </ul>
        </div>
        <div className="ml-6 w-[700px]">
          <div className="flex justify-evenly items-center">
            <h3 className="text-xl font-semibold">Crypto Portfolio Tracker</h3>

            <a
              className=" text-blue-500 font-bold"
              href="https://crypto-portfolio-tracker-7c705.web.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              LIVE
            </a>
            <small className="mr-12 font-semibold">
              February 6 2022 - May 15 2022
            </small>
          </div>
          <ul className="ml-20 pl-2 list-disc">
            <li>User can add Crypto Coin in their profile</li>
            <li>
              Tracking latest crypto coin market price using CoinGecko API
            </li>
            <li>Asset information stored in DynamoDB</li>
          </ul>
        </div>
        <div className="w-[700px]">
          <div className="flex justify-evenly items-center">
            <h3 className="text-xl font-semibold">ToDo List</h3>
            <a
              className=" text-blue-500 font-bold"
              href="https://todo-list-d6e3b.web.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              LIVE
            </a>
            <small className="mr-12 font-semibold">
              May 18 2022 - May 18 2022
            </small>
          </div>
          <ul className="ml-24 pl-4 list-disc">
            <li>User can add ToDo</li>
            <li>User can update ToDo</li>
            <li>Asset information stored in DynamoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
