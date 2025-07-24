function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quotes", {
    strings: "Nothing is impossible, the word itself says 'I'm possible'",
    autoStart: true,
    delay: 1,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
