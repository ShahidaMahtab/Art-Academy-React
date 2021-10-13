import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faFacebook, faGithub, faGoogle);
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log("errros", errors);
  const {
    signInUsingGoogle,
    user,
    error,
    signInUsingFacebook,
    RegisterUsingEmail,
    signInUsingGithub,
    setUserName,
    logOut,
  } = useAuth();
  const onSubmit = (data) => {
    // console.log(data);
    const { email, password, name } = data;
    RegisterUsingEmail(email, password);
    setUserName(name);
  };

  return (
    <Container className="mt-3 p-5 d-flex justify-content-center align-item-center">
      {!(user.email || user.displayName) ? (
        <div className="w-50 border border-3 border-white shadow-lg py-4 px-5 mb-5">
          <h4 className="mb-5">Create an Account</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="username"
                  defaultValue={user?.displayName}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  placeholder="abc@def.com"
                  {...register("email", {
                    required: true,
                    pattern: "abcd@def.com",
                  })}
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    pattern: /(?=.*?[A-Z])/,
                  })}
                />
                {errors.password &&
                  (errors.password.type === "required" ? (
                    <span className="text-danger">This field is required</span>
                  ) : (
                    <span className="text-danger">
                      The password must contain one uppercase
                    </span>
                  ))}
              </div>
            </div>
            <button
              type="submit"
              className="btnColor border border-1 border-btnColor text-white py-1 mt-2 px-3 rounded"
            >
              submit
            </button>
            <div className="mx-auto text-danger text-center mb-3">
              {error ? error : ""}
            </div>
          </form>
          <div>
            <p className="text-secondary mb-2">or sign in with</p>
            <button
              onClick={signInUsingGoogle}
              className="btn btn-dark me-2 border border-0 rounded"
            >
              <FontAwesomeIcon icon={["fab", "google"]} />
            </button>
            <button
              onClick={signInUsingGithub}
              className="btn btn-dark me-2 border border-0 rounded"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </button>
            <button
              onClick={signInUsingFacebook}
              className="btn btn-dark me-2 border border-0 rounded"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </button>
          </div>
          <p className="mt-3">
            Already Registered? <Link to="/login">Sign In</Link>
          </p>
        </div>
      ) : (
        <div className="border border-3 border-white mb-5 shadow-lg">
          <div className="p-5">
            <p className="text-secondary fs-5 fw-bold">
              {user.displayName || user.email} <br />
              <small className="text-success">
                <FontAwesomeIcon icon={faCheckCircle} /> successfully registered
              </small>
            </p>
            <button
              className="btnColor d-flex mx-auto border border-0 border-btnColor text-white py-1 mt-2 px-3 rounded"
              onClick={logOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Register;
