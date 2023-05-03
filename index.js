import { setActivePage } from "./displaySetup/setupDisplay.js";
import { confirmDialogBox } from "./confirmDialogBox.js";
import { clearInput } from "./clearInputs/clearInput.js";
import { clearTotal } from "./clearInputs/clearTotal.js";
import { clearAddNewFoodInputs } from "./clearInputs/clearAddNewFoodInputs.js";
import foodsDb from './db.json' assert { type: 'json' }

let totalServingSize = 0;
let totalProteins = 0;
let totalCarbs = 0;
let totalFat = 0;
let totalCalories = 0;

window.addEventListener('load', solve);

const foodNameElementId = 'foodName';

function solve() {  
    document.getElementById('addFood').addEventListener('click', addFood);
    document.getElementById('addNewFoodBtn').addEventListener('click', addNewFood);

    const searchFoodButtons = document.querySelectorAll("#search-food-btn");
    const dashboardButtons = document.querySelectorAll('#dashboard-btn');
    const diaryButtons = document.querySelectorAll('#diary-btn');
    const newsfeedButtons = document.querySelectorAll('#newsfeed-btn');
    const plansButtons = document.querySelectorAll('#plans-btn');

    searchFoodButtons.forEach(button => button.addEventListener('click', showAddFoodPage));
    dashboardButtons.forEach(button => button.addEventListener('click', showStartPage));
    diaryButtons.forEach(button => button.addEventListener('click', showDiaryPage));
    newsfeedButtons.forEach(button => button.addEventListener('click', showNewsfeedPage));
    plansButtons.forEach(button => button.addEventListener('click', showPlansPage))

    if (!localStorage.getItem('foods')) {
        localStorage.setItem('foods', JSON.stringify(foodsDb))
    }

    const foods = JSON.parse(localStorage.getItem('foods')) || [];

    function findFoodInDbJson(foodName) {
        let i = 0;
        for (; i < foods.length; ++i) {
            if (foods[i].name && typeof foods[i].name === 'string' && foods[i].name.toLowerCase() === foodName.toLowerCase()) {
                break;
            }
        }
        return i < foods.length ? foods[i] : null;
    }


    function insertFitnessTableRow(foodName, servingSize, protein, carbs, fat, calories) {
        const tbody = document.querySelector('#fitness-table tbody');

        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');

        td.textContent = foodName;
        td1.textContent = servingSize;
        td2.textContent = protein;
        td3.textContent = carbs;
        td4.textContent = fat;
        td5.textContent = calories;

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
    }


    function addFood() {
        const currentProduct = document.getElementById(foodNameElementId);
        const food = findFoodInDbJson(currentProduct.value);

        if (currentProduct.value === '') {
            return;
        }

        if (food) {
            insertFitnessTableRow(food.name, food.servingSize, food.protein, food.carbohydrates, food.fat, food.calories)

            clearInput();
            updateTotalTable(food.servingSize, food.protein, food.carbohydrates, food.fat, food.calories);
        } else {
            addNewFood();
            setActivePage('add-new-food');
            confirmDialogBox();
        }
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


    function addNewFood(e) {
        e = e || window.event
        e.preventDefault();

        let foodName = document.getElementById('food-name').value;
        let servingSize = Number(document.getElementById('serving-size').value);
        let protein = Number(document.getElementById('protein').value);
        let carbs = Number(document.getElementById('carbs').value);
        let fat = Number(document.getElementById('fat').value);
        let calories = Number(document.getElementById('calories').value);

        const newFood = {
            "name": foodName,
            "servingSize": servingSize,
            "protein": protein,
            "carbohydrates": carbs,
            "fat": fat,
            "calories": calories
        }

        if (!foodName || !servingSize || !protein || !carbs || !fat || !calories) {
            return;
        } else {
            foods.push(newFood);

            localStorage.setItem('foods', JSON.stringify(foods));

            clearAddNewFoodInputs();
        }

        setActivePage('start-page');
    }

    function showStartPage(e) {
        e.preventDefault();

        setActivePage('start-page');
    }

    function showAddFoodPage(e) {
        e.preventDefault();

        setActivePage("add-food-page");
    }

    function showDiaryPage(e) {
        e.preventDefault()

        setActivePage('diary-page');
    }

    function showNewsfeedPage(e) {
        e.preventDefault();

        setActivePage('newsfeed-page');
    }

    function showPlansPage(e) {
        e.preventDefault();
        
        setActivePage('plans-page')
    }

}