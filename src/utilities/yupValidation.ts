import * as yup from "yup";

export const schemaSignUp = yup.object().shape({
  Name: yup.string().required(),
  Email: yup.string().required().email(),
  Password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  "Confirm Password": yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match"),
});

export const schemaSignIn = yup.object().shape({
  Email: yup.string().required().email(),
  Password: yup.string().required(),
});