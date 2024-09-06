import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { foodDataset } from "../shared/constants";
import { FoodItem } from "../shared/types";

export const Route = createLazyFileRoute("/add-food")({
  component: AddFood,
});

function AddFood() {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleAddFood = () => {
    if (name && calories) {
      const newFood: FoodItem = {
        id: foodDataset.length + 1,
        name,
        calories: parseInt(calories, 10),
      };
      foodDataset.push(newFood);
      setName("");
      setCalories("");
      alert("Food added successfully!");
    }
  };

  return (
    <div>
      <h2>Add New Food</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Food name"
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
      />
      <button onClick={handleAddFood}>Add Food</button>
      {foodDataset.map((food) => (
        <div key={food.id}>
          <h3>{food.name}</h3>
          <p>{food.calories} calories</p>
        </div>
      ))}
    </div>
  );
}
