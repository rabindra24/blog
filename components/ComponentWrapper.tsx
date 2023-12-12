import React from "react";

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:px-10 px-5 max-w-[900px] md:py-10 py-5   mx-auto ">
        {children}
    </div>
  );
};

export default ComponentWrapper;
