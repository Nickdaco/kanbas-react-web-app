import React from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

const AssignmentEditor: React.FC = () => {
  const { cid, aid } = useParams();
  const { assignments } = db;

  const assignment = assignments.find(
    (assgn) => assgn._id === aid && assgn.course === cid
  );

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="assignmentName" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="wd-name"
            defaultValue={assignment.title}
            readOnly
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows={6}
            defaultValue="The assignment is available online"
          />
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-2 text-md-end">
            <label htmlFor="points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              id="wd-points"
              defaultValue={100}
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-2 text-md-end">
            <label htmlFor="dueDate" className="form-label">
              Due Date
            </label>
          </div>
          <div className="col-md-4">
            <input
              type="datetime-local"
              className="form-control"
              id="wd-due-date"
              defaultValue="2024-05-13T23:59"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-2 text-md-end">
            <label htmlFor="availableFrom" className="form-label">
              Available from
            </label>
          </div>
          <div className="col-md-4">
            <input
              type="datetime-local"
              className="form-control"
              id="wd-available-from"
              defaultValue="2024-05-06T12:00"
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button type="button" className="btn btn-secondary me-2">
              Cancel
            </button>
          </Link>

          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button type="button" className="btn btn-danger">
              Save
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AssignmentEditor;
