import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { TfiPencilAlt } from "react-icons/tfi";

interface AssignmentItemProps {
  id: string;
  title: string;
  availableDate: string;
  dueDate: string;
  points: number;
}

const AssignmentItem: React.FC<AssignmentItemProps> = ({
  id,
  title,
  availableDate,
  dueDate,
  points,
}) => {
  return (
    <li className="list-group-item p-3 border-0 border-top">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <TfiPencilAlt className="me-3 fs-5" />
          <div>
            <h6 className="mb-0">{id}</h6>
            <div>
              <span className="text-danger">{title} </span>
              <span className="text-secondary">
                | Not available until {availableDate} | Due {dueDate} | {points}{" "}
                pts
              </span>
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
};

export default AssignmentItem;
