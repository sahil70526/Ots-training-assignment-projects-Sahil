let previousRecords = [];
let maxRecords = 10;

function checkBmi() {
  let height = parseFloat(document.getElementById("heightField").value);
  let weight = parseFloat(document.getElementById("weightField").value);

  // ----------- main logic of bmi --------------
 
    let result = (weight / (height * height)).toFixed(1);


  //logic for the bmi record pushing------------
  if(isNaN(result)){
    alert("Please enter valid input.")
  }else{
    if (maxRecords >= 1) {
        previousRecords.push(result);
        maxRecords = maxRecords - 1;
      } else {
        previousRecords.splice(0, 1);
        previousRecords.push(result);
      }
  }
 
 //logic for the giving user low or high bmi ------
 if (result > 18 && result < 25) {
    alert("your Bmi is in normal range");
  } else if (result > 25) {
    alert("you are over weight");
  } else {
    alert("you are under weight");
  }
  
 

  const currentBmi = (document.querySelector(".currentBmi").innerHTML = result);
  const bmislot = (document.querySelector(".bmiinfo").innerHTML = previousRecords);
  document.getElementById("heightField").value = " ";
  document.getElementById("weightField").value = " ";
}



