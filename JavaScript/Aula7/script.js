let listwithAllNumbers = [];

function addValueArray() {
  let getingSiteNumber = Number(document.getElementById("chosenNumber").value);
  //validation
  if (getingSiteNumber > 100 || getingSiteNumber < 1) {
    alert("invalid number");
  } else if (listwithAllNumbers.indexOf(getingSiteNumber) != -1) {
    alert("number already exists");
  } else {
    listwithAllNumbers.push(getingSiteNumber);
    listwithAllNumbers.sort();
    //-------------------

    // adding elements for 'div'
    let resultList = document.getElementById("listWithResults");
    resultList.innerHTML += `chosen number was <strong>${getingSiteNumber}</strong><br>`;

    // restarting analyze function
    let writeAllResults = document.getElementById("divwithAllResults");
    writeAllResults.innerHTML = "";
  }
}
let sum = 0;
function analyzeAllResults() {
  //validation
  if (listwithAllNumbers.length == 0) {
    alert("type your number!!!");
    //----------------
  } else {
    let writeAllResults = document.getElementById("divwithAllResults");
    //show the largest number
    let largestNumber = listwithAllNumbers[listwithAllNumbers.length - 1];

    //show the smallest number
    let smallestNumber = listwithAllNumbers[0];

    //the average of the numbers

    for (i = 0; i < listwithAllNumbers.length; i++) {
      sum = sum + listwithAllNumbers[i];
    }

    //writing Results
    writeAllResults.innerHTML = `<br>the largest number :<strong>${largestNumber}</strong> 
    <br>the smallest number :<strong>${smallestNumber}</strong> 
    <br>average of the numbers :<strong>${
      sum / listwithAllNumbers.length
    }</strong> `;
    sum = 0;
  }
}
