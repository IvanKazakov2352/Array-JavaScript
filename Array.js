const persons = [
  { name: "Ivan", age: "20", bill: 10000 },
  { name: "Igor", age: "21", bill: 12000 },
  { name: "Aleksander", age: "23", bill: 13000 },
  { name: "Sergey", age: "40", bill: 14000 },
  { name: "Pavel", age: "26", bill: 15000 },
  { name: "Elena", age: "28", bill: 22000 },
  { name: "Vasilisa", age: "27", bill: 18000 },
  { name: "Irina", age: "29", bill: 11000 },
];

//For
// for(let i = 0; i < persons.length; i++) {
//     console.log(person[i])
// }


//For Of
// for (let person of persons) {
//     console.log(person)
// }


//For In
// for (let person in persons) {
//     console.log(person)
// }


//ForEach
//persons.forEach((person) => console.log(person))


//Map
// const arrayMap = persons.map((person) => {
//   return person.bill * 3 + 50;
// });
// console.log(arrayMap);


//Filter
// const arrayFilter = persons.filter(person => person.bill > 13000)
// console.log(arrayFilter)


//Reduce
// const arrayReduce = persons.reduce((total, person) => {
//     return total + person.bill
// }, 0)
// console.log(arrayReduce)


//Find
// const arrayFind = persons.find(person => person.age === "29")
// console.log(arrayFind)


//FindIndex
// const arrayFindIndex = persons.findIndex(person => person.age > "23")
// console.log(arrayFindIndex)
