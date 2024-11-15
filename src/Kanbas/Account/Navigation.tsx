import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  return (
    <div className="wd list-group rounded-0" id="wd-account-navigation">
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
