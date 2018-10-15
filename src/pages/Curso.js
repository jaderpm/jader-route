import React from "react";

export default function Cursos(props) {
  return <h1>{props.match.params.name}</h1>;
}
