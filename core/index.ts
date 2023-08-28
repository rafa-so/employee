import { v4 as uuid } from 'uuid';

const employees: Array<Employee> = [
  {
    id: uuid(),
    name: "funcionario padrão",
    email: "funcionario@email.com",
    branch: "employee"
  }
]

const evaluations = []

interface Employee {
  id: string,
  name: string,
  email: string,
  branch: string
}

function import_employees(options: Array<Employee>): Array<Employee> {
  const employees_merged = employees.concat(options);
  return employees_merged;
}

const options: Array<Employee> = [
  {
    id: uuid(),
    name: "Rafael Oliveira",
    email: "rafael.oliveira@email.com",
    branch: "dev"
  },
  {
    id: uuid(),
    name: "Alberto Cunha",
    email: "alberto.cunha@email.com",
    branch: "dev"
  }
]

const employees_added = import_employees(options);
console.log(employees_added);
