const quotes = [
  {
    author: "Bertrand Russell",
    quote:
      "This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities.",
  },
  {
    author: "Judith Martin",
    quote:
      "It is far more impressive when others discover your good qualities without your help.",
  },
  {
    author: "James Hilton",
    quote:
      "Surely there comes a time when counting the cost and paying the price aren't things to think about any more. All that matters is value - the ultimate value of what one does.",
  },
  {
    author: "Scott Adams",
    quote: "'Wrong' is one of those concepts that depends on witnesses.",
  },
  {
    author: "G. K. Chesterton",
    quote:
      "The Bible tells us to love our neighbors, and also to love our enemies; probably because they are generally the same people.",
  },
];

const generatequote = () => {
  randomNumber = Math.floor(Math.random() * quotes.length);
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i] === randomNumber) {
      return `${quotes[i].quote} ~ ${quotes[i].author}`;
    }
  }
};
