import { HospitalCard } from "@/components/cards/HospitalCard";
import { CustomContainer } from "@/components/CustomContainer";
import { Heading } from "@/components/Heading";

const HospitalListPage = () => {
  return (
    <>
      <Heading as="h1" className="text-primary mb-6">
        List of Hospitals
      </Heading>
      <CustomContainer>
        <HospitalCard />
      </CustomContainer>
    </>
  );
};

export default HospitalListPage;
