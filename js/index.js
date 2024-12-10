var arrayOfQuotes = [
  {
    quoteAuthor: "― Oscar Wilde",
    quoteText: "“Be yourself; everyone else is already taken.”",
  },
  {
    quoteAuthor: "― Frank Zappa",
    quoteText: "“So many books, so little time.”",
  },
  {
    quoteAuthor: "― Marcus Tullius Cicero",
    quoteText: "“A room without books is like a body without a soul.”",
  },
  {
    quoteAuthor: "― Mae West",
    quoteText: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    quoteAuthor: "― Mahatma Gandhi",
    quoteText: "“Be the change that you wish to see in the world.”",
  },
  {
    quoteAuthor: "― Robert Frost",
    quoteText:
      "“In three words I can sum up everything Ive learned about life: it goes on.”",
  },
];

var lastIndex;
var displayedQuotes = [];

function generateQuote() {
  if (displayedQuotes.length === arrayOfQuotes.length) {
    displayedQuotes = [];
  }

  do {
    var newIndex = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (newIndex == lastIndex || displayedQuotes.includes(newIndex));

  lastIndex = newIndex;
  displayedQuotes.push(newIndex);

  console.log(newIndex);

  document.getElementById("quoteText").innerHTML =
    arrayOfQuotes[newIndex].quoteText;
  document.getElementById("quoteAuthor").innerHTML =
    arrayOfQuotes[newIndex].quoteAuthor;
}
