const people = [
    {
      name: 'bob',
      age: 20,
      position: 'developer',
    },
    {
      name: 'anna',
      age: 25,
      position: 'designer',
    },
    {
      name: 'susy',
      age: 30,
      position: 'the boss',
    },
    {
      name: 'john',
      age: 26,
      position: 'intern',
    },
  ];

const getAges =(person)=>{
  person.age*2
}
console.log(getAges)

  const ages = people.map((person)=>{
return person.age*2;
  })
  console.log(ages)