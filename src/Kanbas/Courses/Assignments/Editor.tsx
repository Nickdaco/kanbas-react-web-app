import React from "react";

const AssignmentEditor: React.FC = () => {
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
            defaultValue="A1"
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows={6}
            defaultValue="The assignment is available online"
          />
        </div>
        <div className="">
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
              <label htmlFor="assignmentGroup" className="form-label">
                Assignment Group
              </label>
            </div>
            <div className="col-md-4">
              <select className="form-select" id="wd-group">
                <option>ASSIGNMENTS</option>
              </select>
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <div className="col-md-2 text-md-end">
              <label htmlFor="displayGrade" className="form-label">
                Display Grade as
              </label>
            </div>
            <div className="col-md-4">
              <select className="form-select" id="wd-display-grade-as">
                <option>Percentage</option>
              </select>
            </div>
          </div>

          <div className="row mb-3 p-2 ">
            <div className="col-md-2 text-md-end align-top">
              <label htmlFor="submissionType" className="form-label">
                Submission Type
              </label>
            </div>
            <div className="col-md-4 border p-2 position-relative">
              <select className="form-select" id="wd-submission-type">
                <option>Online</option>
              </select>
              <label className="form-label">Online Entry Options</label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-text-entry"
                  />
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-website-url"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="websiteUrl">
                    Website URL
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-media-recordings"
                  />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-student-annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="studentAnnotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-file-upload"
                  />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-2 text-md-end">
            <label className="form-label pt-2">Assign</label>
          </div>
          <div className="col-md-6">
            <div className="border p-3">
              <div className="mb-3">
                <label htmlFor="assignTo" className="form-label">
                  Assign to
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="wd-assign-to"
                    defaultValue="Everyone"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">
                  Due
                </label>
                <div className="input-group">
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="wd-due-date"
                    defaultValue="2024-05-13T23:59"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="availableFrom" className="form-label">
                    Available from
                  </label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="wd-available-from"
                      defaultValue="2024-05-06T12:00"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="availableUntil" className="form-label">
                    Until
                  </label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="wd-available-until"
                      defaultValue="2024-05-06T12:00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2 text-md-end"></div>
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">
            Cancel
          </button>
          <button type="button" className="btn btn-danger">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentEditor;
