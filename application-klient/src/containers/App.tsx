import React, { Component } from 'react';
import '../style/style.scss';
import ArticleBody from '../components/articlebody';
import Footer from '../components/footer';
import Header from '../components/header';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <ArticleBody/>
                <Footer/>
            </div>
        );
    }
}

export default App;
