const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

const finishTask = (tasks) => {
    // Erstelle Kopie der übergebenen Aufgabenliste
    const tasksCopy = [...tasks];

    // Entferne letztes Element aus der Kopie
    tasksCopy.pop();

    // Gebe veränderte Kopie zurück
    return tasksCopy;


    // Gebe verkürzte Shallowcopy zurück
    return tasks.slice(0, tasks.length-1);
};

console.log(finishTask(tasks));
console.log(tasks);
