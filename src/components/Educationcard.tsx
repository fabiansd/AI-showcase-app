import React from 'react';
import '../style/components.scss'
import { Card, Button } from 'semantic-ui-react';
import * as master from '../files/jsonfiles/master.json';

interface educationcardState {
    displayMaster: boolean;
}

class Educationcard extends React.Component<{}, educationcardState> {

    state = {
        displayMaster: false,
    };

    render() {
        return(
            <div>
                <div className="card card-padding">
                    <Card className="card" fluid>
                        <Card.Content header="NTNU: Norwegian University of Science and Technology" textAlign="left" />
                        <Card.Content description={this.renderNTNUDescription()} textAlign="left">
                        </Card.Content>
                        {this.renderMasterInfo()}
                        <Card.Content textAlign="left">
                            <Button onClick={this.handleButtonShow} className={'ui primary button'} size={'medium'} compact={true}>
                                Master's thesis
                            </Button>
                        </Card.Content>
                    </Card>
                </div>
                <div className="card">
                    <Card className="card" fluid>
                        <Card.Content header="UCSB: University of California Santa Barbara" textAlign="left" />
                        <Card.Content description={this.renderUCSBDescription()} textAlign="left"/>
                    </Card>
                </div>
            </div>
        );
    }

    private renderNTNUDescription = () => {
        return (
            <div id="description-text">
                <div>
                    Aug 2013 to June 2018
                </div>
                <div>
                    Master's degree - Cybernetics and robotics

                </div>
            </div>
        );
    };

    private renderUCSBDescription = () => {
        return (
            <div id="description-text">
                <div>
                    Sep 2016 to June 2017
                </div>
                <div>
                    Machine learning and control theory
                </div>
            </div>
        );
    };

    private renderMasterInfo = () => {

        if (this.state.displayMaster) {
            return (
                <Card.Content>
                    <p className={"mini-title"}>Who?</p>
                    <p>
                        {master.who}
                    </p>
                    <p className={"mini-title"}>Goal</p>
                    <p>
                        {master.goal}
                    </p>
                    <p className={"mini-title"}>Results</p>
                    <p>
                        {master.results}
                    </p>
                </Card.Content>
            );
        } else return
    };

    private handleButtonShow = () => {
        this.setState({
            displayMaster: !this.state.displayMaster
        })
    }
}

export default Educationcard;