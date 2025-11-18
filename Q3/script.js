
let name = "Sumalatha";      
let age = 21;               
let isStudent = true;         
let marks = [90, 85, 78];    
let person = {               
    firstName: "Sumalatha",
    lastName: "Dunna",
    course: "Web Development"
};
let notDefined;               
let emptyValue = null;        

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Marks:", marks);
console.log("Person Object:", person);
console.log("Undefined:", notDefined);
console.log("Null:", emptyValue);


if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


console.log("Marks List:");
for (let i = 0; i < marks.length; i++) {
    console.log("Subject", i + 1, "Marks:", marks[i]);
}


let grade = "a";

switch (grade) {
    case "A":
        console.log("Excellent! You got grade A.");
        break;
    case "B":
        console.log("Well done! You got grade B.");
        break;
    case "C":
        console.log("Good job! You got grade C.");
        break;
    default:
        console.log("Invalid grade.");
}
