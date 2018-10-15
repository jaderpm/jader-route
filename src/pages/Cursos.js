import React from "react";
import axios from "axios";
import ComponenteCursos from "../components/ComponenteCursos";

export default class Cursos extends React.Component {
  constructor() {
    super();
    this.state = { autores: [], autores2: [] };
  }

  render() {
    return <ComponenteCursos autores={this.state.autores} />;
  }
  componentWillMount() {
    const { autores } = this.state.autores;
    var that = this;
    var cep = this.props.match.params.name;
    axios
      .get("https://viacep.com.br/ws/" + cep + "/json/")
      .then(function(response) {
        that.setState({ autores: [response.data] });
      });
  }
}
