const arrayOfQuotes = [
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



function generateQuote() {
 
  var IndexRandom = 
    Math.floor(Math.random() * arrayOfQuotes.length )
  ;


  document.getElementById(
    "quoteText"
  ).innerHTML = `${arrayOfQuotes[IndexRandom].quoteText}`;
  document.getElementById(
    "quoteAuthor"
  ).innerHTML = `${arrayOfQuotes[IndexRandom].quoteAuthor}`;
}





