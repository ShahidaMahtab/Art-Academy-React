import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
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
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    signInUsingGoogle,
    user,
    error,
    signInUsingFacebook,
    LoginUsingEmail,
    signInUsingGithub,
    handleResetPassword,
    setIsLoading,
    logOut,
  } = useAuth();
  const onSubmit = (data) => {
    const { email, password } = data;
    LoginUsingEmail(email, password);
  };
  const onClick = (data) => {
    const { email } = data;
    handleResetPassword(email);
  };
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  const handleGithubLogin = () => {
    signInUsingGithub()
      .then(() => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  const handleFaceBookLogin = () => {
    signInUsingFacebook()
      .then(() => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Container className="mt-5 p-5 d-flex justify-content-center align-item-center">
      {!(user.email || user.displayName) ? (
        <div className="w-md-50 border border-3 border-white shadow-lg py-4 px-5 mb-5">
          <h4 className="mb-5">Please Login</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  defaultValue={user?.email}
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
                    <span>This field is required</span>
                  ) : (
                    <span>The password must contain one uppercase</span>
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
            <button
              onClick={handleSubmit(onClick)}
              className=" mb-2 border border-info text-info fw-bold"
            >
              forgot password ?
            </button>
          </form>
          <div>
            <p className="text-secondary mb-2">or sign in with</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-dark me-2 border border-0 rounded"
            >
              <FontAwesomeIcon icon={["fab", "google"]} />
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-dark me-2 border border-0 rounded"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </button>
            <button
              onClick={handleFaceBookLogin}
              className="btn btn-dark me-2 border border-0 rounded"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </button>
          </div>
          <p className="mt-3">
            New User? <Link to="/register">create an account</Link>
          </p>
        </div>
      ) : (
        <div className="border border-3 border-white mb-5 shadow-lg">
          <div className="p-5">
            <p className="text-secondary fs-5 fw-bold">
              {user.displayName || user.email} <br />
              <small className="text-success">
                <FontAwesomeIcon icon={faCheckCircle} /> successfully signed in
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

export default Login;
