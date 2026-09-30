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

// === Components ===

function BankDisplay() {
  const $bank = document.createElement("div");
  $bank.innerHTML = `
        <p>${bank}</p>
    `;

  return $bank;
}

function OddsDisplay() {
  const $odd = document.createElement("div");
  $odd.innerHTML = `
        <p>${odds}</p>
    `;

  return $odd;
}

function EvensDisplay() {
  const $even = document.createElement("div");
  $even.innerHTML = `
        <p>${evens}</p>
    `;

  return $even;
}

function InputForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
        <label>
            Add a number to the bank
            <input name="add-input" type="number" />
        </label>
        <button name="add-num" type="button">Add Number</button>
        <button name="sort-1" type="button">Sort 1</button>
        <button name="sort-all" type="button">Sort All</button>
    `;

  

  return $form;
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
