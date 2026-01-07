let listwithAllNumbers = [];

function addValueArray() {
  let getingSiteNumber = Number(document.getElementById("chosenNumber").value);
  //validation
  if (getingSiteNumber > 100 || getingSiteNumber < 1) {
    console.log("invalid number");
    alert("invalid number");
  } else if (listwithAllNumbers.indexOf(getingSiteNumber) != -1) {
    console.log("number already exists");
    alert("number already exists");
  } else {
    listwithAllNumbers.push(getingSiteNumber);
    listwithAllNumbers.sort();
    //-------------------

    // adding elements for 'div'
    let resultList = document.getElementById("listWithResults");
    resultList.innerHTML += `chosen number was <strong>${getingSiteNumber}<strong><br>`;
  }
}
function analyzeAllResults() {
  let writeAllResults = document.getElementById("divwithAllResults");
  //show the largest number
  console.log(listwithAllNumbers[listwithAllNumbers.length()-1])
}
