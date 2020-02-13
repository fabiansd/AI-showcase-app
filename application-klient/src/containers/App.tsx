import React, { Component } from 'react';
// import logo from './logo.svg';
import '../style/style.scss';
import Card from '../components/cv-plate';
import Footer from '../components/footer';
import Header from '../components/header';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <div>
                    <Card/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
