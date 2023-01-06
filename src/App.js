import React, { Components } from 'react';
import TitreH1 from './components/titres/TitreH1';
import Bouton from "./components/bouton/Bouton";
import Livres from "./container/Livres/Livres";

class  App extends Components {
  state = {
    ajoutLivre : false
  }
  handleClicAjoutLivre = () =>{
    this.setState((oldState, props) => {
      return {ajoutLivre: !oldState.ajoutLivre}
    })
  }
  render(){
    return (
        <div className="container">
        <TitreH1>Page listant les livres</TitreH1>
          <Livres />
          <Bouton typeBtn="btn-success" css="w-100" clic={this.handleClicAjoutLivre}>{!this.state.ajoutLivre ? "Ajouter" : "Fermer l'ajout"}</Bouton>
        </div>
    );
}}

export default App;
