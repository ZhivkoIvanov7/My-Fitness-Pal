const foods = localStorage.getItem("foods");

const calories = JSON.parse(foods).map(f => f.calories);

let calculator = 0;

for (const cal of calories) {
  calculator += cal;
}

document.getElementById('calculator').value = calculator;
