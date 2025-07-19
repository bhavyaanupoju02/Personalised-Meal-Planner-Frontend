import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => 
{
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ): Promise<void> => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/login", values);

      if (response.status === 200) {
        const profile = {
          email: response.data.user.email,
          role: response.data.user.role,
          id: response.data.user._id,
        };
        dispatch(login({ accessToken: response.data.token, user: profile }));
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only Gmail addresses allowed")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center">User Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div>
        New user?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
}
export default Login;