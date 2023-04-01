import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid lg:grid-cols-2 gap-2 lg:gap-y-4 lg:gap-x-6"
    >
      <div>
        <label className="text-xs" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="block border border-black w-full rounded-sm px-2 py-1 mt-1 text-sm"
        />
      </div>

      <div>
        <label className="text-xs" htmlFor="lastName">
          Last Name
        </label>
        <input
          id="lastName"
          name="text"
          type="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="block border border-black w-full rounded-sm px-2 py-1 mt-1 text-sm"
        />
      </div>

      <div>
        <label className="text-xs" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="block border border-black w-full rounded-sm px-2 py-1 mt-1 text-sm"
        />
      </div>

      <div>
        <label className="text-xs" htmlFor="email">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="block border border-black w-full rounded-sm px-2 py-1 mt-1 text-sm"
        />
      </div>

      <div className="my-3 col-span-2">
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          <p className="text-xs">I agree to the terms and policy</p>
        </div>
      </div>

      <button
        type="submit"
        className="bg-black col-span-2
       text-white py-2 text-sm justify-self-center w-1/3"
      >
        Register Now
      </button>
    </form>
  );
};

export default SignupForm;
