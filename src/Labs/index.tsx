import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
export default function Labs() {
  return (
    <div id="wd-labs" className="container-fluid">
      <h1>Welcome to Web Dev</h1>
      <h2 id="wd-fullname">Nicholas Mamisashvili</h2>
      <a id="wd-github" href="https://github.com/Nickdaco/kanbas-react-web-app">
        https://github.com/Nickdaco/kanbas-react-web-app
      </a>

      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
