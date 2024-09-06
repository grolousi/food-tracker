import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { foodDataset } from "../shared/constants";
import { FoodItem } from "../shared/types";

export const Route = createLazyFileRoute("/food-log")({
  component: FoodLog,
});

function FoodLog() {
  type LogEntry = FoodItem & { timestamp: Date };
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [selectedFood, setSelectedFood] = useState("");

  const handleAddFood = () => {
    const food = foodDataset.find((f) => f.name === selectedFood);
    if (food) {
      setLogEntries([...logEntries, { ...food, timestamp: new Date() }]);
    }
  };

  return (
    <div>
      <h2>Food Log</h2>
      <select
        value={selectedFood}
        onChange={(e) => setSelectedFood(e.target.value)}
      >
        <option value="">Select a food</option>
        {foodDataset.map((food) => (
          <option key={food.id} value={food.name}>
            {food.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddFood}>Add Food</button>
      <ul>
        {logEntries.map((entry, index) => (
          <li key={index}>
            {entry.name} - {entry.calories} calories (
            {entry.timestamp.toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
}
