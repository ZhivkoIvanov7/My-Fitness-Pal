export function addCalories() {
    let calorieGoal = document.getElementById('calorie-goal');
    let calories = document.getElementById('add-calories');
    
    calorieGoal.textContent = calories.value

    const tds = document.querySelectorAll('#fitness-table tbody tr td');
    let tdsArr = Array.from(tds);

    if (tdsArr.length > 6) {
        tdsArr = tdsArr.slice(-6);
    }

    for (let i = 0; i < tdsArr.length; i += 6) {
        const caloriesElement = document.querySelector('#fitness-table tbody td:nth-child(6)');

        let calorieRemaining = Number(calorieGoal.textContent) - Number(caloriesElement.textContent);

        console.log(calorieRemaining);

    }
}