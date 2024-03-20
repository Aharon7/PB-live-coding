// your code goes here
// good luck!

/* 
    Aufgabe 1
*/
class Employee {
    // public properties
    id;
    firstName;
    lastName;
    taxId;
    salary;

    constructor(id, firstName, lastName, taxId, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.taxId = taxId;
        this.salary = salary;
    }


    generatePaySlip() {
        // Monatsgehalt
        const monthlySalary = this.salary / 12;

        return `Employee ID: ${this.id}
Name: ${this.firstName} ${this.lastName}
Tax ID: ${this.taxId}
Pay: ${monthlySalary.toFixed(2)}`;
    }
}


const intern = new Employee(1, 'Kaffee', 'Kocher', 123, 35000);
// console.log(intern);
// console.log(intern.generatePaySlip());


/* 
    Aufgabe 2
*/
class Manager extends Employee {
    // public properties
    managedEmployees;

    // managedEmployees sind optional -> default Parameter
    constructor(id, firstName, lastName, taxId, salary, managedEmployees = []) {
        // Aufruf constructor Elternklasse
        super(id, firstName, lastName, taxId, salary);

        // Uebernehme uebergebene Liste verwalteter Mitarbeiter
        this.managedEmployees = managedEmployees;
    }

    // Methode zum Hinzufuegen einer Mitarbeiterreferenz zum Array der verwalteten Mitarbeiter
    addManagedEmployee(employee) {
        // Wenn uebergebener Wert eine Instanz der Klasse Employee ist
        if (employee instanceof Employee) {
            // Fuege Referenz hinzu
            this.managedEmployees.push(employee);
        }
    }
/* 
    // Methode zum Entfernen von Mitarbeiterreferenzen aus dem Array der verwalteten Mitarbeiter
    removeManagedEmployee(employeeId) {
        // Wenn uebergebene ID keine Zahl ist
        if (typeof employeeId !== 'number') {
            // Funktionsabbruch (early return)
            // return;
        }

        // Finde Index der Mitarbeiterreferenz im Array der verwalteten Mitarbeiter anhand der ID
        const employeeIdx = this.managedEmployees.findIndex(employee => employee.id === employeeId);

        // Wenn gefunden
        if (employeeIdx >= 0) {
            // Entferne aus Array
            this.managedEmployees.splice(employeeIdx, 1);
        }
    }
*/

    // Andere Moeglichkeit mit Uebergabe einer ganzen Employeeinstanz
    removeManagedEmployee(employee) {
        // Wenn uebergebener employee NICHT Instanz der Klasse Employee
        if (!(employee instanceof Employee)) {
            // early return
            return;
        }

        // if (this.managedEmployees.includes(employee)) {
        //     this.managedEmployees.splice(this.managedEmployees.indexOf(employee), 1);
        // }

        // Finde Index des zu entfernenden Mitarbeiters
        const employeeIdx = this.managedEmployees.indexOf(employee);

        // Wenn gueltiger Index gefunden wurde
        if (employeeIdx !== -1) {
            // Entferne aus Array
            this.managedEmployees.splice(employeeIdx, 1);
        }
    }
}

// const superManager = new Manager(2, 'Super', 'Wichtig', 321, 100000);
// console.log(superManager);
// const megaManager = new Manager(2, 'Mega', 'Wichtig', 322, 100001, [intern]);
// console.log(megaManager);

// superManager.addManagedEmployee(intern);
// console.log(superManager);

// megaManager.removeManagedEmployee(intern.id);
// console.log(megaManager);

// megaManager.removeManagedEmployee("papperlapapp");
// console.log(megaManager);

