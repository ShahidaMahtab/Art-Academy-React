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
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInUsingGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  //facebook
  const signInUsingFacebook = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
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
    setIsLoading(true);
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        verifyEmail();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //sign in using email and password
  const LoginUsingEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
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
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  return {
    user,
    error,
    isLoading,
    signInUsingFacebook,
    signInUsingGithub,
    signInUsingGoogle,
    RegisterUsingEmail,
    LoginUsingEmail,
    handleResetPassword,
    setIsLoading,
    logOut,
    setUserName,
  };
};
export default useFirebase;
