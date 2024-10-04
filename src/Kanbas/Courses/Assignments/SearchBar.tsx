import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the magnifying glass icon
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

export default function SearchBar() {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <FaSearch />
        </span>
      </div>
      <input
        id="wd-search=assignment"
        type="text"
        className="form-control"
        placeholder="Search..."
      />
    </div>
  );
}
