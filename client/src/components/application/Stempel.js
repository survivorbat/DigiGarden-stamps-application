import React, { Component } from 'react';
import autoBind from 'react-autobind';

import './Stempel.css';

class Stempel extends Component {
    constructor(){
        super();
        this.state = {
            stempelstyle: {
                backgroundImage: { 
                    
                },
                opacity: 0.325
            },
            tickstyle: {
                color: 'red'
            },
            wachtwoord: 'test',
            behaald: false,
            behaaldtext: '✗',
            naam: ''
        };
        autoBind(this);
    }
    componentWillMount(){
        const stempelstyle = {backgroundImage: 'url(/img/'+this.props.logo+')'}
        this.setState({stempelstyle});
        const wachtwoord = this.props.wachtwoord;
        this.setState({wachtwoord});
    }
    componentDidMount(){
        if(localStorage.getItem(this.props.naam)===this.state.wachtwoord){
            this.passwordRequire(localStorage.getItem(this.props.naam));
        }
    }
    passwordRequire(password){
        if(this.state.behaald===false){
            if(password!==this.state.wachtwoord){
                password = window.prompt("Wat is het geheime woord van het kraampje "+this.props.naam+"?");
            }
            if(password==="" || password===undefined || password===null) {} else if(password===this.state.wachtwoord){
                this.props.callback();
                const behaald = true;
                this.setState({behaald});
                const behaaldtext = '✓';
                this.setState({behaaldtext});
                const stempelstyle = {
                    backgroundImage: 'url(/img/'+this.props.logo+')',
                    opacity: 1
                }
                this.setState({stempelstyle});
                const tickstyle = {color: 'green'};
                this.setState({tickstyle});
                localStorage.setItem(this.props.naam,this.state.wachtwoord);
            } else {alert('Dat woord was helaas fout, probeert u het nog een keer');}
        }
    }
    render() {
        return (
            <div className="stempel" onClick={this.passwordRequire} style={this.state.stempelstyle}>
                <div className="tick" style={this.state.tickstyle}>
                    {this.state.behaaldtext}
                </div>
            </div>
        )
    }
}

export default Stempel;