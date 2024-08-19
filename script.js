window.onload = function() 
{
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";
};
let name = "John";
const age = 30;
document.getElementById("output").innerHTML = `Nama: ${name}, Umur: ${age}<br>`;

let fruits = ["apple" , "Banana" , "Manggo"];
for (let i = 0; i < fruits.length; i++) {
    document.getElementById("output").innerHTML += `${fruits[i]}<br>`;
}

let person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 30 
};
document.getElementById("output").innerHTML += `Nama Lengkap: ${person.firstName} ${person.lastName}`+ "<br>";

function checkValue() {
    let value = document.getElementById("userInput").value;
    let output = document.getElementById("output");

    output.innerHTML = "";

    if (value > 10) {
        output.innerHTML = "Nilai lebih besar dari 10.<br>";
    } else if (value == 10) {
        output.innerHTML = "Nilai sama dengan 10.<br>";
    } else if (value == 0) {
        output.innerHTML = "Nilsi sama dengan Nol.<br>";
    } 
    else {
        output.innerHTML = "Nilai kurang dari 10.<br>";
    }

    for (let i = 1; i <= value; i++) {
        output.innerHTML += i + "<br>";
    }
}

function greet(name){
    return `Hello ${name}`;
}
document.getElementById("output").innerHTML += greet("Alice") + "<br>";
document.getElementById("output").innerHTML += greet("Bob") + "<br>";

function calculateSquare(number){
    return number * number;
}

document.getElementById("output").innerHTML += "Kuadrat dari 2: " + calculateSquare(2) + "<br>";
document.getElementById("output").innerHTML += "Kuadrat dari 4: " + calculateSquare(4) + "<br>";

let a = 3;
let b = 7;
let sum = a + b; 
document.getElementById("output").innerHTML += "Hasil penjumlahan 3 + 7: " + sum + "<br>"

let students = ["Alice", "Bob", "Charlie"];
students.push("Fajar");

students.forEach(student => {
    document.getElementById("output").innerHTML += student + "<br>";
});

let car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (let key in car) {
    document.getElementById("output").innerHTML += `${key}: ${car[key]}<br>`;
}
let cars = [
    { brand: "Honda", model: "Civic", year: 2018 },
    { brand: "Ford", model: "Focus", year: 2019 },
    { brand: "BMW", model: "X3", year: 2021 },
];
cars.forEach(cars => {document.getElementById("output").innerHTML += " Brand " + cars.brand + " model " + cars.model+ " year " + cars.year + "<br>"});