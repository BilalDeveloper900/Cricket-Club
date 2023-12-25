import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstName: yup.string().min(2, "Too short").required("Required"),
  lastName: yup.string().min(2, "Too short").required("Required"),
  number: yup
    .number()
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(10, "Number must be at least 10")
    .required("Required"),
});
