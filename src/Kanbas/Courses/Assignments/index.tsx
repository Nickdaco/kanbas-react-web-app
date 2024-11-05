import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import AssignmentButtons from "./AssignmentButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchBar from "./SearchBar";
import { IoEllipsisVertical } from "react-icons/io5";
import {
  addAssignment as addAssignmentAction,
  deleteAssignment as deleteAssignmentAction,
} from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const initialAssignments =
    useSelector((state: any) => state.assignmentsReducer.assignments) || [];
  const [assignments, setAssignments] = useState(initialAssignments);
  const [showDialog, setShowDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const addAssignment = (assignment: any) => {
    const newAssignment = {
      _id: new Date().getTime().toString(),
      ...assignment,
      course: cid,
    };
    setAssignments([...assignments, newAssignment]);
    dispatch(addAssignmentAction(newAssignment));
  };

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDialog(true);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignmentAction(assignmentToDelete._id));
      setAssignments(
        assignments.filter(
          (a: { _id: any }) => a._id !== assignmentToDelete._id
        )
      );
    }
    setShowDialog(false);
  };

  const cancelDelete = () => {
    setShowDialog(false);
    setAssignmentToDelete(null);
  };

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
                {assignments.length} Assignments
              </span>
              <IoEllipsisVertical />
            </div>
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  {currentUser.role === "FACULTY" && (
                    <FaTrash
                      className="text-danger cursor-pointer"
                      onClick={() => handleDeleteClick(assignment)}
                    />
                  )}
                </li>
              ))}
          </ul>
        </li>
      </ul>

      {showDialog && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this assignment?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
