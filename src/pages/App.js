import React from "react";
import { Link } from "react-router-dom";

const dados = {
  cursos: "geografia",
  tempo: 1
};
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <nav className="nav is-tab has-shadow">
          <div className="nav-left">
            <Link to="/home" className="nav-item is-tab">
              Home
            </Link>
            <Link to={"/cursos/" + dados.cursos} className="nav-item is-tab">
              Cursos
            </Link>
            <Link to="/sobre" className="nav-item is-tab">
              Sobre
            </Link>
          </div>
        </nav>
        <section className="section">
          <div cursos={this.props.cursos} className="container">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}
