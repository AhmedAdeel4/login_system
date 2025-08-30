import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logInSchema from "../../Components/Validation/logInSchema";
import { useRecoilState } from "recoil";
import { $auth, $Name } from "../../Components/store/auth";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useRecoilState($auth);
  const [user, setUser] = useRecoilState($Name);

  async function handelLogin(values, actions) {
    setLoading(true);
    try {
      const respons = await axios.get(
        `http://localhost:3004/users?email=${values.email}&password=${values.password}`
      );
      if (respons.data.length) {
        const authData = { isAuth: true, user: respons.data[0] };
        setAuth(authData);
        setUser(authData.user.name);
        localStorage.setItem("logged in", JSON.stringify(authData));
        navigate("/");
      }
    } catch {
      console.log("Data Error");
    } finally {
      setLoading(false);
      actions.resetForm();
      console.log(user);
      console.log(auth);
    }
  }

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <Card>
        <Card.Body>
          <h1 className="mb-3">Login</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={logInSchema}
            onSubmit={handelLogin}
          >
            {({ errors }) => (
              <Form>
                <div className="mb-3">
                  <div>
                    <label htmlFor="email">Email :</label>
                    <Field
                      class="form-control"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.email && <small>{errors.email}</small>}
                  </span>
                </div>

                <div className="mb-3">
                  <div>
                    <label htmlFor="password">Password :</label>
                    <Field
                      class="form-control"
                      name="password"
                      id="password"
                      type="password"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.password && <small>{errors.password}</small>}
                  </span>
                </div>

                <button
                  className="btn btn-primary w-100 mb-3"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <Link to="/forgotpassword">Forgot Password </Link>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
      <div>
        Create an account <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}
