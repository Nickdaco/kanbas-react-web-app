import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import CoursesNavigation from "./Navigation";
import PeopleTable from "./People/Table";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizDetails from "./Quizzes/QuizDetails";
import QuestionsEditor from "./Quizzes/QuestionsEditor";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <div className="d-flex">
        <div>
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Assignments/new" element={<AssignmentEditor />} />

            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid" element={<QuizEditor />} />
            <Route
              path="Quizzes/:qid/Questions"
              element={<QuestionsEditor />}
            />
            <Route path="Quizzes/new" element={<QuizEditor />} />
            <Route path="Quizzes/new/Questions" element={<QuestionsEditor />} />
            <Route path="QuizDetails/:qid" element={<QuizDetails />} />

            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
