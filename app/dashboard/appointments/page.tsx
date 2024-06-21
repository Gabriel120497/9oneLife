import { AppointmentCard } from "@/components/cards/Appointments";
import { CustomContainer } from "@/components/CustomContainer";
import { Heading } from "@/components/Heading";

const AppointmentPage = () => {
  return (
    <>
      <Heading as="h1" className="text-primary mb-6">
        Appointments
      </Heading>
      <CustomContainer>
        <AppointmentCard />
      </CustomContainer>
    </>
  );
};

export default AppointmentPage;
