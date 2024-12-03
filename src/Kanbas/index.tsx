import { Navigate, Route, Routes } from "react-router";
import Session from "./Account/session";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

import "./styles.css";
import * as courseClient from "./Courses/client";

import enrollmentsData from "./Database/enrollments.json";
import * as userClient from "./Account/client";

import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  // const fetchCourses = async () => {
  //   try {
  //     const courses = await courseClient.fetchAllCourses();
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const fetchCourses = async () => {
  //   try {
  //     const courses = await userClient.findMyCourses();
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const [enrollments, setEnrollments] = useState(enrollmentsData);

  // const addNewCourse = async () => {
  //   setCourses([
  //     ...courses,
  //     { ...course, _id: new Date().getTime().toString() },
  //   ]);
  // };
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);

    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
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
    <Session>
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
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
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
    </Session>
  );
}
