const countTotalSalary = function (employees) {
  const arrayOfSalary = Object.values(employees);
  // console.log(arrayOfSalary);
  // return arrayOfSalary.reduce((acc, salary) => {
  //   return (acc += salary);
  // }, 0);
  let totalSalary = 0;
  for (let salary of arrayOfSalary) {
    totalSalary += salary;
  }
  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
