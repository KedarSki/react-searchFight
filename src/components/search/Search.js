import React, { useState } from "react";
import "./Search.css";
import { InputGroup, FormControl } from "react-bootstrap";

const Search = (props) => {
  const [whatUserWant, setWhatUserWant] = useState("");

  const userTyped = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Search For Fight" onChange={userTyped} />
    </InputGroup>
  );
};

export default Search;
