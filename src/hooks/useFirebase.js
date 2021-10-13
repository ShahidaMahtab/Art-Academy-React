import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //facebook
  const signInUsingFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //profile update
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => setError(error.message));
  };
  //Register with email and password
  const RegisterUsingEmail = (email, password) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        verifyEmail();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //sign in using email and password
  const LoginUsingEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //send verification mail
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      setError("");
    });
  };
  //Reset Password
  const handleResetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    error,
    signInUsingFacebook,
    signInUsingGithub,
    signInUsingGoogle,
    RegisterUsingEmail,
    LoginUsingEmail,
    handleResetPassword,
    logOut,
    setUserName,
  };
};
export default useFirebase;
