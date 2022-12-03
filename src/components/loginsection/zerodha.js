import React, { Component } from 'react';
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

class zerodha extends Component {
    state = {
        data: {}
    }
    render() {
        return (
            <section className="button-group">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMRXUhlbXYC7vhkF8PleiaIxRcMvoq9PpHdNath3cJBcPFRw/viewform" className="btn btn-bordered d-none d-sm-inline-block" target="_blank">Join Finzr</a>
                <a href="https://kite.zerodha.com/connect/login?v=3&api_key=rzw4912554top6zz" className="btn btn-bordered d-none d-sm-inline-block">Check Zerodha Portfolio</a>
                <a href="#" className="btn btn-bordered d-none d-sm-inline-block">Read More</a>
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