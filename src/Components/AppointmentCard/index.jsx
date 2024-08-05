import React, { useContext } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { AppointmentContext } from "../../Context";

const AppointmentCard = (data) => {
  const context = useContext(AppointmentContext);

  const editAppointment = (id) => {
    context.openNewAppointment(id);
  };

  console.log("data", data);
  return (
    <div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold">Appointment Date:</span>
          <span className="text-sm leading-6 ext-gray-600">
            {data.data.date}
          </span>
        </p>
        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Dr. Appointment Time:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.dr_appointment_time || data.data.dr_appoiment_time}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Type of Transport:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.transport_type}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Trip Type:</span>
          <span className="text-sm leading-6 ext-gray-600">
            {data.data.trip_type}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Pickup Site:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.pickup_site}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Drop-Off Site:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.dropoff_site}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Patient's Name:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.user_name}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Payer:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.payer}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Vehicle Plates:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.plate}
          </span>
        </p>

        <p className="flex justify-between flex-col">
          <span className="text-lg font-bold ">Comments:</span>
          <span className="text-sm leading-6 text-gray-600">
            {data.data.comments}
          </span>
        </p>

        <div className="relative flex flex-row-reverse gap-3 items-end right-auto">
          <div
            className="cursor-pointer"
            onClick={() =>
              context.deleteAppointment("appoiments", data.data.id)
            }
          >
            <TrashIcon className="h-6 w-6" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => editAppointment(data.data.id)}
          >
            <PencilSquareIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AppointmentCard };
