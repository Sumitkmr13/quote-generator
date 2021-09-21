const quotes = [
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
    },
    {
        quote: "You can observe a lot just by watching.",
        author: "Yogi Berra"
    },
    {
        quote: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        quote: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer"
    },
    {
        quote: "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
        author: "J. Willard Marriott"
    },
    {
        quote: "I believe that we are fundamentally the same and have the same basic potential.",
        author: "Dalai Lama"
    },
    {
        quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "In separateness lies the world's great misery, in compassion lies the world's true strength.",
        author: "Buddha"
    },
    {
        quote: "Feeling and longing are the motive forces behind all human endeavor and human creations.",
        author: "Albert Einstein"
    }

];

const timeOfDay = ['Morning', 'Afternoon', 'Evening', 'Night'];
const color = ['#9C27B0', '#00BCD4', '#FF5722', '#8BC34A', '#E91E63','#ffb703','#457b9d','#343a40','#312244','#9b5de5'];

const date = new Date();
let time = date.getHours();

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const title = document.querySelector('.title');
const by= document.querySelector('.by');
const lIcon = document.querySelector('.icon'); 
const rIcon = document.querySelector('.right'); 

function changeColor(color) {
    document.body.style.background = color;
}

// quoteBtn.addEventListener('click', () => {
//     let random = Math.floor(Math.random() * quotes.length);
//     let num= Math.floor(Math.random() * color.length);
//     quote.innerHTML = quotes[random].quote;
//     author.innerHTML = quotes[random].author;
//     // quoteBtn.body.style.background=color[num];
//     changeColor(color[num]);
// })
function getQuote(){
    let random = Math.floor(Math.random() * quotes.length);
    let num= Math.floor(Math.random() * color.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
    quoteBtn.style.background=color[num];
    quote.style.color=color[num];
    author.style.color=color[num];
    by.style.color=color[num];
    lIcon.style.color=color[num];
    rIcon.style.color=color[num];
    changeColor(color[num]);
}
function displayTimeOfDay() {
    if (time > 00 && time < 12) {
        title.innerHTML = `Lets start our ${timeOfDay[0]} with a new quote`;
    } else if (time > 12 && time < 16) {
        title.innerHTML = `Lets start our ${timeOfDay[1]} with a new quote`;
    } else if (time > 16 && time < 19) {
        title.innerHTML = `Lets start our ${timeOfDay[2]} with a new quote`;
    } else {
        title.innerHTML = `Lets start our ${timeOfDay[3]} with a new quote`;
    }
}