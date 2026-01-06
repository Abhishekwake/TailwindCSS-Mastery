import React from "react";

const responsive = () => {
  // return <div className="text-4xl lg:text-6xl xl:text-9xl">Responsive</div>;
  return (
    <div className="paaji:flex-row sakshi:bg-red-500 flex flex-col gap-5">
      <div className="h-40 w-40 rounded-2xl bg-neutral-400"></div>
      <div className="h-40 w-40 rounded-2xl bg-neutral-400"></div>
      <div className="h-40 w-40 rounded-2xl bg-neutral-400"></div>
    </div>
  );
};

export default responsive;
