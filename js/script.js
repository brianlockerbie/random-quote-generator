/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotes = [ //all my quotes I picked out
    {
      quote: "Rule #1 - Never be #2",
      source: "Brian",
      citation: "Quotes",
      year: 2000,
    },
    {
      quote: "Head up, stay strong, fake a smile and move on.",
      source: "Kardashians",
      citation: "Keeping up with the Kardashians ",
      year: 2011,
    },
    {   
      quote: "Patience is a virtue.",
      source: "Life",
      citation: "Common sense",
      year: 1995,
    },
    {
      quote: "Talk is cheap. Show me the code.",
      source: "Anonymouse",
      citation: "Online",
      year: 2000,
    },
    {
      quote: "Ordinary people pursue money, simple people pursue power, average people pursue fame, but extraordinary people pursue ideas.",
      source: "Internet",
      citation: "Anonymous",
    }
  ];
  
  // Hex colors in array to switch randomly.
  let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  
  
  function getRandomQuote(arr) {
    let randomNum = Math.floor(Math.random () * arr.length) + 0;
    return arr[randomNum];
  }
  
  function getRandomColor(arr) {
    let randomNum = Math.floor(Math.random() * arr.length) + 0;
    return arr[randomNum];
  }
  
  function printQuote() {
    let randomQuote = getRandomQuote(quotes);
    let randomColor = getRandomColor(colorArray);
    let HTMLString = `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`
  
    if (randomQuote.citation) {
      HTMLString += `<span class="citation">${randomQuote.citation}</span>`;
    }
  
    if (randomQuote.year) {
      HTMLString += `<span class="year">${randomQuote.year}</span>`;
    }
  
    HTMLString += `</p>`;
  
    document.getElementById('quote-box').innerHTML = HTMLString;
    document.querySelector('body').style.backgroundColor = randomColor;
    document.querySelector('button').style.backgroundColor = randomColor;
  }
  
  printQuote();
  
  // Calls the printQuote every 20 seconds
  let autoRefresh = setInterval(function() {printQuote()}, 20000);
  
  // Calls printQuote, clears interval and resets it when button is pressed
  function newInterval() {
    printQuote();
    clearInterval(autoRefresh);
    autoRefresh = setInterval(function() {printQuote()}, 20000);
  }
  
  document.getElementById('loadQuote').addEventListener("click", newInterval, false);