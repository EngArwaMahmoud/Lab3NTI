let div = document.getElementById("header");
let img1 = document.createElement("img");

img1.src = "/LabSession3/Task1/images/dom.jpg";
img1.alt = "DOM Image";
img1.style.width = "150px";
img1.style.display = "block";
img1.style.margin = "0 0 auto auto";

div.appendChild(img1);

let div2 = document.getElementById("navigation");
let ul = document.getElementById("nav");
let img2 = document.createElement("img");

img2.src = "/LabSession3/Task1/images/dom.jpg";
img2.alt = "DOM Image";
img2.style.width = "150px";
img2.style.display = "block";
img2.style.margin = "0 auto 0 0";

ul.appendChild(img2);
div2.appendChild(ul);

ul.style.listStylePosition = "inside";
ul.style.listStyleType = "circle";
