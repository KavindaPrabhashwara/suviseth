import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <div className="mainbox">
            <div className="err">4</div>
            <i id='spinQuestion' className="far fa-question-circle fa-spin"></i>
            <div className="err2">4</div>
            <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a id='home' href="home"><i className="fas fa-home"></i></a> and try from there.</p></div>
        </div>
    )
}

export default NotFound;
