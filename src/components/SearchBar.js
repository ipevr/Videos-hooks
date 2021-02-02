import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search Videos</label>
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
