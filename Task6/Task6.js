let btn = document.getElementById('btn');
let count = 10;

// Using Promises
btn.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let cards = "";

    for (let i = 0; i < count; i++) {
        cards += 
        `<div style="margin-bottom: 15px; padding: 10px; border-radius: 8px; background-color:rgb(243, 105, 105); box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h3 style="color: green;">Post ${data[i].id}</h3>
            <p style="color: purple;"> ${data[i].title}</p>
            <p>${data[i].body}</p> </div>`
        }

    document.body.innerHTML = cards;
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
        `<div style="margin-bottom: 15px; padding: 10px; border-radius: 8px; background-color:rgb(243, 105, 105); box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h3 style="color: green;">Post ${data[i].id}</h3>
            <p style="color: purple;"> ${data[i].title}</p>
            <p>${data[i].body}</p> </div>`
        }

    document.body.innerHTML = cards;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}