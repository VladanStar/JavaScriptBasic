const person = {
    name:"John",
};
console.log(person.name);
person.age=25;
{name:'John'}
console.log(person); 

const items = {
    'featured-items':['item1','item2']
}
console.log(items['featured-items']);
console.log(person['name'])
let appState = 'loading'
const app = {
    [appState]:true
}
console.log(app)