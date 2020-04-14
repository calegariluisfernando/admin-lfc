import React, { Component } from "react";

class Formulario extends Component {

    constructor(props) {

        super(props);

        this.estadoInicial = {
            nome: '',
            livro: '',
            preco: ''
        };

        this.state = this.estadoInicial;
    }

    escutadorDeInput = event => {

        const { name, value } = event.target;

        this.setState({
            [ name ]: value
        });
    };


    submitFormulario = () => {

        this.props.escutadorDeSubmit(this.state);
        this.setState(this.estadoInicial)
    };

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            value={nome}
                            onChange={this.escutadorDeInput}
                            className="validate"
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            name="livro"
                            type="text"
                            value={livro}
                            onChange={this.escutadorDeInput}
                            className="validate"
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            name="preco"
                            type="text"
                            value={preco}
                            onChange={this.escutadorDeInput}
                            className="validate"
                        />
                    </div>

                    <button
                        className="waves-effect waves-light indigo lighten-2 btn"
                        onClick={this.submitFormulario}
                        type="button">
                        Salvar
                    </button>
                </div>
            </form>
        );
    };

}

export default Formulario;
