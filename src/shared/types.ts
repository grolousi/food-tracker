export type FoodItem = {
  id: number;
  name: string;
  calories: number;
};

export type Meal = {
  id: number;
  name: string;
  foods: FoodItem[];
  totalCalories: number;
};
