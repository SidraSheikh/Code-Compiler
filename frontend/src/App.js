import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import C from "./Components/C";
import Cpp from "./Components/Cpp";
import Python from "./Components/Python";
import HTML from "./Components/Html";
import Csspage from "./Components/csspage";
import Javascript from "./Components/Javascript";
import Java from "./Components/Java";
import ReactPage from "./Components/ReactPage";
import AuthPage from "./Components/AuthPage";
import Homepage from "./Components/Homepage";
import EditorScreen from "./Components/EditiorScreen";
import Mainpage from "./Components/Mainpage";
import LogoutPage from "./Components/LogoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<Csspage />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/python" element={<Python />} />
        <Route path="/c" element={<C />} />
        <Route path="/cpp" element={<Cpp />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/java" element={<Java />} />
        <Route path="/editorScreen" element={<EditorScreen />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
