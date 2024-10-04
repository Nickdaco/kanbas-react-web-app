import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentButtons from "./AssignmentButtons";
import { BsGripVertical } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import AssignmentItem from "./AssignmentItem";
import React from "react";
import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import GreenCheckmark from "./GreenCheckmark";
import SearchBar from "./SearchBar";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const assignments = [
    {
      id: "A1",
      title: "Multiple Modules",
      availableDate: "May 6 at 12:00am",
      dueDate: "May 13 at 11:59pm",
      points: 100,
    },
    {
      id: "A2",
      title: "Multiple Modules",
      availableDate: "May 13 at 12:00am",
      dueDate: "May 20 at 11:59pm",
      points: 100,
    },
    {
      id: "A3",
      title: "Multiple Modules",
      availableDate: "May 20 at 12:00am",
      dueDate: "May 27 at 11:59pm",
      points: 100,
    },
  ];
  const assignmentListStyle = {
    borderLeft: "5px solid #00a651",
    padding: "0",
  };
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
        {/* <li className="wd-module list-group-item  p-0 mb-5 border-gray"> */}

        <li className="list-group-item" style={assignmentListStyle}>
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-2" />
              <span>ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-light text-dark p-2">40% of Total</span>
              <FiPlus />
              <IoEllipsisVertical />
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment) => (
              <AssignmentItem key={assignment.id} {...assignment} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
