import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render(){
        return (
            <header className="row">
                <div className="col-sm-12">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </header>
        );
    }
}

export default Header;
