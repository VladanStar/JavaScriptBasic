const people = [
    { name:"Bob", age:20, position:"developer"
    },
    { name:"Peter", age:25, position:"desinger"
    },
    { name:"Susy", age:30, position:"the boss"
    },
    {
        name: "Anna", age:35, position: "intern"
    },
    {
        name: "Vladan", age: 49, position: "developer"
    },


]

const youngPeople = people.filter((person) => {
    if(person.age <30){
        return person;
    }
})
console.log(youngPeople)

const developers = people.filter((person) => {
    if (person.position === "developer") {
        return person;
  }
})
console.log(developers);

const peter = people.filter((person) => person.name === "Peter")
console.log(peter)