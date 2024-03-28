let someStr = "Never gonna give you up, never gonna let you down.";

function reverseString(str) {
    return str.split("").reverse().join("");
};

console.log(reverseString(someStr));