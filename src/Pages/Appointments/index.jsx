import React from "react";
import { Layout } from "../../Components/Layout";
import { AppointmentCard } from "../../Components/AppointmentCard";
import { CustomContainer } from "../../Components/CustomContainer";
import { FloatButton } from "../../Components/FloatButton";

const Appointments = () => {
  return (
    <>
      <CustomContainer>
        <AppointmentCard />
        <FloatButton />
      </CustomContainer>
    </>
  );
};

export { Appointments };
