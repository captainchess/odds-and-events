// === State ===

let bank = 0;
let odds = 0;
let evens = 0;

function addToBank(n) {
  bank += n;
}

function addToOdds(n) {
  odds += n;
}

function addToEvens(n) {
  evens += n;
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
        <button>Add Number</button>
    `;

    $form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData($form);
        const input = data.get("add-input");

        addToBank(Number(input));
    });

  return $form;
}


// === Render ===

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
        <h1>Odds And Events</h1>
        <Form></Form>
        <Buttons></Buttons>

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
