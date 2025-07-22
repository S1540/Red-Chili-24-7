import React from "react";

const Main = () => {
  return (
    <>
      <main className="max-w-full h-auto px-5 py-5 md:px-20 md:py-10">
        <div className="max-w-md h-full text-white space-y-4 ">
          <p className="text-4xl md:text-5xl font-semibold leading-14">
            <span className="text-green-600">Welcome</span> To{" "}
            <span className="text-red-600 ">Red Chili</span> - Your Perfect Bite
            <span className="text-yellow-400"> Await</span> 🤷‍♂️
          </p>

          <p>
            Every dish has a soul — and every bite tells a story. At Red Chili,
            we turn meals into memories. Spice, warmth, comfort — all served
            fresh, just for you. Your seat is ready. Let’s make it delicious.
          </p>
        </div>
      </main>
    </>
  );
};

export default Main;
