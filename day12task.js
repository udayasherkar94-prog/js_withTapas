// 1. What will be the output and why?

//"use strict";
const user = { name: "Alex", age:undefined};
console.log(user.age ?? "Not provided");
//O/p: not provided

// The Nullish Coalescing Operator (??) returns the right-hand value when the left-hand value is null or undefined.



// 2. What will happen if we try to modify a frozen object?

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
//there is no error but value remain unchanged
// ❌ You cannot modify existing properties
// ❌ You cannot add new properties
// ❌ You cannot delete properties




//"use strict";
const obj1 = Object.freeze({ a: 1 });
obj1.a = 2;  
console.log(obj1.a)
// ❌ Error
// TypeError: Cannot assign to read only property 'a'



// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name:pname,company:{name,location:{city,zip}}} = person;
console.log(`person name:${pname} , company Name:${name}, City:${city} , zip:${zip}`);


// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

let StudentMS = {
   name:"Ajit",
   age:21,
   grades:[90,89,82,93,96],
   calculateGrade:function(){
    let sum = 0;

    for(let i=0;i<this.grades.length;i++){
      sum = sum +this.grades[i];
    }
    return sum/this.grades.length;
   }
}

console.log("Student Name:",StudentMS.name);
console.log("Student age:",StudentMS.age);
console.log("Student Grades:",StudentMS.grades);
console.log("Student Average Grades:",StudentMS.calculateGrade());


//  Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

// Book Store Inventory System

const bookstore = {
  books: {
    "JavaScript": 5,
    "Python": 3,
    "React": 0
  },

  // Check availability
  checkAvailability: function (bookName) {
    if (this.books[bookName] > 0) {
      console.log(bookName + " is available. Stock: " + this.books[bookName]);
    } else {
      console.log(bookName + " is out of stock.");
    }
  },


// object.property → Use when you know the property name.
// object[variable] → Use when the property name comes from a variable or is determined at runtime.

  // Restock books
  restockBook: function (bookName, quantity) {
    if (this.books[bookName]) {
      this.books[bookName] += quantity;
    } else {
      this.books[bookName] = quantity;
    }

    console.log(bookName + " restocked. New Stock: " + this.books[bookName]);
  }
};

// Check availability
bookstore.checkAvailability("JavaScript");
bookstore.checkAvailability("React");

// Restock books
bookstore.restockBook("React", 10);
bookstore.restockBook("Java", 5);

// Check again
bookstore.checkAvailability("React");
bookstore.checkAvailability("Java");

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

// Both returns an array 
// 1) Object.keys() returns an array of keys
// 1) Object.entries() returns an array of key-value pairs

// Examples
const student = {
  name: "Uday",
  age: 21,
  city: "Satara"
};

console.log(Object.keys(student));


const student1 = {
  name: "Uday",
  age: 21,
  city: "Satara"
};

console.log(Object.entries(student1));

//7. How do you check if an object has a certain property?

// Using hasOwnProperty() (most common)
const student2 = {
  name: "Uday",
  age: 21
};

console.log(student2.hasOwnProperty("name")); // true
console.log(student2.hasOwnProperty("city")); // false


// . Using the in operator

console.log("name" in student2); // true
console.log("city" in student2); // false

// 3. Using bracket notation with undefined

console.log(student2["name"] !== undefined); // true
console.log(student2["city"] !== undefined); // false




// 8. What will be the output and why?
// Objects in JavaScript are reference types.
const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name);

// 9. What’s the best way to deeply copy a nested object? Expalin with examples

// using StructuredClone creates a deep copy of the object 
// * the entire structure is duplicated including nested object and array 
// * changes to the clone object do no affects the original
// Example

let original ={
  name:"john",
  address:{
    city:"Delhi"
  }
};

const clone = structuredClone(original)
console.log(clone)
clone.address.city = "Mumbai";

console.log(original.address.city)//remains Delhi
console.log(clone.address.city)//Mumbai

// 10) Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

//using for...of loop
for (const { name, address, age } of users) {
  console.log("Name:", name);
  console.log("Address:", address);
  console.log("Age:", age);
  console.log("----------------");
}