import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className="absolute">

                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="logo"/>

            </div>

            <form className="w-3/12 absolute p-12  my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-[rgba(0,0,0,0.8)]">

            <h1 className="font-bold text-3xl text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700  rounded-lg"/>}
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700  rounded-lg"/>
                <button className="p-4 my-4 text-white bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4" onClick={() => toggleSignInForm()}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now..."}</p>
            </form>


        </div>

    )
}

export default Login;