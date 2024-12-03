import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div className="wd list-group rounded-0" id="wd-account-navigation">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${active(link)}`}
        >
          {" "}
          {link}{" "}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
      <Link
        className={`list-group-item border-0 ${
          pathname.includes("Signin")
            ? "active bg-white text-danger"
            : "text-danger"
        }`}
        to="/Kanbas/Account/Signin"
      >
        Signin
      </Link>

      <Link
        className={`list-group-item border-0 ${
          pathname.includes("Signup")
            ? "active bg-white text-danger"
            : "text-danger"
        }`}
        to="/Kanbas/Account/Signup"
      >
        Signup
      </Link>

      <Link
        className={`list-group-item border-0 ${
          pathname.includes("Profile")
            ? "active bg-white text-danger"
            : "text-danger"
        }`}
        to="/Kanbas/Account/Profile"
      >
        Profile
      </Link>
    </div>
  );
}
