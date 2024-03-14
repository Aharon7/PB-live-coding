const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
    // Erstelle Kopie des Personenobjekts
    // const personCopy = {...person};

    // Füge neue Property zur Kopie hinzu
    // personCopy.fullName = personCopy.firstName + ' ' + personCopy.lastName;

    // Gebe veränderte Kopie zurück
    // return personCopy;

    // Gebe direkt neues Objekt als Shallowcopy plus neue Property zurück
    return {
        ...person,
        fullName: person.firstName + ' ' + person.lastName
    };
};

console.log(addFullName(person));
console.log(person);
