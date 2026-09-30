// === State ===

const bank = 0;
const odds = 0;
const evens = 0;

function addToBank(n) {
  bank += 1;
  BankDisplay();
}

function addToOdds(n) {
  odds += 1;
}

function addToEvens(n) {
  evens += 1;
}

// === Render ===

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
        <h1>Odds And Events</h1>
        <Form></Form>

        <h2>Bank</h2>
        <Bank></Bank>

        <h2>Odds</h2>
        <Odds></Odds>

        <h2>Evens</h2>
        <Evens></Evens>
    `;

  $app.querySelector("Form").replaceWith(InputForm());
}

render();
