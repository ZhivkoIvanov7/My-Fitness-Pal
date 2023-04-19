import foods from './db.json' assert {type: 'json'}

let totalServingSize = 0;
let totalProteins = 0;
let totalCarbs = 0;
let totalFat = 0;
let totalCalories = 0;

window.addEventListener('load', solve);

const foodNameElementId = 'foodName'

function solve() {
    document.getElementById('addFood').addEventListener('click', addFood);

    function findFoodInDbJson(foodName) {
        let i = 0;
        
        for (; i < foods.length; ++i) {
            if (foodName.toLowerCase() === foods[i].name.toLowerCase()) {
                break;
            }
        }

        return i < foods.length ? foods[i] : null

    }

    function insertFitnessTableRow(foodName, servingSize, protein, carbs, fat, calories) {
        const tbody = document.querySelector('#fitness-table tbody');

        const tr = document.createElement('tr');
        const th = document.createElement('td');
        const th1 = document.createElement('td');
        const th2 = document.createElement('td');
        const th3 = document.createElement('td');
        const th4 = document.createElement('td');
        const th5 = document.createElement('td');
        
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
    }

    function clearInput() {
        document.getElementById(foodNameElementId).value = '';
    }

    function addFood() {
        const currentProduct = document.getElementById(foodNameElementId);        
        const food = findFoodInDbJson(currentProduct.value)

        if (food) {
            insertFitnessTableRow(food.name, food.servingSize, food.protein, food.carbohydrates, food.fat, food.calories)

            clearInput();
            updateTotalTable(food.servingSize, food.protein, food.carbohydrates, food.fat, food.calories);
        } else {
            document.querySelector('.addNewFood').style.display = 'block';
        }        
    }


    function clearTotal() {
        document
            .querySelectorAll('#total tbody td')
            .forEach(el => el.remove());
    }

    function updateTotalTable(servingSize, protein, carbs, fat, calories) {
        clearTotal();

        totalServingSize += servingSize;
        totalProteins += protein;
        totalCarbs += carbs;
        totalFat += fat;
        totalCalories += calories;

        let totalTable = document.querySelector('#total tbody');
        let amountOfFood = document.createElement('td');
        let proteins = document.createElement('td')
        let carbohydrates = document.createElement('td')
        let fats = document.createElement('td');
        let tCalories = document.createElement('td');

        amountOfFood.textContent = totalServingSize.toFixed(2);
        proteins.textContent = totalProteins.toFixed(2);
        carbohydrates.textContent = totalCarbs.toFixed(2);
        fats.textContent = totalFat.toFixed(2);
        tCalories.textContent = totalCalories.toFixed(2);

        totalTable.appendChild(amountOfFood);
        totalTable.appendChild(proteins);
        totalTable.appendChild(carbohydrates)
        totalTable.appendChild(fats);
        totalTable.appendChild(tCalories);
    }


    function addNewFood() {
        
    }
}