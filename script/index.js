const form = document.getElementsByTagName("form")[0];

const createTable = function () {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("mini-table");

  const numbers = [];

  for (let i = 0; i < 24; i++) {
    const elem = document.createElement("div");
    elem.classList.add("tbl-elem");
    let candidato = Math.ceil(Math.random() * 76);
    while (numbers.includes(candidato)) {
      candidato = Math.ceil(Math.random() * 76);
    }
    numbers.push(candidato);
    elem.innerHTML = candidato;
    elem.classList.add(candidato);
    mainDiv.appendChild(elem);
  }
  return mainDiv;
};

const submitForm = function (e) {
  e.preventDefault();
  const nTbl = document.getElementById("num-tbl");
  const tabTables = document.getElementById("tables");
  for (let i = 0; i < nTbl.value; i++) {
    const tbl = createTable();
    tabTables.appendChild(tbl);
  }
  document.getElementById("countTabs").style.display = "none";
  document.getElementsByTagName("main")[0].style.opacity = 1;
};

form.addEventListener("submit", submitForm);

const createMainTable = function () {
  const mainTable = document.getElementById("table");

  for (let i = 1; i <= 76; i++) {
    const elem = document.createElement("div");
    elem.classList.add("tbl-elem");
    elem.classList.add(i);
    elem.innerHTML = i;
    mainTable.appendChild(elem);
  }
};

createMainTable();

const tableNumbers = [];

const extractNumber = function () {
  let candidato = Math.ceil(Math.random() * 76);
  while (tableNumbers.includes(candidato)) {
    candidato = Math.ceil(Math.random() * 76);
  }
  tableNumbers.push(candidato);
  const selected = document.getElementsByClassName(candidato);
  selectedArray = Array.from(selected);
  selectedArray.forEach((element) => {
    element.classList.add("selected");
  });
};

document.getElementById("btn").addEventListener("click", extractNumber);
