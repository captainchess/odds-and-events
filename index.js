// === State ===

let bank = [];
let odds = [];
let evens = [];

function addToBank(n) {
  bank.push(n);
  render();
}

function addToOdds(n) {
  odds.push(n);

  render();
}

function addToEvens(n) {
  evens.push(n);

  render();
}

function isOddOrEven(n) {
  if (n % 2 != 0) {
    addToOdds(n);
  } else {
    addToEvens(n);
  }
}

// === Components ===

function Display(num) {
  const $p = document.createElement("p");
  $p.innerHTML = num;

  return $p;
}

function InputForm() {
  const $form = document.createElement("form");
  $form.classList.add("form");
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

    addToBank(input);
  });

  return $form;
}

function SortOneButton() {
  const $sortBtn = document.createElement("button");
  $sortBtn.innerHTML = "Sort 1";
  $sortBtn.classList.add("sort-one-btn");

  $sortBtn.addEventListener("click", () => {
    // Check if first index of bank is even or odd
    if (bank < 1) {
        return $sortBtn;
    }
    const num = bank.shift();
    isOddOrEven(num);
  });

  return $sortBtn;
}

function SortAll() {
  const $sortBtn = document.createElement("button");
  $sortBtn.innerHTML = "Sort All";
  $sortBtn.classList.add("sort-all-btn");

  $sortBtn.addEventListener("click", () => {
    for (num of bank) {
      console.debug(num);
      isOddOrEven(num);
    }
    bank = [];
    render();
  });

  return $sortBtn;
}

function BankDisplay() {
  const $bank = document.createElement("div");
  $bank.classList.add("bank");

  if (!bank) {
    return $bank;
  }

  const $display = bank.map((number) => Display(number));

  $bank.replaceChildren(...$display);

  return $bank;
}

function OddsDisplay() {
  const $odds = document.createElement("div");
  $odds.classList.add("odds");
  if (odds < 1) {
    return $odds;
  }

  const $display = odds.map((number) => Display(number));
  $odds.replaceChildren(...$display);

  return $odds;
}

function EvensDisplay() {
  const $even = document.createElement("div");
  $even.classList.add("evens");
  if (evens < 1) {
    return $even;
  }

  const $display = evens.map((number) => Display(number));
  $even.replaceChildren(...$display);

  return $even;
}

// === Render ===

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
        <h1>Odds And Events</h1>
        <div class="form-and-btns">
            <Form></Form>
            <Sort1></Sort1>
            <SortAll></SortAll>
        </div>

        <h2>Bank</h2>
        <Bank></Bank>

        <h2>Odds</h2>
        <Odds></Odds>

        <h2>Evens</h2>
        <Evens></Evens>
    `;

  $app.querySelector("Form").replaceWith(InputForm());
  $app.querySelector("Sort1").replaceWith(SortOneButton());
  $app.querySelector("SortAll").replaceWith(SortAll());
  $app.querySelector("Bank").replaceWith(BankDisplay());
  $app.querySelector("Odds").replaceWith(OddsDisplay());
  $app.querySelector("Evens").replaceWith(EvensDisplay());
}

render();
