import React, { Component } from 'react';

class zerodha extends Component {
    render() {
        return (
            <section className="button-group">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMRXUhlbXYC7vhkF8PleiaIxRcMvoq9PpHdNath3cJBcPFRw/viewform" className="btn btn-bordered" target="_blank">Join Finzr</a>
                <a href="https://kite.zerodha.com/connect/login?v=3&api_key=rzw4912554top6zz" className="btn btn-bordered">Check Zerodha Portfolio</a>
                <a href="#" className="btn btn-bordered">Read More</a>
            </section>
        );
    }
}

// var spans = document.getElementById('loginzerodha');
// spans.onclick=doSomething;
//
// function doSomething()
// {alert("this");}
export default zerodha;