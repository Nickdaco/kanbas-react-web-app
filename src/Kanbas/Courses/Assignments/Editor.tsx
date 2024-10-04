export default function AssignmentEditor() {
  return (
    // <div className="container mt-4">
    // <div className="d-flex justify-content-between align-items-center mb-3">
    //   <div className="input-group w-50">
    //     <SearchBar />
    //   </div>

    //   <div className="d-flex">
    //     <AssignmentButtons />
    //   </div>
    // </div>

    <div className="container" id="wd-assignments-editor">
      <div className="row">
        ""
        <label htmlFor="wd-name">
          <h3>Assignment Name</h3>
        </label>
      </div>
      <div className="row">
        <input
          className="form-control mb-2"
          id="wd-name"
          value="A1 - ENV + HTML"
        />
        <textarea className="form-control" id="wd-description">
          The assignment is available online Submit a link to the landing page
          of
        </textarea>
      </div>
      <div className="row ">
        <table className="row text-end">
          <tr>
            <td align="right" valign="middle">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                className="dropdown-toggle mb-2"
                id="wd-points"
                value={100}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="middle">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select className="form-select mb-2" id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="assignments2">ASSIGNMENTS2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="middle">
              <label htmlFor="wd-display-grade-as">Assignment Group</label>
            </td>
            <td>
              <select className="form-select mb-2" id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="decimal">Decimal</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="in-person">In Person</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="left" valign="top">
              Online Entry Options
              <br />
              <input type="checkbox" id="wd-text-entry"></input>
              <label id="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url"></input>
              <label id="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings"></input>
              <label id="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation"></input>
              <label id="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload"></input>
              <label id="wd-file-upload">File Uploads</label>
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" />
            </td>
          </tr>
          <tr>
            <td align="left">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td align="left">
              <label htmlFor="wd-available-until">Available to</label>
            </td>
          </tr>
          <tr>
            <td>
              <input id="wd-available-from" type="date" />
            </td>
            <td>
              <input id="wd-available-until" type="date" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
