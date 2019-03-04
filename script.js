const catArray = [
    "1.jpg", 
    "2.jpg", 
    "3.jpg", 
    "4.jpg", 
    "5.jpg", 
    "6.jpg", 
    "7.jpg", 
    "8.jpg", 
    "9.jpeg"
];

const path = "./images/";
const catDiv = document.querySelector(".cat");

function randomCat() {
    for (let i = 0; i < 8; i++) {
         random = catArray[Math.floor(Math.random() * catArray.length)];
    }

    const image = new Image();
    image.src = path + random;
    image.alt = "Developer Cat"
    catDiv.appendChild(image);
}



const phrases = [
    "JavaScript was a mistake",
    "The H in PHP stands for hated",
    "Why do light themed IDEs exist?",
    "I should write a JavaScript framework",
    "It works on my machine",
    "Web browsers are just HTML compilers",
    "I dont need to comment my code",
    
]

phraseDiv = document.querySelector(".phrase");

function randomPhrase() {
    for (let i = 0; i < 6; i++) {
        random = phrases[Math.floor(Math.random() * phrases.length)];
   }
   phraseDiv.innerHTML = "<h1>" + random + "</h1>";
}


randomCat();
randomPhrase();