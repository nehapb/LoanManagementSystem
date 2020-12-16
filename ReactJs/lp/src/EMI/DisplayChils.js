import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const DisplayChild = ({ func, text }) => {
  return (
    <strong>
      {func} {text}
    </strong>
  );
};

DisplayChild.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No value provided"
};

DisplayChild.propTypes = {
  func: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default DisplayChild;
