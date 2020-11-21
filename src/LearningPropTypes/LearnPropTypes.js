import React from "react";
import PropTypes from "prop-types";
const LearnPropTypes = (props) => {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Age: {props.age} </div>
      <div>{props.objectsProps.id}</div>
      <div>
        {props.shapeProps.sem} : {props.shapeProps.rollNo}
      </div>
    </div>
  );
};

export default LearnPropTypes;

LearnPropTypes.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  objectsProps: PropTypes.object,
  shapeProps: PropTypes.shape({
    sem: PropTypes.string,
    rollNo: PropTypes.number,
  }).isRequired,
  funcProps: PropTypes.func,
  arrayProps: PropTypes.arrayOf(PropTypes.number),
};

LearnPropTypes.defaultProps = {
  shapeProps: {
    sem: "NOT GIVEN",
    rollNo: 0, // if I pass here invalid type it will yell
  },
};
