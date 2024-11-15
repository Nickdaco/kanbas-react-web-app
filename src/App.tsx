import { Navigate, HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Labs from "./Labs";
import logo from "./logo.svg";
import Kanbas from "./Kanbas";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";
import Lab3 from "./Labs/Lab3";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
// import "./App.css";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Labs" />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/Labs/*" element={<Labs />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
