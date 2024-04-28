let tableTrafficLight = [
  ["חברון", 3.8, 22.3, 15, 60, 20],
  ["אבירים", 2.5, 18.7, 10, 50, 15],
  ["אבו גוש ", 7.0, 25.1, 12, 55, 18],
  ["אבו סנאן ", 3.2, 19.5, 14, 58, 22],
  ["אדירים", 4.5, 23.8, 16, 62, 25],
  ["אדמית", 9.8, 17.4, 13, 55, 21],
  ["אדרת", 2.5, 18.7, 10, 50, 15],
  ["עדי", 4.0, 25.1, 12, 55, 18],
  ["עפולה", 3.2, 19.5, 14, 58, 22],
  ["עגור", 5.5, 23.8, 16, 62, 25],
  ["אחיעזר", 2.8, 17.4, 13, 55, 21],
  ["אחיסמך", 2.5, 18.7, 10, 50, 15],
  ["עכו", 4.0, 25.1, 12, 55, 18],
  ["עמיעד", 6.2, 19.5, 14, 58, 22],
  ["אלמגור", 4.5, 23.8, 16, 62, 25],
  ["עלומים", 2.8, 17.4, 13, 55, 21],
  ["אמנון", 7.5, 18.7, 10, 50, 15],
  ["עמוקה", 4.0, 25.1, 12, 55, 18],
  ["ערערה", 3.2, 19.5, 14, 58, 22],
  ["ערד", 4.5, 23.8, 16, 62, 25],
  ["אריאל", 8.8, 17.4, 13, 55, 21],
  ["עשרת", 2.5, 18.7, 10, 50, 15],
  ["עטרת", 4.0, 25.1, 12, 55, 18],
  ["עתלית ", 9.2, 19.5, 14, 58, 22],
  ["עבדון", 4.5, 23.8, 16, 62, 25],
  ["אביגדור", 2.8, 17.4, 13, 55, 21],
  ["אביטל", 3.4, 20.2, 14, 57, 19],
  ["אבשלום", 2.7, 19.8, 11, 53, 17],
  ["עזריה", 5.2, 21.7, 13, 59, 23],
  ["בלפוריה", 3.9, 22.8, 16, 61, 18],
  ["ברעם", 2.6, 18.3, 12, 54, 20],
  ["ברקאי", 2.5, 18.7, 10, 50, 15],
  ["בת עין ", 6.0, 25.1, 12, 55, 18],
  ["בת שלמה ", 3.2, 19.5, 14, 58, 22],
  ["באר יעקב ", 4.5, 23.8, 16, 62, 25],
  ["באר גנים ", 2.8, 17.4, 13, 55, 21],
  ["בן זכאי ", 7.5, 18.7, 10, 50, 15],
  ["שבי ציון ", 4.0, 25.1, 12, 55, 18],
  ["שאר ישוב ", 3.2, 19.5, 14, 58, 22],
  ["שפרעם", 4.5, 23.8, 16, 62, 25],
  ["שלוחות ", 2.8, 17.4, 13, 55, 21],
  ["שקף", 8.4, 21.0, 14, 59, 19],
  ["שתולה", 2.7, 19.2, 11, 53, 17],
  ["שיזף", 4.2, 22.8, 16, 61, 23],
  ["שיבולים", 3.9, 20.7, 15, 58, 21],
  ["שילת", 9.3, 16.5, 12, 51, 18],
  ["שוהם", 2.5, 18.7, 10, 50, 15],
  ["שורשים", 4.0, 25.1, 12, 55, 18],
  ["שובל", 3.3, 20.1, 14, 59, 22],
  ["שובה", 3.7, 21.3, 13, 57, 20],
  ["סתריה", 2.4, 17.8, 12, 52, 18],
  ["סופה", 5.1, 18.5, 14, 55, 19],
  ["סולם", 2.9, 21.7, 12, 58, 16],
  ["סוסיה", 3.6, 22.0, 16, 61, 20],
  ["תעוז", 3.8, 20.3, 15, 59, 21],
  ["תלמי יוסף ", 2.2, 16.9, 11, 54, 17],
  ["טלמון", 6.5, 18.7, 10, 50, 15],
  ["טמרה", 4.0, 25.1, 12, 55, 18],
  ["טייבה", 3.3, 20.1, 14, 59, 22],
  ["טפחות", 3.7, 21.3, 13, 57, 20],
  ["תל מונד ", 2.4, 17.8, 12, 52, 18],
  ["תל אביב - יפו ", 3.1, 19.5, 14, 56, 21],
  ["תל שבע ", 2.8, 20.7, 11, 57, 15],
  ["טללים", 3.5, 23.0, 15, 62, 19],
  ["תקוע", 7.9, 19.3, 14, 58, 22],
  ["תקומה", 2.3, 15.9, 10, 53, 17],
  ["טבריה", 2.5, 18.7, 10, 50, 15],
  ["אודים", 4.0, 25.1, 12, 55, 18],
  ["יערה", 3.3, 20.1, 14, 59, 22],
  ["יעל", 3.7, 21.3, 13, 57, 20],
  ["יד חנה ", 2.4, 17.8, 12, 52, 18],
  ["יפית", 3.2, 20.5, 14, 55, 19],
  ["יגור", 8.7, 18.9, 11, 54, 16],
  ["יקום", 3.6, 22.8, 15, 61, 18],
  ["יסעור", 4.1, 20.2, 13, 59, 21],
  ["ישרש", 2.2, 16.7, 12, 51, 17],
  ["יבנה", 9.5, 18.7, 10, 50, 15],
  ["יציץ", 4.0, 25.1, 12, 55, 18],
  ["ידידה", 3.3, 20.1, 14, 59, 22],
  ["יחיעם", 3.7, 21.3, 13, 57, 20],
  ["יסודות", 2.4, 17.8, 12, 52, 18],
  ["יפעת", 5.9, 21.9, 13, 58, 17],
  ["יראון", 5.8, 23.2, 15, 62, 21],
  ["יטבתה", 3.2, 20.8, 14, 57, 20],
  ["צפרירים", 2.5, 18.3, 11, 53, 16],
  ["צאלים", 6.5, 18.7, 10, 50, 15],
  ["צוקים", 4.0, 25.1, 12, 55, 18],
  ["זכריה", 3.2, 20.5, 14, 60, 20],
  ["צרופה", 7.7, 18.9, 11, 54, 16],
  ["ציפורי", 3.6, 22.8, 15, 61, 18],
  ["צופית", 3.4, 19.5, 14, 56, 19],
  ["יודפת", 8.9, 21.9, 13, 58, 17],
  ["יובל", 3.8, 23.2, 15, 62, 21],
  ["צפריה", 3.2, 20.8, 14, 57, 20],
  ["צפת", 2.5, 18.3, 11, 53, 16],
  ["זכרון יעקב ", 2.5, 18.7, 10, 50, 15],
  ["זיקים", 4.0, 25.1, 12, 55, 18],
  ["זוהר", 9.2, 20.5, 14, 60, 20],
  ["צוריאל", 8.7, 18.9, 11, 54, 16],
  ["צביה", 3.6, 22.8, 15, 61, 18],
].map((row) => {
  const [
    sattlment,
    rank,
    newpatients,
    positiveTests,
    changePositiveResults,
    activeCovidInfected,
  ] = row;

  return [
    sattlment,
    rank,
    newpatients,
    positiveTests,
    changePositiveResults,
    activeCovidInfected,
  ];
});

createTable(tableTrafficLight, "tableBody2");

const settlementSelect = document.getElementById("settlement-select");
const searchsettlement = document.getElementById("search-settlement");
const settlement_select_settlements = document.querySelector(
  "#settlement-select .settlements"
);
settlement_select_settlements.style.paddingTop = "32px";
settlement_select_settlements.style.minHeight = "50px";
const settlement_search_input = document.getElementById("search-settlement");
const settlement_search_input_span = document.querySelector(
  "#search-settlement span"
);
const settlement_searchButton = document.querySelector(".search-button-3");
let settlementClickCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
let settlementNames = [];

for (let i = 0; i < tableTrafficLight.length; i++) {
  settlementNames.push(tableTrafficLight[i][0]);
}
settlement_search_input.addEventListener("click", function () {
  createSettlementSelect();
  settlementSelect.classList.toggle("hide");
  settlement_searchButton.classList.toggle("search-button-clicked");
});

function resetSettlementTable(render) {
  if (render) {
    createTable(tableTrafficLight, "tableBody2");
    settlement_search_input_span.innerHTML =
      "כלל ישובים" +
      `<img class="" src =  "./pics/down-arrow.svg" width="20" height="20"/>`;

    selectedSettlements = [];
  }

  if (selectedSettlements.length === 0) {
    tableTrafficLight = copyTable(settlementDataOriginal);
    if (render) createTable(tableTrafficLight, "tableBody2");
  }
}

function closeSettlementsSelect(resetTable = false) {
  settlementSelect.classList.toggle("hide");

  settlement_searchButton.classList.remove("search-button-clicked");
  // searchsettlement.click();
  resetSettlementTable(resetTable);
}

function closeserachsettlement(click) {
  settlementSelect.classList.toggle("hide");

  settlement_searchButton.classList.remove("search-button-clicked");
  searchsettlement.click();
  resetSettlementTable(resetTable);
}

function invokeSettlementFilter() {
  // see how to filter the table by letter search
  if (selectedSettlements.length === 0) return;

  tableTrafficLight = settlementDataOriginal.filter((row) =>
    selectedSettlements.includes(row[0])
  );

  tableTrafficLight = settlementDataOriginal.filter((row) => {
    return selectedSettlements.includes(row[0]);
  });

  createTable(tableTrafficLight, "tableBody2");
}

let selectedSettlements = [];

function onsettlementsearch(input) {
  let filter = input.value.toLowerCase();
  let options = settlement_select_settlements.children;
  for (let i = 1; i < options.length; i++) {
    let option = options[i];
    let txtValue = option.textContent || option.innerText;
    if (txtValue.toLowerCase().includes(filter)) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  }
}

function createSettlementSelect() {
  settlement_select_settlements.innerHTML = "";
  settlement_select_settlements.innerHTML += `
    <center style="position:absolute; top:0px; background:white;">
    <input style="margin-top:8px;" oninput="onsettlementsearch(this)" onclick="event.stopPropagation();" placeholder=" חפש ישוב"/>
    </center/>
    <br/>
  `;
  for (let i = 0; i < settlementNames.length; i++) {
    let span = document.createElement("span");

    span.addEventListener("click", function (e) {
      if (selectedSettlements.includes(span.textContent)) {
        selectedSettlements = selectedSettlements.filter(
          (settlement) => settlement !== span.textContent
        );
      } else {
        selectedSettlements = [span.textContent];
      }

      settlement_search_input_span.innerHTML =
        span.textContent +
        ` 
          <img class="" src ="./pics/down-arrow.svg" width="20" height="20"/>
        `;
      invokeSettlementFilter();
      closeSettlementsSelect();
      // Stop the event from bubbling up to the parent
      e.stopPropagation();
    });
    span.textContent = settlementNames[i];
    settlement_select_settlements.appendChild(span);
  }
}

function createSettlementsSelect() {
  settlement_select_settlements.innerHTML = "";
  settlement_select_settlements.innerHTML += `
  <center>
  <input onclick="event.stopPropagation(); " placeholder="חיפוש ישוב..."/>  
  </center/>
  <br/>
`;
  for (let i = 0; i < settlementNames.length; i++) {
    let option = document.createElement("div");
    let checkbox = document.createElement("input");
    let span = document.createElement("span");

    option.classList.add("option-settlement");
    checkbox.type = "checkbox";
    checkbox.id = settlementNames[i];
    checkbox.name = settlementNames[i];
    checkbox.value = settlementNames[i];
    option.appendChild(checkbox);
    option.appendChild(span);
    span.textContent = settlementNames[i];
    settlement_select_settlements.appendChild(option);
  }
}

const settlementDataOriginal = copyTable(tableTrafficLight);

const settlementTableArrows = {
  0: document.querySelector("#table-arrow-settlements-1"),
  1: document.querySelector("#table-arrow-settlements-2"),
  2: document.querySelector("#table-arrow-settlements-3"),
  3: document.querySelector("#table-arrow-settlements-4"),
  4: document.querySelector("#table-arrow-settlements-5"),
  5: document.querySelector("#table-arrow-settlements-6"),
};

// Function to sort the table
function sortTableSettlements(columnIndex) {
  const isNumber = columnIndex >= 1;
  if (settlementClickCounts[columnIndex] === 0) {
    settlementTableArrows[columnIndex].classList.remove("table-arrow-up");
    settlementTableArrows[columnIndex].classList.remove("table-arrow");
    tableTrafficLight.sort(function (a, b) {
      let textA = a[columnIndex];
      let textB = b[columnIndex];
      if (isNumber) {
        return textA - textB;
      }
      // Specify the locale as 'he' for Hebrew only for the specified column
      return textA.localeCompare(textB, "he", { sensitivity: "base" });
    });
  } else if (settlementClickCounts[columnIndex] === 2) {
    settlementTableArrows[columnIndex].classList.remove("table-arrow-up");
    settlementTableArrows[columnIndex].classList.add("table-arrow");
    resetSettlementTable();
  } else {
    settlementTableArrows[columnIndex].classList.add("table-arrow-up");
    settlementTableArrows[columnIndex].classList.remove("table-arrow");
    tableTrafficLight.sort(function (a, b) {
      let textA = a[columnIndex];
      let textB = b[columnIndex];
      if (isNumber) {
        return textB - textA;
      }
      return textB.localeCompare(textA, "he", { sensitivity: "base" });
    });
  }
  settlementClickCounts[columnIndex]++;
  settlementClickCounts[columnIndex] %= 3;

  createTable(tableTrafficLight, "tableBody2");
}
