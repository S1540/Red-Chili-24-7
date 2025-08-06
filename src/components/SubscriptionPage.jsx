import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const SubscriptionPage = () => {
  return (
    <>
      <h1 className=" bg-whit text-3xl md:text-5xl font-semibold px-6 py-7 md:py-12 chooseUs">
        <p className="text-sm font-thin text-orange-600">- Premium Plan</p>
        30% <span className="text-orange-600">Extra Discount </span>
      </h1>

      <div className=" max-w-full w-full flex justify-between  flex-wrap">
        <div className="max-w-xl py-3 ">
          <ul className="list-disc px-10 font-semibold font-[Inter] text-gray-800 leading-relaxed space-y-2  ">
            <li>
              Subscribe today and unlock exclusive benefits crafted just for
              you.
            </li>
            <li>
              Get early access to spacial deals, seasonal offers, and chef's
              recommendations.
            </li>
            <li>Be the first to know about new dishes and exciting events.</li>
            <li>
              Your favorite flavors, delivered with exclusive discount offers.
            </li>
            <li>Subscribe now to get 30% off on every order.</li>
            <li>
              Join our foodie community and make every meal more rewarding.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              totam.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              totam.
            </li>
          </ul>
        </div>

        <div className=" max-w-4xl w-full flex flex-wrap justify-between items-center ">
          <SubscriptionCard
            price={"$15"}
            trailDay={"7"}
            planName={"Standard"}
          />
          <SubscriptionCard
            price={"$35"}
            trailDay={"30"}
            planName={"Premium"}
          />
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
