import React from 'react';
import { Divider, Grid, Header, Icon, List } from 'semantic-ui-react';
import fabian_image from '../files/images/fabian.s.dietrichson.jpg';
import * as arbeidserfaring from '../files/jsonfiles/arbeidserfaring.json';
import * as frivillig from '../files/jsonfiles/frivilligerfaring.json';
import '../style/components.scss';
import { Skill } from '../types/types';
import Educationcard from './Educationcard';
import Workcard from './Workcard';

export type Fruit = "code" | "Apple" | "Banana"

interface bodyState {
    displayAllWorkcards: boolean;
    displayAllVoluntarycards: boolean;
    langSkills: Skill[];
    devSkills: Skill[];
    genSkills: Skill[];
    industryExpertise: Skill[];
    sportsNhobbies: Skill[];
}

class Body extends React.Component<{}, bodyState>{

    public state = {
        displayAllWorkcards: false,
        displayAllVoluntarycards: false,
        langSkills: [{name: "Python", description: "3 year"},
            {name: "Matlab", description: "3 year"},
            {name: "C++ / C", description: "2 year"},
            {name: "Java", description: "1 year"},
            {name: "Javascript / Typescript", description: "1 year"},
            {name: "Golang", description: "<1 year"}],

        devSkills: [{name: "Git", description: "3 year"},
            {name: "Tensorflow / Keras", description: "2 year"},
            {name: "React / Redux", description: "1 year"},
            {name: "Amazon Web Services", description: "1 year"},
            {name: "Docker", description: "1 year"},
            {name: "SQL", description: "<1 year"}],

        genSkills: [{name: "DevOps / Agile development"},
            {name: "Control theory / Autonomy"},
            {name: "Public speaking / Presenting"},
            {name: "Deep Learning / Machine learning"},
            {name: "Computer vision / CNN"}],

        industryExpertise: [{name: "Electric power production"},
            {name: "Automotive"},
            {name: "Medical image processing"},
            {name: "Bar and restaurant"}],

        sportsNhobbies: [{name: "Kiting on snow and water"},
            {name: "Freediving and scuba diving"},
            {name: "Piano and guitar"},
            {name: "Reading Sci-fi and phsychology"}],

        languages: [{name: "Norwegian", description: "Mother tongue"},
            {name: "English", description: "Excellent"}],
    };

    render() {
        return <div className="bodycard shadoweffect">
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column width={3}>
                        <img src={fabian_image} alt="Profile" />
                    </Grid.Column>
                    <Grid.Column verticalAlign={'bottom'} textAlign={'left'}>
                        {this.renderPersonalInfo()}
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Divider />

            <div className="flex-container">
                <div className="flex-item-1">

                    <Header as='h2'>
                        <Icon name="university" />
                        <Header.Content>Education</Header.Content>
                    </Header>
                    {this.renderEducation()}

                    <Header as='h2'>
                        <Icon name="building" />
                        <Header.Content>
                            {this.renderExpHeader()}
                        </Header.Content>
                    </Header>
                    {this.renderWorkcards()}

                    <Header as='h2'>
                        <Icon name="handshake outline" />
                        <Header.Content>Voluntary work</Header.Content>
                    </Header>
                    {this.renderVoluntaryCards()}

                </div>

                <div className="flex-item-2">

                    <Header as='h3'>
                        <Icon name="trophy" />
                        <Header.Content>Certificates</Header.Content>
                    </Header>
                    {this.renderCertificate()}

                    <div className="py-3" />

                    <Header as='h3'>
                        <Icon name="code" />
                        <Header.Content>Programming</Header.Content>
                    </Header>
                    {this.renderSkillList(this.state.langSkills)}
                    <div className="py-3" />

                    <Header as='h3'>
                        <Icon name="group" />
                        <Header.Content>Tools</Header.Content>
                    </Header>
                    {this.renderSkillList(this.state.devSkills)}

                    <Header as='h3'>
                        <Icon name="configure" />
                        <Header.Content>Skills</Header.Content>
                    </Header>
                    {this.renderSkillList(this.state.genSkills)}

                    <Header as='h3'>
                        <Icon name="industry" />
                        <Header.Content>Industry expertise</Header.Content>
                    </Header>
                    {this.renderSkillList(this.state.industryExpertise)}

                    <Header as='h3'>
                        <Icon name="game" />
                        <Header.Content>Hobbies</Header.Content>
                    </Header>
                    {this.renderSkillList(this.state.sportsNhobbies)}

                    <Header as='h3'>
                        <Icon name="comments" />
                        <Header.Content>Languages</Header.Content>
                    </Header>
                    {this.renderSkillList(this.state.languages)}
                </div>
            </div>
        </div>;
    }

    private renderExpHeader = () => {
        return (
            <div>
                Professional experience
                {/*<Button onClick={this.handleButtonShowAllExp} className={'ui button'} size={'medium'} compact={true}/>*/}
            </div>
        );
    };

    private handleButtonShowAllExp = () => {
        this.setState({
            displayAllWorkcards: !this.state.displayAllWorkcards
        })
    };

    private renderCertificate = () => {
        return(
            <List divided relaxed className="list">
                <List.Item className="list-item-align">
                    <List.Content>
                        <List.Header >Professional Scrum Master 1 (PSM 1)</List.Header>
                        <List.Description><a href="https://www.scrum.org/certificates/450934">Certificate diploma</a></List.Description>
                    </List.Content>
                </List.Item>
            </List>
        );
    };

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

    private renderSkillList = (skillList: Skill[]) => {

        return (
            <List divided relaxed className="list">
                {skillList.map(function(item, index){
                    return (
                        <List.Item className="list-item-align">
                            <List.Content>
                                <List.Header >{item.name}</List.Header>
                                {(!!item.description) && <List.Description>{item.description}</List.Description>}
                            </List.Content>
                        </List.Item>
                    );
                })}
            </List>
        );
    };

    private renderWorkcards = () => {
        return(
            <div className={"pt-1"}>
                <Workcard
                    displayExtraProp={this.state.displayAllWorkcards}
                    company={arbeidserfaring['acn-autosys'].name}
                    ingress={arbeidserfaring['acn-autosys'].ingress}
                    who={arbeidserfaring['acn-autosys'].who}
                    goal={arbeidserfaring['acn-autosys'].goal}
                    results={arbeidserfaring['acn-autosys'].results}/>

                <Workcard
                    displayExtraProp={this.state.displayAllWorkcards}
                    company={arbeidserfaring['acn-picterus'].name}
                    ingress={arbeidserfaring['acn-picterus'].ingress}
                    who={arbeidserfaring['acn-picterus'].who}
                    goal={arbeidserfaring['acn-picterus'].goal}
                    results={arbeidserfaring['acn-picterus'].results}/>

                <Workcard
                    displayExtraProp={this.state.displayAllWorkcards}
                    company={arbeidserfaring['acn-liquid'].name}
                    ingress={arbeidserfaring['acn-liquid'].ingress}
                    who={arbeidserfaring['acn-liquid'].who}
                    goal={arbeidserfaring['acn-liquid'].goal}
                    results={arbeidserfaring['acn-liquid'].results}/>

                <Workcard
                    displayExtraProp={this.state.displayAllWorkcards}
                    company={arbeidserfaring.tronderenergi.name}
                    ingress={arbeidserfaring.tronderenergi.ingress}
                    who={arbeidserfaring.tronderenergi.who}
                    goal={arbeidserfaring.tronderenergi.goal}
                    results={arbeidserfaring.tronderenergi.results}/>

                <Workcard
                    displayExtraProp={this.state.displayAllWorkcards}
                    company={arbeidserfaring.statnet.name}
                    ingress={arbeidserfaring.statnet.ingress}
                    who={arbeidserfaring.statnet.who}
                    goal={arbeidserfaring.statnet.goal}
                    results={arbeidserfaring.statnet.results}
                    // attest={arbeidserfaring.statnet.attest.toString()}
                    />

                <Workcard
                    displayExtraProp={this.state.displayAllWorkcards}
                    company={arbeidserfaring.reno.name}
                    ingress={arbeidserfaring.reno.ingress}
                    who={arbeidserfaring.reno.who}
                    goal={arbeidserfaring.reno.goal}
                    results={arbeidserfaring.reno.results}/>
            </div>
        );
    };


    private renderVoluntaryCards = () => {
        return(
            <div className={"pt-1"}>
                <Workcard
                    displayExtraProp={this.state.displayAllVoluntarycards}
                    company={frivillig['youth-council'].name}
                    ingress={frivillig['youth-council'].ingress}
                    who={frivillig['youth-council'].who}
                    goal={frivillig['youth-council'].goal}
                    results={frivillig['youth-council'].results}/>

                <Workcard
                    displayExtraProp={this.state.displayAllVoluntarycards}
                    company={frivillig.IAESTE.name}
                    ingress={frivillig.IAESTE.ingress}
                    who={frivillig.IAESTE.who}
                    goal={frivillig.IAESTE.goal}
                    results={frivillig.IAESTE.results}/>

                <Workcard
                    displayExtraProp={this.state.displayAllVoluntarycards}
                    company={frivillig.lyche.name}
                    ingress={frivillig.lyche.ingress}
                    who={frivillig.lyche.who}
                    goal={frivillig.lyche.goal}
                    results={frivillig.lyche.results}/>

                <Workcard
                    displayExtraProp={this.state.displayAllVoluntarycards}
                    company={frivillig.omega.name}
                    ingress={frivillig.omega.ingress}
                    who={frivillig.omega.who}
                    goal={frivillig.omega.goal}
                    results={frivillig.omega.results}/>
            </div>
        );
    };


    private renderEducation = () => {
        return(
            <Educationcard/>
        );
    }
}


export default Body;