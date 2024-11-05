import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment as addAssignmentAction,
  updateAssignment as updateAssignmentAction,
} from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments =
    useSelector((state: any) => state.assignmentsReducer.assignments) || [];

  const existingAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );

  const [title, setTitle] = useState(
    existingAssignment ? existingAssignment.title : ""
  );
  const [description, setDescription] = useState(
    existingAssignment ? existingAssignment.description : ""
  );
  const [points, setPoints] = useState(
    existingAssignment ? existingAssignment.points : 0
  );
  const [dueDate, setDueDate] = useState(
    existingAssignment ? existingAssignment.dueDate : ""
  );
  const [availableFrom, setAvailableFrom] = useState(
    existingAssignment ? existingAssignment.availableFromDate : ""
  );
  const [availableUntil, setAvailableUntil] = useState(
    existingAssignment ? existingAssignment.availableUntilDate : ""
  );

  const isNewAssignment = !existingAssignment;

  const handleSave = () => {
    const newAssignment = {
      _id: aid || new Date().getTime().toString(),
      title,
      description,
      points,
      dueDate,
      availableFromDate: availableFrom,
      availableUntilDate: availableUntil,
      course: cid,
    };

    if (isNewAssignment) {
      dispatch(addAssignmentAction(newAssignment));
    } else {
      dispatch(updateAssignmentAction(newAssignment));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter assignment description"
          />
        </div>

        <div
          className="row mb-3 align-items-center"
          style={{ maxWidth: "400px" }}
        >
          <div className="col-4 text-md-end">
            <label htmlFor="points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              id="wd-points"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </div>
        </div>

        <div
          className="d-flex align-items-center mb-4"
          style={{ maxWidth: "400px" }}
        >
          <label className="assign-label me-3">Assign</label>
          <fieldset className="assign-fieldset border p-3 flex-grow-1">
            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="dueDate" className="form-label">
                  Due
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="wd-due-date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label htmlFor="availableFrom" className="form-label">
                  Available From
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="wd-available-from"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="availableTo" className="form-label">
                  Until
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="wd-available-to"
                  value={availableUntil}
                  onChange={(e) => setAvailableUntil(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="button" className="btn btn-danger" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
