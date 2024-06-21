import React from "react";

const CustomContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-10">
      <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-20 lg:pb-20"
          style={{ cursor: "auto" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export { CustomContainer };
