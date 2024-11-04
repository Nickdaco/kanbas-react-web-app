import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import AssignmentButtons from "./AssignmentButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchBar from "./SearchBar";
import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector } from "react-redux";

// NOTE TO SELF
// TODO check this page before submit
export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <SearchBar />
        </div>

        {currentUser.role === "FACULTY" && (
          <div className="d-flex">
            <AssignmentButtons />
          </div>
        )}
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
                {courseAssignments.length} Assignments
              </span>
              <IoEllipsisVertical />
            </div>
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {courseAssignments.map((assignment: any) => (
              <li key={assignment._id} className="list-group-item">
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
