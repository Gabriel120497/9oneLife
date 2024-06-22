import React from "react";

const AppointmentCard = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto px-20">
          <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
            <div
              className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20"
              style={{ cursor: "auto" }}
            >
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="flex justify-between flex-col">
                  <span className="text-lg font-bold">Appointment Date:</span>
                  <span className="text-sm leading-6 ext-gray-600">
                    12/11/2023
                  </span>
                </p>
                <p className="flex justify-between flex-col">
                  <span className="text-lg font-bold ">Type of Contract:</span>
                  <span className="text-sm leading-6 text-gray-600">
                    Metus potenti velit sollicitudin porttitor magnis.
                  </span>
                </p>

                <p className="flex justify-between flex-col">
                  <span className="text-lg font-bold ">Type of Contract:</span>
                  <span className="text-sm leading-6 text-gray-600">
                    Metus potenti velit sollicitudin porttitor magnis.
                  </span>
                </p>

                <p className="flex justify-between flex-col">
                  <span className="text-lg font-bold ">Pick up Time:</span>
                  <span className="text-sm leading-6 ext-gray-600">12:11</span>
                </p>

                <p className="flex justify-between flex-col">
                  <span className="text-lg font-bold ">Type of Contract:</span>
                  <span className="text-sm leading-6 text-gray-600">
                    Metus potenti velit sollicitudin porttitor magnis.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AppointmentCard };
