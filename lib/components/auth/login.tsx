import { Formik, Form, Field, ErrorMessage } from "formik";

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(props) => {
        const { isSubmitting } = props;
        return (
          <Form>
            <label htmlFor="email" className="block my-2">
              <span>Email:</span>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="block border-2 outline-none w-full my-1 px-1"
              />
              <ErrorMessage name="email" component="div" />
            </label>
            <label htmlFor="password" className="block my-2">
              <span>Password:</span>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="block border-2 outline-none w-full my-1 px-1"
              />
              <ErrorMessage name="password" component="div" />
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border-2 border-blue-900 px-2 py-0.5 text-blue-900 bg-white hover:bg-blue-900 transition-colors hover:text-white my-3"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
