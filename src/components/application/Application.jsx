import React, { Component } from "react"
import "./Application.css"

import Stempel from "./Stempel"

class Application extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: false
        }
        this.addedStempel = this.addedStempel.bind(this)
        localStorage.setItem("done",0)
    }
    addedStempel(){
        localStorage.setItem("done", parseInt(localStorage.getItem("done"),10) + 1)
        if(parseInt(localStorage.getItem("done"),10) >= this.props.data.length) {
            this.setState({done: true})
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <p className="successtext">{this.state.done ? this.props.successtext : null}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="flex-grid">
                            {this.props.data.map((stempel, key) => {
                                return <Stempel key={key} wachtwoord={stempel.wachtwoord} naam={stempel.naam} logo={stempel.logo} callback={this.addedStempel}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="successtext">{this.state.done ? this.props.successtext : null}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Application