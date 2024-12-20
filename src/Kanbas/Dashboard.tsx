import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrollments,
  handleEnroll,
  handleUnenroll,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrollments: { _id: string; user: string; course: string }[];
  handleEnroll: (userId: string, courseId: string) => void;
  handleUnenroll: (userId: string, courseId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";
  const navigate = useNavigate();
  const [filterEnabled, setFilter] = useState(true);

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard ({currentUser && currentUser.role})
      </h1>
      <hr />
      {isFaculty && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
      )}
      {isStudent && (
        <div>
          <h5>
            View Enrollments
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => setFilter(!filterEnabled)}
            >
              Enrollments
            </button>
          </h5>
          <hr />
        </div>
      )}
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => {
            const userIsEnrolled = isEnrolled(course._id);
            return (
              <div
                key={course._id}
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          if (userIsEnrolled) {
                            navigate(`/Kanbas/Courses/${course._id}/Home`);
                          }
                        }}
                      >
                        Go
                      </button>
                      {isFaculty && (
                        <div className="d-flex">
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2"
                            id="wd-edit-course-click"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                      {isStudent && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            userIsEnrolled
                              ? handleUnenroll(currentUser._id, course._id)
                              : handleEnroll(currentUser._id, course._id);
                          }}
                          className={`btn ${
                            userIsEnrolled ? "btn-danger" : "btn-success"
                          }`}
                        >
                          {userIsEnrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
