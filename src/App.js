import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import MyRouts from './routers/routes'

Amplify.configure(aws_exports);

class App extends Component {
    render() {
        return (
            <div>
                <MyRouts />
            </div>
        );
    }
}

export default App;
