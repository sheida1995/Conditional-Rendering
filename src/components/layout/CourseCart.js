import React from "react";

function CourseCart(props) {
  return (
    <li>
      <h4>{props.data.name}</h4>
      <p>{props.data.description}</p>
    </li>
  );
}

export default CourseCart;
