import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Compare from "./pages/Compare";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route

path="/"

element={<Home/>}

/>

<Route

path="/compare"

element={<Compare/>}

/>

</Routes>

</BrowserRouter>

)

}

export default App;