const rewire = require("rewire");

describe("1. Employee Class", () => {
   it("`Employee` class exists", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      expect(Employee).toBeDefined();
   });
   it("Should have a constructor", () => {
      const solution = rewire("../solution");
      expect(solution.__get__("Employee").prototype.constructor).toBeDefined();
   });
   it("Should have `id` property the value of which is set by the constructor", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      const employee = new Employee(123, "Alan", "Iverson", 99090, 60000.0);
      expect(employee.id).toBe(123);
   });
   it("Should have `firstName` property the value of which is set by the constructor", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      const employee = new Employee(123, "Alan", "Iverson", 99090, 60000.0);
      expect(employee.firstName).toBe("Alan");
   });
   it("Should have `lastName` property the value of which is set by the constructor", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      const employee = new Employee(123, "Alan", "Iverson", 99090, 60000);
      expect(employee.lastName).toBe("Iverson");
   });
   it("Should have `taxId` property the value of which is set by the constructor", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      const employee = new Employee(123, "Alan", "Iverson", 99090, 60000);
      expect(employee.taxId).toBe(99090);
   });
   it("Should have `salary` property the value of which is set by the constructor", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      const employee = new Employee(123, "Alan", "Iverson", 99090, 60000);
      expect(employee.salary).toBe(60000);
   });
   it("Should have `generatePaySlip` method", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      expect(Employee.prototype.generatePaySlip).toBeDefined();
   });
   it("`generatePaySlip` method should return all employee information as string", () => {
      const solution = rewire("../solution");
      const Employee = solution.__get__("Employee");
      const employee = new Employee(123, "Alan", "Iverson", 99090, 60000);
      expect(employee.generatePaySlip()).toEqual(expect.stringMatching(/ 123/));
      expect(employee.generatePaySlip()).toEqual(
         expect.stringMatching(/Alan Iverson/i)
      );
      expect(employee.generatePaySlip()).toEqual(
         expect.stringMatching(/99090/)
      );
      expect(employee.generatePaySlip()).toEqual(expect.stringMatching(/5000/));
   });
});

describe("2. Manager Class`", () => {
   it("class `Manager` exists", () => {
      const solution = rewire("../solution");
      expect(solution.__get__("Manager")).toBeDefined();
   });
   it("should extend the `Employee` class", () => {
      const solution = rewire("../solution");
      expect(solution.__get__("Manager").prototype.__proto__).toBe(
         solution.__get__("Employee").prototype
      );
   });
   it("should have `managedEmployees` property", () => {
      const solution = rewire("../solution");
      const manager = solution.__get__("Manager");
      const managerInstance = new manager(
         154,
         "Dwight",
         "Lighthouse",
         99090,
         80000
      );
      expect(managerInstance.managedEmployees).toBeDefined();
   });
   it("Should have a `addManagedEmployee` method", () => {
      const solution = rewire("../solution");
      expect(
         solution.__get__("Manager").prototype.addManagedEmployee
      ).toBeDefined();
   });
   it("`addManagedEmployee` method should add an employee to `managedEmployees` array", async () => {
      const solution = rewire("../solution");
      const manager = solution.__get__("Manager");
      const employee = solution.__get__("Employee");
      const managerInstance = new manager(
         154,
         "Dwight",
         "Lighthouse",
         99090,
         80000
      );
      const employeeInstance = new employee(345, "John", "Doe", 99090, 62000);
      await managerInstance.addManagedEmployee(employeeInstance);
      expect(managerInstance.managedEmployees).toContain(employeeInstance);
   });
   it("Should have method `removeManagedEmployee`", () => {
      const solution = rewire("../solution");
      expect(
         solution.__get__("Manager").prototype.removeManagedEmployee
      ).toBeDefined();
   });
   it("`removeManagedEmployee` should remove an employee from `managedEmployees` array", async () => {
      const solution = rewire("../solution");
      const manager = solution.__get__("Manager");
      const employee = solution.__get__("Employee");
      const managerInstance = new manager(
         154,
         "Dwight",
         "Lighthouse",
         99090,
         80000
      );
      const employeeInstance = new employee(
         345,
         "Mike",
         "BuckWater",
         99090,
         62000
      );
      const employeeInstance1 = new employee(
         542,
         "Yee",
         "THEdevil",
         99090,
         62000
      );
      await managerInstance.addManagedEmployee(employeeInstance);
      await managerInstance.addManagedEmployee(employeeInstance1);
      await managerInstance.removeManagedEmployee(employeeInstance1);
      expect(managerInstance.managedEmployees).not.toContain(employeeInstance1);
   });
});
