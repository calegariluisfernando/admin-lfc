import React, { Component } from "react";

class ContadorDeClick extends Component{

    constructor(props) {
        super(props);

        this.state = { clicks: 0 };
    }

    addClick = click => {

        this.setState({ clicks: click });
    };

    render() {

        return (
            <div>
                <p>Você clicou { this.state.clicks } vezes</p>
                <button onClick={() => this.addClick(this.state.clicks + 1)}>Click</button>
            </div>
        );
    }
}

export default ContadorDeClick;
