import React from "react";

const Hero = () => {
  return (
    <div className="my-40 flex w-full flex-col items-center">
      <h1 className="font-paaji max-w-3xl bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mt-4 max-w-3xl text-center text-2xl leading-tight tracking-tight text-neutral-200 selection:bg-blue-300">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business{" "}
        <span className="text-secondary">like a pro</span>. Simple. Intuitive.
        And never boring.
      </p>
      <div className="mt-8 flex w-full max-w-xl justify-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="focus:ring-secondary mr-2 flex-1 rounded-xl border border-neutral-400 px-4 py-2 text-white transition duration-200 placeholder:text-neutral-200 focus:ring-1 focus:outline-none"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
