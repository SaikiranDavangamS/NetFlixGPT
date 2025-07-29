import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        const message = ValidateData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;
        // Sign In Sign Up Logic

        if (!isSignInForm) {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,photoURL: "https://avatars.githubusercontent.com/u/174199282?s=400&u=0ec649d149e3d6a4242d05ebab241b4a0887f947&v=4"
                    }).then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(setUser({
                          uid:uid,
                          email:email,
                          displayName:displayName,
                          photoUrl:photoURL
                        }))
                        navigate("/browse")

                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        } else {
            //SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // dispatch(setUser(user))
                    navigate("/browse")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }

    }
    return (
        <div>
            <Header />
            <div className="absolute">

                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="logo" />

            </div>

            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12  my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-[rgba(0,0,0,0.8)]">

                <h1 className="font-bold text-3xl text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700  rounded-lg" />}
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700  rounded-lg" />
                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-4 text-white bg-red-700 w-full rounded-lg" onClick={() => handleButtonClick()}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4" onClick={() => toggleSignInForm()}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now..."}</p>
            </form>


        </div>

    )
}

export default Login;