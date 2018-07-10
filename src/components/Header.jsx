import React from 'react'

export default (props) =>
    <header className="row">
        <div className="col-12">
            <h1>{props.title}</h1>
            <p style={{fontSize: "14pt"}}>{props.desc}</p>
        </div>
    </header>

