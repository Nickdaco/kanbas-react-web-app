import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module{" "}
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button
          className="btn btn-lg btn-secondary
                           dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark /> Publish All{" "}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>{" "}
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
