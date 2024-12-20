import { useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function TOC() {
  const { pathname } = useLocation();

  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" id="wd-a" to="/Labs">
            Labs {pathname}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
            id="wd-a1"
            to="/Labs/Lab1"
          >
            Lab 1
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
            id="wd-a2"
            to="/Labs/Lab2"
          >
            Lab 2
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
            id="wd-a3"
            to="/Labs/Lab3"
          >
            Lab 3
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
            id="wd-a4"
            to="/Labs/Lab4"
          >
            Lab 4
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
            id="wd-a4"
            to="/Labs/Lab5"
          >
            Lab 5
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              pathname.includes("Kanbas") ? "active" : ""
            }`}
            id="wd-k"
            to="/Kanbas"
          >
            Kanbas
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            id="wd-github"
            to={"https://github.com/Nickdaco/kanbas-react-web-app/tree/main"}
          >
            https://github.com/Nickdaco/kanbas-react-web-app/tree/main
          </Link>
        </li>
      </ul>
    </div>
  );
}
