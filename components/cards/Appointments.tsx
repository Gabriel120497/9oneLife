import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const AppointmentCard = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <p className="flex justify-between flex-col">
        <span className="text-lg font-bold">Appointment Date:</span>
        <span className="text-sm leading-6 ext-gray-600">12/11/2023</span>
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
      <div className="relative flex flex-row-reverse gap-3 items-end right-auto">
        <TrashIcon className="h-6 w-6" />
        <PencilSquareIcon className="h-6 w-6" />
      </div>
    </div>
  );
};
export { AppointmentCard };
