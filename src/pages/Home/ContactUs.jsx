import React from "react";
const ContactUs = () => {
  return (
    <section className="">
      <div className="my-12 md:mt-12 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-3 lg:mx-auto">
        <section className=" lg:w-[500px] text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-warning">
            Contact Us
          </h2>
          <div className=" card card-body bg-base-300 ">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="btn btn-primary">Send</button>
          </div>
        </section>
        <section className="text-center lg:mt-20">
          <div className="flex flex-wrap justify-center card card-body bg-base-100">
            <div className="grow-0 shrink-0 flex-basis w-full px-3">
              <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-5 h-5 text-white"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-warning">
                Subscribe to our newsletter
              </h2>

              <p className=" mb-12">
                We will write rarely and only high-quality content.
              </p>

              <div className="md:flex flex-row">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
