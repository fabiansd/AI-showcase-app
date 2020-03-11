import React from 'react';
import { Card, Divider, Grid, Header, Icon, List } from 'semantic-ui-react';
import * as arbeidserfaring from '../jsonfiles/arbeidserfaring.json';
import '../style/components.scss';
import Workcard from './Workcard';

interface bodyState {
    techSkills: string[];
    devSkills: string[];
    genSkills: string[];
    sportsNhobbies: string[];
}

class Body extends React.Component<{}, bodyState>{

    public state = {
        techSkills: ["Matlab (3yr)", "Python (3yr)", "C++/C (2yr)", "Java (1yr)", "Typescript (1yr)", "Golang (<1yr)"],
        devSkills: ["Git (3yr)", "Tensorflow (2yr)", "React (1yr)", "AWS (1yr)", "Docker (1yr)", "SQL (<1yr)"],
        genSkills: ["Certified SCRUM master", "Public speaking and presenting", "Mathematical problem solving"],
        sportsNhobbies: ["Kitesurfing", "Freediving and scuba diving", "Piano and (amateur)impro", "Reading Sci-fi"]
    };

    render() {
        return <div className="bodycard shadoweffect">
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column textAlign="left">
                        {this.renderPersonalInfo()}
                    </Grid.Column>
                    <Grid.Column floated="right">
                        <img src="fab_port2.png" alt="Profile"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Divider/>

            <div className="flex-container">
                <div className="flex-item-1">

                    <Header as='h2'>
                        <Icon name="building" />
                        <Header.Content>Work experience</Header.Content>
                    </Header>
                    {this.renderWorkcards()}

                    <Header as='h2'>
                        <Icon name="handshake outline" />
                        <Header.Content>Voluntary work</Header.Content>
                    </Header>


                </div>

                <div className="flex-item-2">
                    <Header as='h2'>
                        <Icon name="university" />
                        <Header.Content>Education</Header.Content>
                    </Header>
                    {this.renderEducation()}

                    <Header as='h3'>
                        <Icon name="group" />
                        <Header.Content>Skills</Header.Content>
                    </Header>
                    {this.renderUIList(this.state.genSkills)}

                    <Header as='h3'>
                        <Icon name="code" />
                        <Header.Content>Programming languages</Header.Content>
                    </Header>
                    {this.renderList(this.state.techSkills)}

                    <Header as='h3'>
                        <Icon name="configure" />
                        <Header.Content>Development tools</Header.Content>
                    </Header>
                    {this.renderList(this.state.devSkills)}

                    <Header as='h3'>
                        <Icon name="game" />
                        <Header.Content>Sports and hobbies</Header.Content>
                    </Header>
                    {this.renderList(this.state.sportsNhobbies)}

                </div>
            </div>
        </div>;
    }

    private renderPersonalInfo = () => {
        return (
            <div>
                <h2 id={"personal-info"}>
                    Fabian Sødal Dietrichson
                </h2>
                <h3 id={"personal-info"}>
                    fabiansd1402@gmail.com
                </h3 >
                <h3 id={"personal-info"}>
                    +47 41230038
                </h3>
                <h3 id={"personal-info"}>
                    <a href="http://www.linkedin.com/in/fabiansødaldietrichson">LinkedIn</a>
                </h3 >
            </div>);
    };

    private renderUIList = (skillList: string[]) => {
        return (

            <List divided relaxed className="list">
                {skillList.map(function(name, index){
                    return (
                        <List.Item className="list-item">
                            <List.Content>
                                <List.Header>{name}</List.Header>
                                <List.Description>{name}</List.Description>
                            </List.Content>
                        </List.Item>
                    );
                })}
            </List>
        );
    };

    private renderList = (skillList: string[]) => {
        return (

            <ul>
                <p>
                    {skillList.map(function(name, index){
                        return <li key={ index }>{name}</li>;
                    })}
                </p>
            </ul>

        );
    };

    private renderWorkcards = () => {
        return(
            <div className={"pt-1"}>
                <Workcard
                    company={arbeidserfaring.statnet.name}
                    ingress={arbeidserfaring.statnet.ingress}
                    who={arbeidserfaring.statnet.who}
                    goal={arbeidserfaring.statnet.goal}
                    results={arbeidserfaring.statnet.results}/>

                <Workcard
                    company={arbeidserfaring.tronderenergi.name}
                    ingress={arbeidserfaring.tronderenergi.ingress}
                    who={arbeidserfaring.tronderenergi.who}
                    goal={arbeidserfaring.tronderenergi.goal}
                    results={arbeidserfaring.tronderenergi.results}/>
            </div>
        );
    };


    private renderEducation = () => {
        return(
            <div>
                <div className="educard">
                    <Card className="workcard" fluid>
                        <Card.Content header="NTNU: norwegian University of Science and Technology" textAlign="left" />
                        <Card.Content textAlign="left">
                            <div>
                                Cybernetics and robotics
                            </div>
                            <div>
                                Master's degree
                            </div>
                            <div>
                                Aug 2013 to June 2018
                            </div>
                        </Card.Content>
                    </Card>
                </div>
                <div className="educard">
                    <Card className="workcard" fluid>
                        <Card.Content header="UCSB: University of California Santa Barbara" textAlign="left" />
                        <Card.Content textAlign="left">
                            <div>
                                Machine learning
                            </div>
                            <div>
                                Exchange - Graduate and undergraduate
                            </div>
                            <div>
                                Sep 2016 to June 2017
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        );
    }
}


export default Body;