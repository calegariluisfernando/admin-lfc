import React, { Component, Fragment } from 'react';
import Header from "./Header";

class App extends Component {


    render() {

        return (
            <Fragment>
                <Header/>
                <div className="container-fluid">
                    <h1>Hello world!</h1>
                </div>
            </Fragment>
        );
    }

}

export default App;
