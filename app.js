console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Nichole"; 
let lastName = "McGrew";
var age = 36;

// Exercise 2
let fullName = firstName + " " + lastName; //NicholeMcGrew
console.log(fullName);

// Template strings denoted by backticks
let TemplateFullName = `${firstName} ${lastName}`; // "Nichole McGrew"
console.log(TemplateFullName);

// Exercise 3
let city = "Yukon"
let pasttime = "coding"

let myStory = "I am " + fullName + ". I live in " + city + ". I like " + pasttime + ".";
console.log(myStory);

let TemplateMyStory = `I am ${fullName}. I live in ${city}. I like ${pasttime}. `;
console.log(TemplateFullName);
console.log(TemplateMyStory);
