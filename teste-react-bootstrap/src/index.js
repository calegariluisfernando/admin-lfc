import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
/**
 * Importado assim apenas para ver o Webpack trabalhando.
 * Nota "Top" pra caralho.
 */
import 'bootstrap/scss/bootstrap.scss';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
