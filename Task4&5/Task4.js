// document.addEventListener("keydown", function(event) 
// {
//     let pressedalt = event.altKey;
//     let pressedctrl = event.ctrlKey;
//     let pressedshift = event.shiftKey;

//     let msg = ("Pressed Key : " + event.key + " Code is : " + event.key.charCodeAt(0));

//     if (event.key >= 'a' && event.key <= 'z' || event.key >= 'A' && event.key <= 'Z')
//     {
//         alert(msg);
//     }

//     else if (event.key >= '0' && event.key <= '9') {
//         alert(msg);

//     } else if (['+', '-', '*', '/'].includes(event.key)) {
//         alert(msg);

//     } else if (event.key === 'Enter') {
//         alert(msg);

//     } else if (event.key === 'Escape') {
//         alert(msg);
//     }
// })

// Way 2

// document.addEventListener("keydown", function(event) {

//     alert("Key: " + event.key + " | ASCII Code: " + event.key.charCodeAt(0));

//     if (event.altKey) {
//         alert("Alt key is pressed");
//     }
//     if (event.ctrlKey) {
//         alert("Ctrl key is pressed");
//     }
//     if (event.shiftKey) {
//         alert("Shift key is pressed");
//     }
// });

// Way 3
document.addEventListener("keydown", function(event) 
{
    let pressedalt = event.altKey;
    let pressedctrl = event.ctrlKey;
    let pressedshift = event.shiftKey;

    let msg = ("Pressed Key : " + event.key + " Code is : " + event.key.charCodeAt(0));

    if (pressedalt || pressedctrl || pressedshift) {
        msg += " with modifiers: ";

        if (pressedalt) msg += "Alt ";
        if (pressedctrl) msg += "Ctrl ";
        if (pressedshift) msg += "Shift ";
    }
    alert(msg);
})
