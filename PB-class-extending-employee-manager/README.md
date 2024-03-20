# Employee / Manager

## Tasks

### Task 1 - Employee Class

- Create an `Employee` class which accepts 5 arguments and sets the following properties:

  - `id`: a number representing a unique identifier for an employee
  - `firstName`: a string for the first name of the employee
  - `lastName`: a string for the last name of the employee
  - `taxId`: a number representing a unique tax identifier
  - `salary`: a number for the **yearly** salary of an employee

- The `Employee` class should have a `generatePaySlip` method which returns a string in the format:

```
       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> will need to be calculated based off of salary
```

### Task 2 - Manager Class

- Create a `Manager` class which extends the `Employee` class

- The `Manager` class will need the addition of a `managedEmployees` array property

- The `Manager` class will need two methods:
  - `addManagedEmployee` to add a managed employee to the `managedEmployees` array
  - `removeManagedEmployee` to remove a managed employee from the `managedEmployees` array