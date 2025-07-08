let Answer = document.getElementById("Answer");

function EnterNumber(num)
{
    Answer.value += num
}

function EnterOperator(op)
{
    Answer.value += op
}

function EnterEqual()
{
    Answer.value = eval(Answer.value);
}

function EnterClear()
{
    Answer.value = "";
}

// Calculator buttons
document.addEventListener("keydown", (event)=> {
    if (event.key >= '0' && event.key <= '9') {
        EnterNumber(event.key);

    } else if (['+', '-', '*', '/'].includes(event.key)) {
        EnterOperator(event.key);

    } else if (event.key === 'Enter') {
        EnterEqual();

    } else if (event.key === 'Escape') {
        EnterClear();
    }
})