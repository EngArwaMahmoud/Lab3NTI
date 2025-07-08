// let input = document.getElementById("inputField");
// let output = document.getElementById("output");

// input.addEventListener("keydown", function(event) {
//     if (event.key < '0' || event.key > '9') {
//         event.preventDefault();
//         output.textContent = "Please enter a valid number.";
//     }
//     if (event.key === 'Backspace' || event.key === 'Delete') {
//         output.textContent = "";
//     }
// });

let input = document.getElementById("inputField");
let output = document.getElementById("output");

input.addEventListener("keydown", function(event) {
    if (event.key >= '0' && event.key <= '9' || event.key === 'Backspace' || event.key === 'Delete') 
    {
        output.textContent = "";
    }
    else {
        event.preventDefault();
        output.textContent = "Please enter a valid number^ـ^";
    }
});