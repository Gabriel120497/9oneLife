import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const HospitalCard = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto px-20">
          <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
            <div
              className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20"
              style={{ cursor: "auto" }}
            >
              <div className="p-4 bg-gray-100 rounded-lg w-fit">
                <p className="flex justify-between flex-col">
                  <span className="text-lg font-bold">Name:</span>
                  <span className="text-sm leading-6 ext-gray-600">
                    12/11/2023
                  </span>
                </p>
                <p className="flex justify-between flex-col">
                  <span className="text-lg font-bold ">Location:</span>
                  <span className="text-sm leading-6 text-gray-600">
                    Metus potenti velit sollicitudin porttitor magnis.
                  </span>
                </p>
                <div className="relative flex flex-row-reverse gap-3 items-end right-auto">
                  <TrashIcon className="h-6 w-6" />
                  <PencilSquareIcon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HospitalCard };
