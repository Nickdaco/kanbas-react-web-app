import { Link, useNavigate } from "react-router-dom"; // import useNavigate for manual navigation
import React, { useState } from "react";
import * as db from "./Database";
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
  const isStudent = currentUser?.role === "STUDENT";
  const navigate = useNavigate();

  // Check if the user is enrolled in the course
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
