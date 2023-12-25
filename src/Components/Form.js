import React from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { basicSchema } from "../Schema/Index";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function Detail() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        number: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div>
      <Form>
        <b>Basic Details</b>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your firstname"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.firstName && touched.firstName ? "input-error" : ""
            }
          />
        </Form.Group>

        {errors.firstName && touched.firstName && (
          <p className="error">{errors.firstName}</p>
        )}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your lastname"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastName && touched.lastName ? "input-error" : ""}
          />
          {errors.lastName && touched.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text" // Change the type to "text"
            placeholder="03061234567"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.number && touched.number ? "input-error" : ""}
          />
        </Form.Group>
      </Form>

      <hr />

      <div className="footer">
        <span className="go-back">
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back
        </span>
        <span className="right-btn" onClick={handleSubmit}>
          Next: <b>Summery</b>{" "}
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default Detail;
