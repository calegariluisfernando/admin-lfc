import React from 'react';
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <Link to="/" className="brand-logo ml-3">Casa do Código</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to='/autores' >Autores</Link></li>
                    <li><Link to='/livros'>Livros</Link></li>
                    <li><Link to='/sobre' >Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;
