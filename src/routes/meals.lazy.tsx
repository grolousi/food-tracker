import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { foodDataset } from "../shared/constants";
import { FoodItem, Meal } from "../shared/types";

export const Route = createLazyFileRoute("/meals")({
  component: Meals,
});

function Meals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [newMealName, setNewMealName] = useState("");
  const [newMealFoods, setNewMealFoods] = useState<FoodItem[]>([]);

  const handleAddFood = (food: FoodItem) => {
    setNewMealFoods((prevFoods) => [...prevFoods, food]);
  };

  const handleSaveMeal = () => {
    if (newMealName && newMealFoods.length > 0) {
      const totalCalories = newMealFoods.reduce(
        (total, food) => total + food.calories,
        0
      );
      const newMeal: Meal = {
        id: meals.length + 1,
        name: newMealName,
        foods: newMealFoods,
        totalCalories,
      };
      setMeals((prevMeals) => [...prevMeals, newMeal]);
      setNewMealName("");
      setNewMealFoods([]);
    }
  };

  return (
    <div>
      <h2>Meals</h2>
      <div>
        <input
          type="text"
          value={newMealName}
          onChange={(e) => setNewMealName(e.target.value)}
          placeholder="Meal name"
        />
        <select onChange={(e) => handleAddFood(JSON.parse(e.target.value))}>
          <option value="">Add food to meal</option>
          {foodDataset.map((food) => (
            <option key={food.id} value={JSON.stringify(food)}>
              {food.name}
            </option>
          ))}
        </select>
        <button onClick={handleSaveMeal}>Save Meal</button>
      </div>
      <ul>
        {newMealFoods.map((food, index) => (
          <li key={index}>{food.name}</li>
        ))}
      </ul>
      <h3>Saved Meals</h3>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            {meal.name}: {meal.foods.map((f) => f.name).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
