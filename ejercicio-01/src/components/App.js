import '../stylesheets/App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      sel: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    console.log(ev.target);

    this.setState({
      [ev.target.id]: ev.target.value,
    });
  }

  render() {
    return (
      <div className="card">
        <h1 className="headerTitle">Formulario para pelis</h1>
        <form action="">
          <label htmlFor="name"> Nombre:</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} /> <label htmlFor="description"> Descripción: </label>
          <textarea value={this.state.description} id="description" onChange={this.handleChange}></textarea>
          <select className="container__select" name="sel" id="sel" value={this.state.sel} onChange={this.handleChange}>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
          <input type="submit" value="Enviar" />
        </form>
        <p>{this.state.name}</p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default App;
