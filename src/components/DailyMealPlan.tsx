import React, { useState } from "react";

type MealItem = {
  time: string;
  name: string;
  description: string;
  calories: number;
};

type MealCategory = "Breakfast" | "Lunch" | "Snacks" | "Dinner";

const mealData: Record<MealCategory, MealItem[]> = {
  Breakfast: [
    { time: "8:00 AM", name: "Oatmeal with Berries", description: "Rolled oats topped with fresh berries and honey", calories: 250 },
    { time: "8:30 AM", name: "Boiled Eggs (2)", description: "Lightly salted, protein-rich", calories: 140 },
    { time: "9:00 AM", name: "Green Tea", description: "Antioxidant-rich, no sugar", calories: 0 },
  ],
  Lunch: [
    { time: "1:00 PM", name: "Grilled Chicken Salad", description: "Mixed greens, cherry tomatoes, grilled chicken", calories: 350 },
    { time: "1:30 PM", name: "Quinoa Bowl", description: "Quinoa, black beans, corn, avocado", calories: 400 },
    { time: "2:00 PM", name: "Lemon Water", description: "Refreshing and hydrating", calories: 0 },
  ],
  Snacks: [
    { time: "4:00 PM", name: "Greek Yogurt", description: "Low-fat, with honey drizzle", calories: 150 },
    { time: "4:30 PM", name: "Mixed Nuts (Handful)", description: "Almonds, walnuts, cashews", calories: 200 },
    { time: "5:00 PM", name: "Apple Slices", description: "Fresh and crunchy", calories: 80 },
  ],
  Dinner: [
    { time: "7:30 PM", name: "Baked Salmon", description: "With herbs and lemon", calories: 300 },
    { time: "8:00 PM", name: "Steamed Broccoli", description: "Lightly seasoned", calories: 50 },
    { time: "8:30 PM", name: "Brown Rice", description: "Small portion", calories: 180 },
  ],
};

const MealPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MealCategory>("Breakfast");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">🗓️ Daily Meal Plan</h1>
      <div className="flex justify-center space-x-4 mb-6">
        {(["Breakfast", "Lunch", "Snacks", "Dinner"] as MealCategory[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
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
          {mealData[activeTab].map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{item.time}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealPlan;
