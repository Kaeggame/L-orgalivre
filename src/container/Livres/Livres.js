import React, { Component } from "react";
import Livre from "./Livre/Livre"


class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"One piece N°1", auteur:"Eiichirō Oda", nbPages:200},
            {id:2, titre:"One piece N°2", auteur:"Eiichirō Oda", nbPages:200},
            {id:3, titre:"One piece N°3", auteur:"Eiichirō Oda", nbPages:200},
            {id:4, titre:"One piece N°4", auteur:"Eiichirō Oda", nbPages:200},
            {id:5, titre:"One piece N°5", auteur:"Eiichirō Oda", nbPages:200},
            {id:6, titre:"One piece N°6", auteur:"Eiichirō Oda", nbPages:200},
        ]
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(l =>{
            return l.id === id;
        })
        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({livres:newLivres});
    }
    render(){
        return (
            <table className="table text-center">
                <thead>
                    <tr className="table-dark">
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Nombre de pages</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.livres.map(livre  => {
                            return (                   
                                <tr key={livre.id}>
                                    <Livre
                                        titre={livre.titre}
                                        auteur={livre.auteur}
                                        nbPages={livre.nbPages}
                                        suppression={() => this.handleSuppressionLivre(livre.id)}
                                    />
                                </tr>
                                    );
                        })
                    }
                </tbody>
            </table>
        );
    }
}
export default Livres;