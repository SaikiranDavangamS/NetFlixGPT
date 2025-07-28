import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browser";

const Body = () => {

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