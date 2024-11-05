import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import * as db from "./Database";
import enrollmentsData from "./Database/enrollments.json"; // Import enrollments.json
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const [enrollments, setEnrollments] = useState(enrollmentsData);

  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };

  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
  };

  const handleEnroll = (userId: string, courseId: string) => {
    const newEnrollment = {
      _id: new Date().getTime().toString(),
      user: userId,
      course: courseId,
    };
    setEnrollments((prevEnrollments) => [...prevEnrollments, newEnrollment]);
  };

  const handleUnenroll = (userId: string, courseId: string) => {
    setEnrollments((prevEnrollments) =>
      prevEnrollments.filter(
        (enrollment) =>
          enrollment.user !== userId || enrollment.course !== courseId
      )
    );
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  enrollments={enrollments}
                  handleEnroll={handleEnroll}
                  handleUnenroll={handleUnenroll}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<div>Calendar</div>} />
          <Route path="/Inbox" element={<div>Inbox</div>} />
        </Routes>
      </div>
    </div>
  );
}
