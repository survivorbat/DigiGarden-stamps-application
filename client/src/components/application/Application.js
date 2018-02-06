import React, { Component } from 'react';
import autoBind from 'react-autobind';

import './Application.css';

import Stempel from './Stempel';

class Application extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                stempels: [],
                size: 0
            },
            successtext: ''
        }
        autoBind(this);
        localStorage.setItem('done',0);
    }
    componentWillMount(){
        const data = {stempels: this.props.data, size: this.props.data.length};
        this.setState({data});
    }
    addedStempel(){
        localStorage.setItem('done',parseInt(localStorage.getItem('done'),10)+1);
        if(this.state.data.size<=parseInt(localStorage.getItem('done'),10) && this.state.data.size!== 0){
            console.log('Succes!');
            const successtext = this.props.successtext;
            this.setState({successtext});
        }
    }
    render() {
        return (
            <content>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="successtext">{this.state.successtext}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="flex-grid">
                            {this.props.data.map(stempel => {
                                return <Stempel wachtwoord={stempel.wachtwoord} naam={stempel.naam} logo={stempel.logo} callback={this.addedStempel}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="successtext">{this.state.successtext}</p>
                    </div>
                </div>
            </content>
        );
    }
}

export default Application;