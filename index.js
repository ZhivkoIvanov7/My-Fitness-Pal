import foods from './db.json' assert {type: 'json'}

let totalServingSize = 0;
let totalProteins = 0;
let totalCarbs = 0;
let totalFat = 0;
let totalCalories = 0;

window.addEventListener('load', solve);

function solve() {
    document.getElementById('addFood').addEventListener('click', addFood);

    function addFood() {
        let table = document.getElementById("fitness-table");

        let currentProduct = document.getElementById('foodName');
        let currentProductV = currentProduct.value;

        for (let i = 0; i < foods.length; ++i) {
            let foodName = foods[i].name;
            let servingSize = Number(foods[i].servingSize);
            let protein = Number(foods[i].protein);
            let carbs = Number(foods[i].carbohydrates);
            let fat = Number(foods[i].fat);
            let calories = Number(foods[i].calories);

            if (currentProductV.toLowerCase() === foodName.toLowerCase()) {
                let tbody = document.createElement('tbody');
                let tr = document.createElement('tr');
                let th = document.createElement('th');
                let th1 = document.createElement('th');
                let th2 = document.createElement('th');
                let th3 = document.createElement('th');
                let th4 = document.createElement('th');
                let th5 = document.createElement('th');
                th.textContent = foodName;
                th1.textContent = servingSize;
                th2.textContent = protein;
                th3.textContent = carbs;
                th4.textContent = fat;
                th5.textContent = calories;

                tr.appendChild(th);
                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);
                tr.appendChild(th4);
                tr.appendChild(th5);
                tbody.appendChild(tr);
                table.appendChild(tbody);

                addNewFood();
                clearInput();
                total(servingSize, protein, carbs, fat, calories);
            }else {
                document.querySelector('.addNewFood').style.display = 'block';
            }
        }
        function clearInput() {
            currentProduct.value = '';
        }
    }
    function clearTotal() {
        let elements = document.getElementsByTagName('td');
        for (let i = 0; i < elements.length; i + 1) {
            elements[i].remove();
        }
    }
    function total(servingSize, protein, carbs, fat, calories) {
        clearTotal();
        totalServingSize += servingSize;
        totalProteins += protein;
        totalCarbs += carbs;
        totalFat += fat;
        totalCalories += calories;

        let totalTable = document.getElementById("total");
        let amountOfFood = document.createElement('td');
        let proteins = document.createElement('td')
        let carbohydrates = document.createElement('td')
        let fats = document.createElement('td');
        let tCalories = document.createElement('td');

        amountOfFood.textContent = totalServingSize;
        proteins.textContent = totalProteins;
        carbohydrates.textContent = totalCarbs;
        fats.textContent = totalFat;
        tCalories.textContent = totalCalories;

        totalTable.appendChild(amountOfFood);
        totalTable.appendChild(proteins);
        totalTable.appendChild(carbohydrates)
        totalTable.appendChild(fats);
        totalTable.appendChild(tCalories);

    }
    function addNewFood() {
        
    }
}