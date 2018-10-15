import React from "react";
import PropTypes from "prop-types";
export default class ComponenteCep extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { autores } = this.props;
    var lista = [];
    debugger;
    autores.map(autor => {
      lista.push(
        <div style={{ border: "black solid 1px" }}>
          <div style={{ border: "black solid 1px" }}>
            <div>
              <label>Cep: </label>
              <label>{autor.cep}</label>
            </div>
            <div>
              <label>Logradouro: </label>
              <label>{autor.logradouro}</label>
            </div>
          </div>
          <div style={{ border: "black solid 1px" }}>
            <div>
              <label>Complemento: </label>
              <label>{autor.complemento}</label>
            </div>
            <div>
              <label>Bairro: </label>
              <label>{autor.bairro}</label>
            </div>
          </div>
          <div style={{ border: "black solid 1px" }}>
            <div>
              <label>Localidade: </label>
              <label>{autor.localidade}</label>
            </div>
            <div>
              <label>Uf: </label>
              <label>{autor.uf}</label>
            </div>
          </div>
          <div style={{ border: "black solid 1px" }}>
            <div>
              <label>Unidade: </label>
              <label>{autor.unidade}</label>
            </div>
            <div>
              <label>Ibge: </label>
              <label>{autor.ibge}</label>
            </div>
          </div>
        </div>
      );
    });

    return <div>{lista}</div>;
  }
}
// return (
//   <div>
//     <List>
//       <ListItem>
//         <Avatar>
//           <WorkIcon />
//         </Avatar>
//         {classes.map(autor => {
//           return (
//             <ListItemText primary={autor.nome} secondary="Jan 7, 2014" />
//           );
//         })}
//         <ListItemText primary="Work" secondary="Jan 7, 2014" />
//       </ListItem>
//     </List>
//   </div>
// );
