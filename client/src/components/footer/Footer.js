import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render(){
        return (
            <footer className="row">
                <section className="col-sm-12">
                    {this.props.copyright}
                </section>
            </footer>
        );
    }
}

export default Footer;
