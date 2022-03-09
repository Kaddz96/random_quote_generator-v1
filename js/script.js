/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
 * An array of 5 quote objects
***/

let quotes = [
  {
    quote: 'I am Iron Man',
    source: 'Tony Stark',
    citation: 'Favreau, J. (2008). Iron Man. Paramount Pictures.',
    year: 2008,
    tags: 'Hero, Rich, Pride'
  },
  {
    quote: 'I am inevitable',
    source: 'Thanos',
    citation: 'Russo, A., & Russo, J. (2019). Avengers: Endgame. Walt Disney Studios.',
    year: 2019,
    tags: 'Villian, Alien, Powerful'
  },
  {
    quote: "He may have been your father, boy, but he wasn’t your daddy",
    source: 'Yondu',
    citation: 'Gunn, J. (2017). Guardians of the Galaxy Vol. 2. Walt Disney Studios.',
    year: 2017,
    tags: 'Father, Family, Son'
  },
  {
    quote: 'I love you 3000',
    source: 'Morgan Stark',
    citation: 'Russo, A., & Russo, J. (2019). Avengers: Endgame. Walt Disney Studios.',
    year: 2019,
    tags: 'Love, Daughter, Hope'
  },
  {
    quote: 'Avengers, assemble!',
    source: 'Steve Rogers',
    citation: 'Russo, A., & Russo, J. (2019). Avengers: Endgame. Walt Disney Studios.',
    year: 2019,
    tags: 'Team, Heroes, Leader'
  }
];

/***
 * `getRandomQuote` function
 * @return {object} random quote object from quotes array
***/
function getRandomQuote(quotesarr) {
  let randomNumber = Math.floor(Math.random() * quotesarr.length);
  return quotesarr[randomNumber];
}

/***
 * `colorRandom` function
 * @param {randomRGB} creates html string which contains a random rgb color
***/
const colorRandom = function() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
}

/***
 * `printQuote` function
 * @return {string} Displays quote from quotes array into the html body
***/

function printQuote() {
  randomQuote = getRandomQuote(quotes);
  colorRandom();
  let html = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}
  `;
  if (randomQuote.citation){
    html += `<span class="citation"> ${randomQuote.citation} </span>`
  } 
  if (randomQuote.year){
    html += `<span class="year"> ${randomQuote.year} </span>`
  } 
  if (randomQuote.tags){
    html += `<span class="tags"> ${randomQuote.tags} </span>`
  }
  html += `</p>`;
  document.body.style.backgroundColor = randomRGB;

  return document.getElementById('quote-box').innerHTML = html; 
}

document.getElementById('quote-box').innerHTML = printQuote(); 

/***
 * @return {intervalID} calls the function printQuote() every 10 seconds
***/
function autoRefresh() {
  let intervalID = setInterval(printQuote, 10000);
  return intervalID;
}
autoRefresh();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);