# Mitarbeiter / Manager

## Aufgaben

### Aufgabe 1 - Mitarbeiter-Klasse

- Erstelle eine Klasse `Employee`, die 5 Argumente akzeptiert und die folgenden Eigenschaften setzt:

  - `id`: eine Zahl, die eine eindeutige Kennung für einen Mitarbeiter darstellt
  - `firstName`: ein String für den Vornamen des Mitarbeiters
  - `lastName`: ein String für den Nachnamen des Mitarbeiters
  - `taxId`: eine Zahl, die eine eindeutige Steuerkennung darstellt
  - `salary`: eine Zahl für das **jährliche** Gehalt eines Mitarbeiters

- Die Klasse `Employee` sollte eine Methode `generatePaySlip` haben, die einen String in dem Format zurückgibt:

```
       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> muss auf Basis des Gehalts berechnet werden
```

### Aufgabe 2 - Manager Klasse

- Erstelle eine `Manager` Klasse, die die `Employee` Klasse erweitert

- Der Klasse `Manager` muss eine Array-Eigenschaft `managedEmployees` hinzugefügt werden.

- Die Klasse `Manager` benötigt zwei Methoden:
   - `addManagedEmployee`, um einen verwalteten Mitarbeiter zum Array `managedEmployees` hinzuzufügen
   - `removeManagedEmployee`, um einen verwalteten Mitarbeiter aus dem Array `managedEmployees` zu entfernen