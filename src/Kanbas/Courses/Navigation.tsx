import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div className="list-group wd rounded-0" id="wd-courses-navigation">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`;

        const isActive = pathname.includes(link);

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border-0 ${
              isActive ? "active bg-white text-danger" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
