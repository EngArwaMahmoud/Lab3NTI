let btn = document.getElementById('btn');
let div = document.getElementById('div');

let count = 5;

// Using Promises
btn.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let cards = "";

    for (let i = 0; i < count; i++) {
        cards += 
        `<h3 style="color: green;">Post ${data[i].id}</h3>
            <p style="color: purple;"> ${data[i].title}</p>
            <p>${data[i].body}</p>`
        }

    div.innerHTML = cards;
})
    .catch(error => {
    console.error('Error fetching data:', error);
});
})

// Using async/await
async function fetchPosts() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        let cards = "";

        for (let i = 0; i < count; i++) {
            cards += 
            `<h3 style="color: green;">Post ${data[i].id}</h3>
                <p style="color: purple;"> ${data[i].title}</p>
                <p>${data[i].body}</p>`
        }

        div.innerHTML = cards;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}