import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { DeleteUser, setUser } from "../actions/userAction";
import { useEffect } from "react";

const Body = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(setUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    

  } else {
    dispatch(DeleteUser())

  }
});
    },[])

    return (
        <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/browse" element={<Browse/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}


export default Body;