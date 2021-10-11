const findBestEmployee = function (employees) {
  const arrayOfEmploye = Object.keys(employees);
  const arrayOfSalary = Object.values(employees);
  let maxSalary = arrayOfSalary[0];
  let bestEmploye = arrayOfEmploye[0];

  for (let key in employees) {
    if (employees[key] > maxSalary) {
      maxSalary = employees[key];
      bestEmploye = key;
    }
    continue;
  }
  return bestEmploye;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
