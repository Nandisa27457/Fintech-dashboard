import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Router>
                <Routes>
                  <Route path= "/" element ={<Dashboard/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
