// const button = document.getElementById('btn')
// const username = document.getElementById('text')
// button.onclick = function(){
// const user = username.value;
// document.getElementById("label").innerHTML = user;
// }
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const label = document.getElementById("countLabel")

for(let count = 0; count<10; count +=1){
    console.log(count)
}
let name = "Hafiz"
function happy (){
    console.log("Happy birth day" ,name)
}
happy();
happy();
let area; 
let width ;
let height;

// width = window.prompt("enter width")
// height = window.prompt("enter height")

// function getArea(width, height){
// return width * height
// }
// area = getArea(width, height);
// console.log("your area is " , area)

let age =22;
if(age >22){
    console.log("you are older")
}
else{
    console.log("you are" , age)
}
console.log("Ternarry operator")
age = 22 ? "you are older" : "you are ", age;

 function checkAge(age){
return age = 22 ? "you are older" : "you are ", age;
}
let adult = checkAge(33);
console.log(adult)

console.log("var / let ")
let fullName ;
for(let i = 1; i<= 10; i+=1)
{
    console.log(i,)
}
myNum = 1234455,33;
myNum = myNum.toLocaleString("en-US", {style:"currency", currency: "USD"});
myNum = myNum.toLocaleString("hi-IN")
console.log(myNum)



console.log("Arrays")

let fruits = ["apple", "orange", "banana"]
let adding = fruits.push("com")
console.log(adding)
fruits.pop();
fruits.unshift("mango");
fruits.shift();
let length = fruits.length;
console.log(length)
fruits.indexOf("banana")
console.log(fruits)

console.log("loops to array")
let prices = [1,2,3,4,5,6,7,8]
for(let i=3; i<prices.length; i+=1)
{
    console.log(prices[i])
}
console.log("revers of ar")
for(let i =prices.length-1; i>=0; i--)
{
    console.log(prices[i])
}
console.log("sorting arrays")
fruits.sort()
console.log(fruits)
let revers = fruits.reverse();
console.log(revers)

console.log("2D Arrays")

let cities = ["concord", "walnutCreek", "pleasentone", "Dublin"]
let vigetables = ["carrots", "onions", "potatoes"]
let meats = ["beef", "checken", "fish"]
// if we want to collect all three arrays we use nested loops 

let groceryList = [cities, vigetables, meats]
// now if you want to change or replace any of item on the mentioned arrays
//  we have 0 1 2 colums think like this.
groceryList[2][2] = "steak";
for(let list of groceryList)
{
    for(let food of list){
        console.log(food)
    }
}
 
console.log("spread Operators")
//  it allows us to spread out elements of an array to individual elements , 
//  it's usefull for copying , combining or expanding values
const numbers = [1,2,3,4,5,6]
console.log(numbers)
// copying an array
const arry1 = [1,2,3]
const arr2 = [...arry1]
console.log(arr2)
console.log(arry1)

//  combining arrays
const array1 = [1,2,3,4]
const array2 = [22,33,44]
const arrayTotal = [...array1, ...array2]
console.log(arrayTotal)
const array3 = array1 + array2
console.log(array3)

// max numbers
let maxNumber = [22,23,24,25,33,34,31]
let maximuim = Math.max(...maxNumber)
console.log(maximuim)
// 
console.log("cobining two class")

let class1 = ["Sandy", "John", "Carlos"]
let class2 = ["Robert", "Estaban", "Jerry"]
let classes = [...class1, ...class2]
console.log(classes)
console.log("cobining two class different way")

class1.push(...class2)
console.log(...class1)



console.log("=====Rest Operators =======")
//  rest paramets : represents an indefinite number of parameters

let a =1; 
let b =2; 
let c =4;
let d =44;

console.log(sum(44,55, 4,33,111,33))

function sum(...myNumbers)
{
    let total =0 ;
    for(let num of myNumbers)
    {
        total += num
    }
    return total
}
// example sumAll rest operator 
function sumAll(...numbershere)
{
    total = 0;
    for(let item of numbershere){
        total += item
    }
    return total;
}
sumAll(22,33,443,23,42,1)
// map 
console.log("------Map----------")
// creates new array by applying function to each element of the orignal array
const allNumbers = [1,2,3,4,5]
const doubledNumbers = allNumbers.map(number => number*3)
console.log(doubledNumbers)

const fillterdouble = allNumbers.filter(item => item > 3)
console.log(fillterdouble)

console.log("=====MORE EXAMPLE =====")

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 70 },
    { name: "Charlie", score: 95 },
    { name: "David", score: 60 }
];

const scoredStudents = students.filter(student => student.score > 75).map(student => student.name)


console.log(scoredStudents)

const names = ["Alice", "Bob", "Charlie"];
const uppercase = names.map(name => name.toUpperCase() )
console.log(uppercase)


console.log("----------REDUCE METHOD---------------")
// reuces an array to a single value.
let lastPrice = [10,22,30]
let result = lastPrice.reduce( checkOut )
console.log(result)
function checkOut(total , element){
return total + element;
}

console.log("try")
const AlphaNumber = [1,2,3,4,5]


const sales = [150, 200, 75, 300, 250];
const resultSales = sales.reduce(calculateTotalSales);
console.log(resultSales)
function calculateTotalSales (total , element)
{
return total + element;
}

console.log("++++++++sorting arrays======")
let grades = [200, 100, 30, 40,20]
grades.sort((a , b) => a -b);
console.log(grades)
//  ascending order 
console.log("################ASCENDING ORDER ########################")
let ascendingSorting = grades.sort((a, b) => b -a )
console.log(ascendingSorting)

console.log("______________Arrow function_______________")
const greeting = (userName) =>{
    console.log(`hi ${userName}`)
}
greeting("Hafiz");

const percent = (x, y) => x/ y * 100;
console.log(`${percent(37, 50)}`)

console.log("nested fucntion ")
// function inside function
console.log("map get set methods")

const store = new Map([
    ["t-shirt", 20],
    ["socks", 10],
    ["pants",33]
])
store.forEach((value, key)=> console.log(`${key},${value}`))

const shoppingCart = store.get("socks");
console.log(shoppingCart)
// set : will add item 
store.set("jacket", 35)
store.forEach((value, key)=> console.log(`${key},${value}`))
// delete will delete it 
store.delete("pants")
store.forEach((value, key)=> console.log(`${key},${value}`))

// has : it will show true or false , it shows if we have an item or not
console.log(store.has("pants"));
//  size : it will show the size of our array how many items do we have 
console.log(store.size)

console.log("Objects")
// Object is collection of key value pairs.
// propterties: what an object has 
// methods : what an object can do .

const car = {
    model: 'Versa Note',
    color: "Gray",
    year: 2020,
    drive: function(){
        console.log(`you drive ${car.model}`)
    },

    brake: function(){
        console.log("Your step on the brake bro")
    }
}
console.log(car.model)
console.log(car.color)
car.drive();
// find avialable books with it's title.
const library = {
    books: [
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, available: true },
      { title: '1984', author: 'George Orwell', year: 1949, available: false },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, available: true },
      { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, available: false },
      { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, available: true },
    ]
  };

  function getAvailablebooks(library){
    const availableBooks = library.books.filter(books => books.available);
    const bookTitles  = library.books.map(books => books.title)
  return bookTitles;  
  }
  console.log(getAvailablebooks(library));


  console.log("This key word")
//    this  = refrence to a particular object but we can only use it only insde the scope

const employee = {
    name : "Ali", 
    id: 993343,
    city: "WalnutCreek",
    introduce(){
            console.log(`we want to introduce ${this.name} with ${this.id} to our boss`)

    }
}
const employee2 ={
    name: "Jamal",
    id: 4433534,
    city: "Concord",
    onLeave(){
        console.log(`${this.name} will leave with id ${this.id}`)
    }
}
employee.introduce();
employee2.onLeave();

console.log("=========CLASSEE+++++++++++")
// classes are the blue print of objects.
class Car{
    start(){
        console.log("car started on the way")
    }
    engine(){
        console.log("The car engine is working very well.")
    }
}
const car1 = new Car();
car1.start = "toyota";
console.log(car1)

console.log("constructors")

console.log("constructors are special metod to create new object")
class Honda{
    constructor(model, year, location){
        this.model = model;
        this.year = year;
        this.location = location;

    }
    note(){
        console.log(`${this.model} in ${this.location} is very new no problems.`)
    }
}
const hondaCivic = new Honda();
hondaCivic.model = "AX2"
hondaCivic.year = 2023;
hondaCivic.location = "Concord";
hondaCivic.note();
// console.log(newNote)
console.log(hondaCivic);

class Book {
    constructor(title, author, yearPublished)
    {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
    getSummary(){
        console.log(`The ${this.title} book was written by ${this.author} and published in ${this.yearPublished}.`)

    }
}
const book3 = new Book("prostyle", "Jamal", 2024); // this is another way 

console.log(book3)
const book1 = new Book();
book1.title = "programing";
book1.author= "Hafiz";
book1.yearPublished= 2025;
book1.getSummary();

// inheritence
console.log("inheritence")
// to use inheritence we have to use the word " extends " in classes.
class  Animals{
    alive = true;
   
    eat(){
        console.log(`this ${this.name} is eating`)
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }
}



class rubit extends Animals{
    name = "rubit";
    running(){
        console.log(`this ${this.name} is running`)
    }
}

class  Fish extends Animals{
    name = "fish";
  
    swim(){
        console.log(`this ${this.name} is wimming`)
    }
}
class  Birds extends Animals{

    fly(){
        console.log(`this ${this.name} is flying`)
    }
}

const rabbit = new rubit();
const fish = new Fish();
const birds = new Birds();

console.log(rabbit.alive);
rabbit.sleep();
fish.sleep();
fish.eat();

console.log("_________________get and set _________________")




console.log("_________________objects as arguments _________________")


console.log("_________________Destructuring_________________")
// extract values from arrays and objects then assign them to variables 
// [] use this braket to perform array destructuring.
// {} using this curly braket to perform object destrutring.

console.log("-------swap the values of two vaiables-------------")
let n =1;
let m =2;

[n , m] = [m , n]
console.log(n)
console.log(m)
 
// example 
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4] , colors[0]]
console.log(colors)
//  we can assign them to variables too like this

const [firstColor, secondColor, thirdColor, ...forthColor ] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(forthColor)
//examples

const person1 = {
    firstName: "Hafiz",
    lastName: "Amiri",
    job: "Sofware developer"
}
const person2={
    firstName:"Jamal",
    lastName : "marta",
}

const {firstName, lastName} = person2
console.log(lastName)

console.log("------------Events like mouse hover or clicking -----------------")

const box = document.getElementById('mybox');
box.addEventListener('click', (e) =>{
 e.target.style.backgroundColor = "brown"
box.innerHTML = "clicked me now"


})
box.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = "yellow";
    e.target.textContent = "Mouse sir"

setTimeout(() => {
    e.target.style.backgroundColor = "orange"
}, 2000);

})

console.log("------------key down key up events -----------------")

docume