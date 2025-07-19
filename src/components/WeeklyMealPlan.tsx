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

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">📅 Weekly Meal Plan</h1>

      <div className="flex justify-center space-x-2 mb-4 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeDay === day ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-medium ${
              activeCategory === category ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <table className="w-full table-auto border-collapse">
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
                <td className="border px-4 py-2">{item.time}</td>
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
  );
};

export default WeeklyMealPlan;
