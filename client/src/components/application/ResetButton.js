import React, { Component } from 'react';

class ResetButton extends Component {
    resetApp(){
        if(window.confirm("Weet u zeker dat u uw stempels wil resetten? Dit kan niet ongedaan gemaakt worden!") === true){
            window.localStorage.clear();
            window.location.reload();
        }
    }
    render(){
        return (
            <button className="btn btn-danger btn-xs" onClick={this.resetApp}>{this.props.text}</button>
        );
    }
}

export default ResetButton;