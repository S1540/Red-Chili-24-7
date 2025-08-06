import React from "react";

const SubscriptionCard = ({ price, trailDay, planName }) => {
  return (
    <>
      <div className="w-full px-4 mb-8 lg:mb-0 mx-auto max-w-[380px]">
        <div className="max-w-sm lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-gray-100 rounded-3xl">
          <div className="text-center mb-6">
            <h5 className="text-2xl font-semibold text-gray-800 mb-3">
              {planName}
            </h5>
            <span className="block text-5xl font-bold text-gray-800 mb-3">
              {price}
            </span>
            <span className="block text-gray-600 font-medium mb-6">
              per user, per month
            </span>
            <a
              href="#"
              className="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-gray-50 bg-yellow-300 font-semibold rounded-full overflow-hidden transition duration-200"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
              <span className="relative">Start {trailDay}-days Trial</span>
            </a>
          </div>
          <ul>
            <li className="flex mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-gray-800"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
              </svg>
              <span className="ml-2 text-gray-800">Unlimited Features</span>
            </li>
            <li className="flex mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-gray-800"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
              </svg>
              <span className="ml-2 text-gray-800">Enhanced Security</span>
            </li>
            <li className="flex mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-gray-800"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
              </svg>
              <span className="ml-2 text-gray-800">Priority Support</span>
            </li>
            <li className="flex mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-gray-800"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
              </svg>
              <span className="ml-2 text-gray-800">Exclusive Access</span>
            </li>
            <li className="flex mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-gray-500"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
              </svg>
              <span className="ml-2 text-gray-500 line-through">
                Ad-free Experience
              </span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-gray-800"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
              </svg>
              <span className="ml-2 text-gray-800">Customization Options</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
