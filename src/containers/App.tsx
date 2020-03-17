import React, { Component } from 'react';
import Body from '../components/Body';
import Headline from '../components/Header';
import '../style/style.scss';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Headline/>
                <Body/>
            </div>
        );
    }
}

export default App;
