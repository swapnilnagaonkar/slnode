// object property shorthand
const name = 'Madhav'
const userAge = '28'

const user = {
    name,
    age : userAge,
    location : 'Mumbai'
}

console.log(user)

// Object destructuring

const product = {
    lable : 'redbook',
    sale_price : '34',
    stock : '23'
}


const {lable, stock} = product

console.log(lable)
console.log(stock)