import { useCallback, useContext } from "react";
import { AppointmentContext } from "../../Context";
import { AppointmentCard } from "../../Components/AppointmentCard";
import { CustomContainer } from "../../Components/CustomContainer";
import { FloatButton } from "../../Components/FloatButton";
import { NewAppointment } from "../NewAppointment";

const Appointments = () => {
  const context = useContext(AppointmentContext);
  const renderView = useCallback(() => {
    if (context.appointments.length > 0) {
      return context.appointments?.map((appointment) => (
        <AppointmentCard key={appointment.id} data={appointment} />
      ));
    } else {
      return (
        <div className="flex justify-center items-center">
          There are not matching results :'(
        </div>
      );
    }
  }, [context.appointments]);
  return (
    <>
      <CustomContainer>
        {renderView()}
        <NewAppointment />
        <FloatButton />
      </CustomContainer>
    </>
  );
};

export { Appointments };
