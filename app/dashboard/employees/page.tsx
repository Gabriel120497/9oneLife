import {EmployeeForm} from "@/components/forms/EmployeeForm";
import {Heading} from "@/components/Heading";

export default function EmployeePage(){
  return (
    <>
    <Heading as="h1" className="text-primary mb-6">
      Employees
    </Heading>
    <EmployeeForm />
    </>
  )
}