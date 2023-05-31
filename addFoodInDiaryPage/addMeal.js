import { setActivePage } from "../displaySetup/setupDisplay.js";
import { addCalories } from "./addCalories.js";

let activeSection = '';

export function addBreakfast() {
    activeSection = 'breakfast';
    addMeal(activeSection);
}

export function addLunch() {
    activeSection = 'lunch';
    addMeal(activeSection);
}

export function addDinner() {
    activeSection = 'dinner';
    addMeal(activeSection);
}

function addMeal(foodId) {
    setActivePage('add-food-page');

    if (window.history.state === 'diary-page') {
        const addFoodBtn = document.getElementById('addFood');
        addFoodBtn.addEventListener('click', addFoodinDiaryPage);
    }

    function addFoodinDiaryPage() {
        const tds = document.querySelectorAll('#fitness-table tbody tr td');
        let tdsArr = Array.from(tds);

        const addFoodBtn = document.getElementById('addFood');
        addFoodBtn.removeEventListener('click', addFoodinDiaryPage);

        if (window.history.state == 'add-food-page' || window.history.state == 'add-new-food') {
            tdsArr = [];
        }

        if (tdsArr.length > 6) {
            tdsArr = tdsArr.slice(-6);
        }

        if (window.history.state !== 'add-food-page') {
            setActivePage('diary-page');
        }

        const foodSection = document.getElementById(foodId);
        const foodTable = foodSection.querySelector('tbody');

        for (let i = 0; i < tdsArr.length; i += 6) {
            if (i % 6 == 0) {
                if (tdsArr[i].textContent.match(/[a-zA-Z]+/g)) {

                    let currentFood = tdsArr[i].textContent;

                    if (foodId === activeSection) {
                        const tr = document.createElement('tr');
                        const newFoodItem = document.createElement("td");

                        newFoodItem.textContent = currentFood.charAt(0).toUpperCase() + currentFood.slice(1);
                        tr.appendChild(newFoodItem);

                        foodTable.appendChild(tr);
                        
                        addCalories();
                    }
                }
            }
        }
    }
}