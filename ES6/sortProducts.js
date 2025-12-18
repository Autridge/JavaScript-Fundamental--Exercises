// Sort products
// You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order. 

let goods = [
    {product: "Shoes", price: 5.99},
    {product: "Shirts", price: 12.00},
    {product: "Trousers", price: 15.50},
    {product: "Caps", price: 3.50},
    {product: "Belt", price: 1.99}
]

function sortProducts(arr) {
    return arr.sort((a,b) => a.price - b.price);
}

console.log(sortProducts(goods));