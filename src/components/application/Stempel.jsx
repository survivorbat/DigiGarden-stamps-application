import React, { Component } from 'react'

import './Stempel.css'

class Stempel extends Component {
    constructor(props){
        super(props)
        this.state = {
            stempelstyle: {
                backgroundImage: `url(/img/${props.logo})`,
                opacity: 0.325
            },
            tickstyle: {
                color: 'red'
            },
            behaald: false,
            behaaldtext: '✗',
            naam: ''
        }
        this.passwordRequire = this.passwordRequire.bind(this)
    }
    componentDidMount(){
        if(localStorage.getItem(this.props.naam) && localStorage.getItem(this.props.naam).toUpperCase()=== this.props.wachtwoord.toUpperCase()){
            this.passwordRequire(localStorage.getItem(this.props.naam))
        }
    }
    passwordRequire(password = null){
        if(!this.state.behaald && !password) {
            password = window.prompt(`Voer de code in voor stand ${this.props.naam}`)
        }

        if(this.props.wachtwoord.toUpperCase() === password.toUpperCase()){
            this.props.callback()
            const state = {
                stempelstyle: {
                    backgroundImage: 'url(/img/'+this.props.logo+')',
                    opacity: 1
                },
                tickstyle: {
                    color: "green"
                },
                behaaldtext: "✓"
            }
            this.setState(state)
            
            localStorage.setItem(this.props.naam,this.props.wachtwoord)

        } else {
            alert('Die code was helaas fout, probeert u het nog een keer')
        }
    }
    render() {
        return (
            <div className="stempel" onClick={() => this.passwordRequire()} style={this.state.stempelstyle}>
                <div className="tick" style={this.state.tickstyle}>
                    {this.state.behaaldtext}
                </div>
            </div>
        )
    }
}

export default Stempel