type Employee = {
    name: string;
    age: number;
    salary: number;

}

function printEmployee(employee: Employee) {

    console.log(`Name: ${employee.name},Age: ${employee.age},Salary: ${employee.salary}`);
}

const Suraj: Employee = {
    name: "Suraj",
    age: 30,
    salary: 500
}

printEmployee(Suraj);