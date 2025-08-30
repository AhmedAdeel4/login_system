import { Field, Form, Formik } from "formik";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { yupValidation } from "../../Components/Validation/yupValidation";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  function handelSignUp(values, actions) {
    const newData = { ...values };
    delete newData.cpassword;
    axios
      .post("http://localhost:3004/users", newData)
      .then(() => console.log("SignUp successfully"));
    actions.resetForm();
    navigate("/login");
  }

  const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <Card>
        <Card.Body>
          <h1 className="mb-3">Sign Up</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={yupValidation}
            onSubmit={handelSignUp}
          >
            {({ errors }) => (
              <Form>
                <div className="mb-3">
                  <div>
                    <label htmlFor="name">Name :</label>
                    <Field
                      class="form-control"
                      name="name"
                      id="name"
                      type="text"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.name && <small>{errors.name}</small>}
                  </span>
                </div>

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

                <div className="mb-3">
                  <div>
                    <label htmlFor="cpassword">Confirm Password :</label>
                    <Field
                      class="form-control"
                      name="cpassword"
                      id="cpassword"
                      type="password"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.cpassword && <small>{errors.cpassword}</small>}
                  </span>
                </div>

                <button className="btn btn-primary w-100 mb-3" type="submit">
                  SignUp
                </button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
