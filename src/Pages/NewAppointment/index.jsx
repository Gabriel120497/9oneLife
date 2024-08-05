import React, { useContext } from "react";
import "./newAppointment.css";
import { AppointmentContext } from "../../Context";
import { DatePicker, TimePicker } from "antd";
import { useForm, Controller } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/16/solid";
import moment from "moment";

const NewAppointment = () => {
  const context = useContext(AppointmentContext);
  const appointment = context.appointment;
  console.log("context.appointment", appointment);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    context.postData({ ...values, id: appointment?.id }, "appoiments");
    reset({
      user_name: "",
      date: "",
      dr_appoiment_time: "",
      pickup_site: "",
      dropoff_site: "",
      transport_type: "",
      trip_type: "",
      payer: "",
      comments: "",
      driver: "",
      assistant: "",
      plate: "",
    });
  };

  return context.isNewAppointmentOpen ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="my-6 mx-auto max-w-3xl border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div
            className="size-8 top-0 right-0 flex justify-center items-center m-2 p-1 cursor-pointer"
            onClick={() => context.closeNewAppointment()}
          >
            <XMarkIcon />
          </div>

          <div className="formTitle">Appointment</div>
          <form className="formBox " onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3">
              <div>
                <div className="formHeader">Pacient's Name</div>
                <input
                  className="formInput"
                  {...register("user_name", {
                    required: "Pacient's Name is required",
                  })}
                  defaultValue={appointment?.user_name}
                ></input>
                <p className="text-red-400 text-xs">
                  {errors.user_name?.message}
                </p>
              </div>

              <div>
                <div className="formHeader">Date</div>
                <Controller
                  control={control}
                  rules={{ required: "Date is required" }}
                  name="date"
                  defaultValue={
                    appointment ? moment(appointment?.date, "YYYY-MM-DD") : ""
                  }
                  render={({ field }) => {
                    return (
                      <DatePicker
                        className="formInput"
                        //value={field?.value}
                        defaultValue={
                          appointment
                            ? moment(appointment?.date, "YYYY-MM-DD")
                            : ""
                        }
                        onChange={(date, dateString) =>
                          field.onChange(dateString)
                        }
                      />
                    );
                  }}
                />
                <p className="text-red-400 text-xs">{errors.date?.message}</p>
              </div>

              <div>
                <div className="formHeader">Dr. Appointment Time</div>
                <Controller
                  control={control}
                  rules={{ required: "Dr. Appointment Time is required" }}
                  name="dr_appoiment_time"
                  defaultValue={
                    appointment
                      ? moment(appointment?.dr_appoiment_time, "HH:mm")
                      : ""
                  }
                  render={({ field }) => {
                    return (
                      <TimePicker
                        className="formInput"
                        defaultValue={
                          appointment
                            ? moment(appointment?.dr_appoiment_time, "HH:mm")
                            : ""
                        }
                        format="HH:mm"
                        onChange={(time, timeString) =>
                          field.onChange(timeString)
                        }
                      />
                    );
                  }}
                />
                <p className="text-red-400 text-xs">
                  {errors.dr_appoiment_time?.message}
                </p>
              </div>

              <div>
                <div className="formHeader">Pickup Site</div>
                <input
                  className="formInput"
                  {...register("pickup_site", {
                    required: "Pickup Site is required",
                  })}
                  defaultValue={appointment?.pickup_site}
                ></input>
                <p className="text-red-400 text-xs">
                  {errors.pickup_site?.message}
                </p>
              </div>

              <div>
                <div className="formHeader">Drop-off Site</div>
                <input
                  className="formInput"
                  {...register("dropoff_site", {
                    required: "Drop-off Site is required",
                  })}
                  defaultValue={appointment?.dropoff_site}
                ></input>
                <p className="text-red-400 text-xs">
                  {errors.dropoff_site?.message}
                </p>
              </div>

              <div>
                <div className="formHeader">Trasnport Type</div>
                <input
                  className="formInput"
                  {...register("transport_type", {
                    required: "Trasnport Type is required",
                  })}
                  defaultValue={appointment?.transport_type}
                ></input>
                <p className="text-red-400 text-xs">
                  {errors.transport_type?.message}
                </p>
              </div>

              <div>
                <div className="formHeader">Trip Type</div>
                <input
                  className="formInput"
                  {...register("trip_type", {
                    required: "Trip Type is required",
                  })}
                  defaultValue={appointment?.trip_type}
                ></input>
                <p className="text-red-400 text-xs">
                  {errors.trip_type?.message}
                </p>
              </div>

              <div>
                <div className="formHeader">Payer</div>
                <input
                  className="formInput"
                  {...register("payer", { required: "Payer is required" })}
                  defaultValue={appointment?.payer}
                ></input>
                <p className="text-red-400 text-xs">{errors.payer?.message}</p>
              </div>

              <div>
                <div className="formHeader">Comments</div>
                <input
                  className="formInput"
                  {...register("comments")}
                  defaultValue={appointment?.comments}
                ></input>
              </div>
            </div>

            <div className="formTitle text-xs pt-8">Vehicle Information</div>
            <div className="grid grid-cols-3 pb-5">
              <div>
                <div className="formHeader">Driver</div>
                <input
                  className="formInput"
                  {...register("driver", { required: "Driver is required" })}
                  defaultValue={appointment?.driver}
                ></input>
                <p className="text-red-400 text-xs">{errors.driver?.message}</p>
              </div>

              <div>
                <div className="formHeader">Assistant</div>
                <input
                  className="formInput"
                  {...register("assistant", {
                    required: "Assistant is required",
                  })}
                  defaultValue={appointment?.assistant}
                ></input>
                <p className="text-red-400 text-xs">
                  {errors.assistant?.message}
                </p>
              </div>

              <div>
                <div className="formHeader">Plates</div>
                <input
                  className="formInput"
                  {...register("plate", { required: "Plates are required" })}
                  defaultValue={appointment?.plate}
                ></input>
                <p className="text-red-400 text-xs">{errors.plate?.message}</p>
              </div>
            </div>

            <button
              className="bg-blue-500 w-36 h-9 text-base text-white m-auto border-none rounded"
              type="submit"
              name="next"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
};

export { NewAppointment };
