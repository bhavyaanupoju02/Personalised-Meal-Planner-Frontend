import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

// Defining the shape of the form values
interface RegisterFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  gender: "Male" | "Female" | "Other";
  password: string;
  age: number;
  height: number;
  weight: number;
  activity_level: "Sedentary" | "Lightly Active" | "Active" | "Very Active";
  dietary_preference: "Vegetarian" | "Vegan" | "Non-Vegetarian";
  health_goal: "Weight Loss" | "Weight Gain" | "Maintenance";
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: RegisterFormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  gender: "Male", 
  password: "",
  age: 0,
  height: 0,
  weight: 0,
  activity_level: "Sedentary", 
  dietary_preference: "Vegetarian", 
  health_goal: "Weight Loss" 
};

  const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, "Name must be at least 5 characters")
    .required("Required"),

  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only Gmail addresses allowed")
    .required("Required"),

  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Required"),

  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Select a valid gender")
    .required("Required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),

  age: Yup.number()
    .min(1, "Age must be greater than 0")
    .required("Required"),

  height: Yup.number()
    .min(0.5, "Height must be at least 0.5 meters")
    .required("Required"),

  weight: Yup.number()
    .min(20, "Weight must be at least 20 kg")
    .required("Required"),

  activity_level: Yup.string()
    .oneOf(["Sedentary", "Lightly Active", "Active", "Very Active"], "Select a valid activity level")
    .required("Required"),

  dietary_preference: Yup.string()
    .oneOf(["Vegetarian", "Vegan", "Non-Vegetarian"], "Select a valid dietary preference")
    .required("Required"),

  health_goal: Yup.string()
    .oneOf(["Weight Loss", "Weight Gain", "Maintenance"], "Select a valid health goal")
    .required("Required")
});
  const onSubmit = async (
  values: RegisterFormValues,
  { setSubmitting }: FormikHelpers<RegisterFormValues>
): Promise<void> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/register",
      values
    );
    console.log("Registration successful:", response.data);
    navigate("/login");
  } catch (err) {
    console.error("Registration error:", err);
  } finally {
    setSubmitting(false);
  }
};

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center">User Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-4">
          {/* Name and Email */}
          <div className="flex">
            <div className="m-2 w-full">
              <label htmlFor="name" className="block font-medium">Name</label>
              <Field type="text" name="name" id="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="m-4 w-full">
              <label htmlFor="email" className="block font-medium">Email</label>
              <Field type="email" name="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          {/* Phone and Gender */}
          <div className="flex">
            <div className="m-4 w-full">
              <label htmlFor="phoneNumber" className="block font-medium">Phone Number</label>
              <Field type="text" name="phoneNumber" id="phoneNumber" maxLength={10} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="m-4 w-full">
              <label htmlFor="gender" className="block font-medium">Gender</label>
              <Field as="select" name="gender" id="gender" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          {/* Password */}
          <div className="m-4">
            <label htmlFor="password" className="block font-medium">Password</label>
            <Field type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Age, Height, Weight */}
          <div className="flex">
            <div className="m-4 w-full">
              <label htmlFor="age" className="block font-medium">Age</label>
              <Field type="number" name="age" id="age" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="m-4 w-full">
              <label htmlFor="height" className="block font-medium">Height (mt)</label>
              <Field type="number" name="height" id="height" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              <ErrorMessage name="height" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="m-4 w-full">
              <label htmlFor="weight" className="block font-medium">Weight (kg)</label>
              <Field type="number" name="weight" id="weight" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              <ErrorMessage name="weight" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          {/* Activity Level */}
          <div className="m-4 w-full">
            <label htmlFor="activity_level" className="block font-medium">Activity Level</label>
            <Field as="select" name="activity_level" id="activity_level" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
              <option value="">Select</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Lightly Active">Lightly Active</option>
              <option value="Active">Active</option>
              <option value="Very Active">Very Active</option>
            </Field>
            <ErrorMessage name="activity_level" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Dietary Preference */}
          <div className="m-4 w-full">
            <label htmlFor="dietary_preference" className="block font-medium">Dietary Preference</label>
            <Field as="select" name="dietary_preference" id="dietary_preference" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
              <option value="">Select</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </Field>
            <ErrorMessage name="dietary_preference" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Health Goal */}
          <div className="m-4 w-full">
            <label htmlFor="health_goal" className="block font-medium">Health Goal</label>
            <Field as="select" name="health_goal" id="health_goal" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
              <option value="">Select</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Weight Gain">Weight Gain</option>
              <option value="Maintenance">Maintenance</option>
            </Field>
            <ErrorMessage name="health_goal" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Register
          </button>
        </Form>
      </Formik>
      <div className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </div>
    </div>
  </div>
);

};

export default Register;

