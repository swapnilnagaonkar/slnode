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
    stock : '23',
    rating1 :4.5 
}


const {lable:product_lable, stock, rating=5} = product

console.log(product_lable)
console.log(stock)
console.log(rating)