// local reviews data
const reviews = [
    {
        id: 1,
        name: "Sarah Jones",
        job: "Web Developer",
        img: "./images/person-1.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 2,
        name: "John Smith",
        job: "Graphic Designer",
        img: "./images/download3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 3,
        name: "Jane Doe",
        job: "Product Manager",
        img: "./images/download2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 4,
        name: "Selene Brown",
        job: "Software Engineer",
        img: "./images/download 1.jpg", // Fixed file name to match actual image
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show previous person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});
