
//Reduce -objects

//cart example


const cart =[
    {
        title:'Samsung Galaxy S7',
        price:599.99,
        amount:1,
    },
    {
        title:'Samsung Galaxy S7',
        price:599.99,
        amount:1,
    },
    {
        title:'Samsung Galaxy S7',
        price:599.99,
        amount:1,
    },
    {
        title:'Samsung Galaxy S7',
        price:599.99,
        amount:1,
    },
]


let total = cart.reduce(
    (total,cartItem)=>{
        console.log(cart)
    return total;
},{
    totalItems:0,
    cartItem:0
})
const url = 'https://api.github.com/users/john-smigla/repos?per_page=100'