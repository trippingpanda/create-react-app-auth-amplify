import React, { Component } from 'react';
import ZerodhaLogin from '../loginsection/zerodha';


const initData = {
    heading: "Power to your portfolio",
    content: "",
    btnText: "Login With Zerodha",
    btnTextTwo: "Read More",
    welcomeThumb: "/img/welcome_mockup_2.png",
    iconClass: "icofont-ui-play"
}

class welcomeOne extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="home" className="section welcome-area d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-5 col-lg-6">
                        <div className="welcome-intro">
                        <h1>Finzr</h1>
                        <h3 className="fw-3 mt-2 mt-sm-3">{this.state.data.heading}</h3>
                        <p className="my-3">{this.state.data.content}</p>
                        </div>
                        <ZerodhaLogin/>
                    </div>
                    <div className="col-12 col-md-5 col-lg-6">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb text-center">
                        <img src={this.state.data.welcomeThumb} alt="" />
                        </div>
                        {/*/!* Video Icon *!/*/}
                        {/*<div className="video-icon d-none d-lg-block">*/}
                        {/*<a className="play-btn" data-fancybox href="https://www.youtube.com/watch?v=hs1HoLs4SD0">*/}
                        {/*    <i className={this.state.data.iconClass} />*/}
                        {/*</a>*/}
                        {/*</div>*/}
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}
// var spans = document.getElementById('loginzerodha');
// spans.onclick=doSomething;
//
// function doSomething()
// {alert("this");}
export default welcomeOne;