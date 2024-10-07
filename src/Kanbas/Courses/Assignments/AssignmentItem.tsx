import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { TfiPencilAlt } from "react-icons/tfi";

interface AssignmentItemType {
  title: string;
  modules: string;
  availableDate: string;
  dueDate: string;
  points: number;
}

export default function AssignmentItem({
  title,
  modules,
  availableDate,
  dueDate,
  points,
}: AssignmentItemType) {
  return (
    <li className="wd-assignment-list-item list-group-item p-3 border-0 border-top">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <TfiPencilAlt className="me-3 fs-5" />
          <div>
            <a
              className="wd-assignment-link mb-0 text-decoration-none text-dark fs-5"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              {title}
            </a>
            <div>
              <text className="text-danger">{modules} </text>
              <text className="text-secondary">
                | Not available until {availableDate} | Due {dueDate} | {points}{" "}
                pts
              </text>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <GreenCheckmark />
          <IoEllipsisVertical className="ms-2" />
        </div>
      </div>
    </li>
  );
}
