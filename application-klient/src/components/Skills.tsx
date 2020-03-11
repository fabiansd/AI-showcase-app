import React from 'react';
import '../style/style.scss'
// import * as skills from '../jsonfiles/skills.json'

class Skills extends React.Component {
    render() {
        return (
            <div>
                {this.test()}
                asdf
            </div>
        );
    }

    private test = () => {
        var json = require('../jsonfiles/skills.json')
        console.log(json)
        for (var i in json){
            console.log(i)
        }
    }
}


export default Skills;