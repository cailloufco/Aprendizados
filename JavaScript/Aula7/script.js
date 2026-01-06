let listwithAllNumbers = [];

function addValueArray() {
  let getingSiteNumber = Number(document.getElementById("chosenNumber").value);

  if (getingSiteNumber > 100 || getingSiteNumber < 1) {
    console.log("invalid number");
    alert("invalid number");
  } else if (listwithAllNumbers.indexOf(getingSiteNumber) != -1) {
    console.log("number already exists");
    alert("number already exists");
  } else {
    listwithAllNumbers.push(getingSiteNumber);
    listwithAllNumbers.sort();

    // geting / adding elements from 'select'

    let resultList = document.getElementById("listWithResults");
    resultList.innerHTML += `chosen number was <strog>${getingSiteNumber}<strong><br>`;

    //code test
    console.log(
      `${getingSiteNumber} , ${listwithAllNumbers} , ${listwithAllNumbers.length}`
    );
  }
}
function analyzeAllResults(){
    console.log("in progress")
}