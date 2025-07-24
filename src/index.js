function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quotes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  // build the APIL URL
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "73547at3639f1d422ob0047943ad8fbb";
  let prompt = `User instructions: Generate a Motivational Quote about ${instructionInput.value}`;
  let context =
    "You are a positive mental health motivator expert, and you specialize in writing short, impactful motivational quotes. Your mission is to generate a 4 line quote that encourages mental wellbeing. The quote should be positive, uplifting, and clear.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quotes");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink">🧠Generating a motivational quote about ${instructionInput.value}</div>`;

  console.log("Generating Quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  // Make a call the API

  axios.get(apiUrl).then(displayQuote);
  // Display the generated poem
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
