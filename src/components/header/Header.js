import React from "react";
import "./Header.css";
import { Jumbotron} from "react-bootstrap";
import './Header.css';


const Header = () => {
    return (
        <Jumbotron className="jumbo">
            <h1 style={{color: '#DADCDD'}}>Search 4 Fight</h1>
            <p style={{color: '#DADCDD'}}>Boxing Fight Searcher</p>
        </Jumbotron>
    );
};

export default Header;