export function addCalories() {
    let calorieGoal = document.getElementById('calorie-goal');
    let calories = document.getElementById('add-calories');
    let foodCalories = document.getElementById('foodCalories');
    let caloriesRemaining = document.getElementById('calorie-remaining');
    
    if(calories.value){
      calorieGoal.textContent = calories.value;
    
      let sumCalories = 0;
    
      const tds = document.querySelectorAll('#fitness-table tbody tr td');
      let tdsArr = Array.from(tds);
      
      for (let i = 0; i < tdsArr.length; i += 6) {
  
        let caloriesElement = tdsArr[i + 5];
        let caloriesValue = Number(caloriesElement.textContent);
    
        sumCalories += caloriesValue;
      }
  
      foodCalories.textContent = sumCalories.toString();
  
      let totalCalories = Number(calorieGoal.textContent) - sumCalories;
      caloriesRemaining.textContent = totalCalories.toString();

    }else{
      calorieGoal.textContent = 'Calorie Goal';
      foodCalories.textContent = 'Food Calories';
      caloriesRemaining.textContent = 'Remaining Calories';
    }
  }