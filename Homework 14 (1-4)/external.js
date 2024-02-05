function weightInChickens() {
    let weight = prompt("Enter your weight in kilograms:");
    weight = Number(weight);
    if (isNaN(weight) || weight <= 0) {
      alert("Invalid weight. Please enter a positive number.");
    } else {
      let chickens = weight / 0.5;
      document.getElementById("result").innerHTML = (`Your weight in chickens is ${chickens}`);
    }
  }

  window.onload = weightInChickens;