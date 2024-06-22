import { CustomContainer } from "@/components/CustomContainer";
import { EmployeeCard } from "@/components/cards/EmployeesCard";
import { Heading } from "@/components/Heading";

const EmployeeListPage = () => {
  return (
    <>
      <Heading as="h1" className="text-primary mb-6">
        List of Employees
      </Heading>
      <CustomContainer>
        <EmployeeCard />
      </CustomContainer>
    </>
  );
};

export default EmployeeListPage;
