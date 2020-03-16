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
                <footer className="footer">
                    <p>
                        <a
                            className="link"
                            href="https://www.linkedin.com/home/?originalSubdomain=no"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIN
                        </a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;
