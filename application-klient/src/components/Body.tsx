import React from 'react';
import { Card, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import '../style/components.scss';
import Workcard from './Workcard';


interface bodyState {
    companies: string[];
}

class Body extends React.Component<{}, bodyState>{

    public state = {
        companies: ["statnet", "tronderenergi"],
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

                    <Header as='h2'>
                        <Icon name="configure" />
                        <Header.Content>Skills</Header.Content>
                    </Header>

                    <Header as='h2'>
                        <Icon name="paint brush" />
                        <Header.Content>Hobbies</Header.Content>
                    </Header>
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

    private renderWorkcards = () => {
        return(
            <div className={"pt-1"}>
                <Workcard
                    index={0}/>

                <Workcard
                    index={1}/>
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