// Part 1: Declaring and Invoking Functions
function greet(m) {
    return "Hello, " + name + "!";
}

// Invoking the greet function in the console
console.log(greet("m")); // Output: Hello, m!

// Event listener for the greet button
document.getElementById('greetButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = greet(nameInput);
    document.getElementById('result').innerText = greetingMessage;
});

// Part 2: Working with Parameters and Returning Values
function addNumbers(a, b) {
    return a + b;
}


document.getElementById('addButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = addNumbers(num1, num2);
    document.getElementById('result').innerText = "Sum: " + sum;
});

// Part 3: Function Scope
let globalVar = "function scope";

function checkScope() {
    let ";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}



// Part 4: Closure
function createCounter() {
    let count = 0; // Local variable

    return function() {
        count += 1; // Increment the count
        return count; // Return the current count
    };
}

closure
const counter = createCounter();

// Event listener for the closure button
document.getElementById('closureButton').addEventListener('click', function() {
    const currentCount = counter(); // Call the closure
    document.getElementById('closureResult').innerText = "Current Count: " + currentCount;
});
