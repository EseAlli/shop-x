import React from "react";
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
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
      className="grid lg:grid-cols-2 gap-2 lg:gap-y-4 lg:gap-x-4"
    >
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
          className="block border border-black w-full rounded-sm px-2 py-2 mt-1 text-sm"
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
          className="block border border-black w-full rounded-sm px-2 py-2 mt-1 text-sm"
        />
      </div>

      <div className="flex justify-end w-full col-span-2">
        <p className="text-sm underline">Forgot password?</p>
      </div>

      <button
        type="submit"
        className="bg-black col-span-2
       text-white py-2 text-sm justify-self-center w-1/3"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
