import React, { useState, useEffect } from "react";

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState(170); // in cm
  const [weight, setWeight] = useState(65);  // in kg
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">BMI Calculator</h2>

      <div className="mb-4">
        <label className="block mb-1">Height (cms)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
        />
      </div>

      {bmi !== null && (
        <div className="mt-4">
          <p className="text-lg">
            <strong>BMI:</strong> {bmi}
          </p>
          <p className="text-lg">
            <strong>Category:</strong> {category}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
