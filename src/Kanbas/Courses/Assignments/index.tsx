import AssignmentButtons from "./AssignmentButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentItem from "./AssignmentItem";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchBar from "./SearchBar";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <SearchBar />
        </div>

        <div className="d-flex">
          <AssignmentButtons />
        </div>
      </div>

      <ul className="list-group rounded-0" id="wd-modules">
        <li
          className="list-group-item p-0"
          style={{ borderLeft: "5px solid #00a651" }}
        >
          <div className="wd-title p-3 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-2" />
              <h3 id="wd-assignments-title">ASSIGNMENTS</h3>
            </div>
            <div
              id="wd-assignments-title"
              className="d-flex align-items-center p-2"
            >
              <span className="badge bg-light text-dark me-2">
                40% of Total
              </span>
              <FiPlus className="me-2" />
              <IoEllipsisVertical />
            </div>
          </div>

          {/* ASSIGNMENT LIST */}
          <ul className="wd-assignment-list list-group rounded-0">
            <AssignmentItem
              title="A1 - ENV + HTML"
              modules="Multiple Modules"
              availableDate="May 6 at 12:00am"
              dueDate="May 13 at 11:59pm"
              points={100}
            />
            <AssignmentItem
              title="A2 - CSS + BOOTSTRAP"
              modules="Multiple Modules"
              availableDate="May 13 at 12:00am"
              dueDate="May 20 at 11:59pm"
              points={100}
            />
            <AssignmentItem
              title="A3 - JAVASCRIPT + REACT"
              modules="Multiple Modules"
              availableDate="May 20 at 12:00am"
              dueDate="May 27 at 11:59pm"
              points={100}
            />
          </ul>
        </li>
      </ul>
    </div>
  );
}
