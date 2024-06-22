import { AppointmentCard } from "@/components/cards/AppointmentsCard";
import { CustomContainer } from "@/components/CustomContainer";
import { Heading } from "@/components/Heading";

const AppointmentListPage = () => {
  return (
    <>
      <Heading as="h1" className="text-primary mb-6">
        List of Appointments
      </Heading>
      <CustomContainer>
        <AppointmentCard />
      </CustomContainer>
    </>
  );
};

export default AppointmentListPage;
