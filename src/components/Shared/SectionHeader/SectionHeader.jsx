import React from "react";
const SectionHeader = () => {
  return (
    <div className="text-center w-3/5 mx-auto my-16">
      <div className="flex justify-center items-center gap-2">
        <div className="h-0.5 w-24 bg-pri rounded-xl"></div>
        <h5 className="text-sm text-sec">CATEGORIES</h5>

        <div className="h-0.5 w-24 bg-pri"></div>
      </div>

      <h2 className="text-4xl text-slate-950 font-nunito">Shop By Category</h2>
    </div>
  );
};

export default SectionHeader;
