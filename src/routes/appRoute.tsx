import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorComponent from "../components/ErrorComponent-KS";
import Dashboard from "../pages/Dashboard";
import BMICalculator from "../components/BMICalculator";
import MealPlan from "../components/DailyMealPlan";
import WeeklyMealPlan from "../components/WeeklyMealPlan";

export const router = createBrowserRouter([
  
{ path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <ErrorComponent /> },
  
{
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <BMICalculator />
      },
      {
        path: 'daily-mealPlan',
        element: <MealPlan />
      },
      {
        path: 'weekly-mealPlan',
        element: <WeeklyMealPlan />
      }
    ]
  }


]);

export default router