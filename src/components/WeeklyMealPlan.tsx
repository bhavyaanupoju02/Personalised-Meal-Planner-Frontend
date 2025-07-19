import React, { useState } from "react";

type MealItem = {
  time: string;
  name: string;
  description: string;
  calories: number;
};

type MealCategory = "Breakfast" | "Lunch" | "Snacks" | "Dinner";
type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

const weeklyMealData: Record<WeekDay, Record<MealCategory, MealItem[]>> = {
  Monday: {
    Breakfast: [
      { time: "8:00 AM", name: "Avocado Toast", description: "Whole grain toast with avocado", calories: 300 },
      { time: "8:30 AM", name: "Orange Juice", description: "Freshly squeezed", calories: 110 },
    ],
    Lunch: [
      { time: "1:00 PM", name: "Turkey Sandwich", description: "Whole grain bread, turkey, lettuce", calories: 400 },
    ],
    Snacks: [
      { time: "4:00 PM", name: "Carrot Sticks", description: "Fresh and crunchy", calories: 50 },
    ],
    Dinner: [
      { time: "7:30 PM", name: "Grilled Fish", description: "Served with lemon and herbs", calories: 350 },
    ],
  },
  // Repeat similar structure for other days...
  Tuesday: { Breakfast: [], Lunch: [], Snacks: [], Dinner: [] },
  Wednesday: { Breakfast: [], Lunch: [], Snacks: [], Dinner: [] },
  Thursday: { Breakfast: [], Lunch: [], Snacks: [], Dinner: [] },
  Friday: { Breakfast: [], Lunch: [], Snacks: [], Dinner: [] },
  Saturday: { Breakfast: [], Lunch: [], Snacks: [], Dinner: [] },
  Sunday: { Breakfast: [], Lunch: [], Snacks: [], Dinner: [] },
};

const WeeklyMealPlan: React.FC = () => {
  const [activeDay, setActiveDay] = useState<WeekDay>("Monday");
  const [activeCategory, setActiveCategory] = useState<MealCategory>("Breakfast");

  const categories: MealCategory[] = ["Breakfast", "Lunch", "Snacks", "Dinner"];
  const days: WeekDay[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

{/* Responsive Table Wrapper */}
<div className="w-full overflow-x-auto">
  <table className="w-full min-w-[700px] table-auto border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2 text-left text-sm sm:text-base whitespace-nowrap min-w-[80px]">Time</th>
        <th className="border px-4 py-2 text-left text-sm sm:text-base min-w-[120px]">Meal Item</th>
        <th className="border px-4 py-2 text-left text-sm sm:text-base min-w-[200px]">Description</th>
        <th className="border px-4 py-2 text-left text-sm sm:text-base min-w-[100px]">Calories</th>
      </tr>
    </thead>
    <tbody>
      {weeklyMealData[activeDay][activeCategory].length > 0 ? (
        weeklyMealData[activeDay][activeCategory].map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border px-4 py-2 whitespace-nowrap">{item.time}</td>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.description}</td>
            <td className="border px-4 py-2">{item.calories}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4} className="text-center py-4 text-gray-500">
            No meals planned for {activeCategory} on {activeDay}.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


{/* Responsive Table */}
<div className="w-full overflow-x-auto">
  <table className="min-w-[600px] w-full table-auto border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2 text-left">Time</th>
        <th className="border px-4 py-2 text-left">Meal Item</th>
        <th className="border px-4 py-2 text-left">Description</th>
        <th className="border px-4 py-2 text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      {weeklyMealData[activeDay][activeCategory].length > 0 ? (
        weeklyMealData[activeDay][activeCategory].map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border px-4 py-2 whitespace-nowrap">{item.time}</td>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.description}</td>
            <td className="border px-4 py-2">{item.calories}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4} className="text-center py-4 text-gray-500">
            No meals planned for {activeCategory} on {activeDay}.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


};

export default WeeklyMealPlan;
