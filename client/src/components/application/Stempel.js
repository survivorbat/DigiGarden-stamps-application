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
        const stempelstyle = {backgroundImage: 'url(img/'+this.props.logo+')'}
        this.setState({stempelstyle});
        const wachtwoord = this.props.wachtwoord;
        this.setState({wachtwoord});
    }
    componentDidMount(){
        try {
            if(localStorage.getItem(this.props.naam).toUpperCase()===this.state.wachtwoord.toUpperCase()){
                this.passwordRequire(localStorage.getItem(this.props.naam));
            }
        }
        catch(e){
            
        }
    }
    passwordRequire(password){
        if(this.state.behaald===false){
            if(password!==this.state.wachtwoord){
                password = window.prompt("Voer de code in voor stand "+this.props.naam,"","");
            }
            if(password==="" || password===undefined || password===null) {} else if(password.toUpperCase()===this.state.wachtwoord.toUpperCase()){
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
            } else {alert('Die code was helaas fout, probeert u het nog een keer');}
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