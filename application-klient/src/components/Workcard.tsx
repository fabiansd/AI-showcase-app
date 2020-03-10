import React from 'react';
import '../style/components.scss'
import { Card, Button } from 'semantic-ui-react';
import * as arbeidserfaring from '../jsonfiles/arbeidserfaring.json'

interface workcardProps {
    index: number;
}

interface workcardState {
    displayExtra: boolean;
    i: string;
}

class Workcard extends React.Component<workcardProps, workcardState> {

    state = {
        displayExtra: false,
        i: "0",
    };

    render() {
        return <div className="workcard">
            <Card fluid>
                {console.log(arbeidserfaring)}
                <Card.Content header={'arbeidserfaring[this.props.index].name'} textAlign="left" />
                <Card.Content description={'arbeidserfaring[this.props.index].ingress'} textAlign="left"/>
                {this.renderExtraInfo()}
                <Card.Content textAlign={'left'}>
                    <Button onClick={this.handleButtonShow} className={'ui primary button'} size={'medium'} compact={true}>
                        Read more
                    </Button>
                    <Button className={'ui button'} size={'medium'} compact={true}>
                        <a href='fabian.jpg' download>Attest</a>
                    </Button>
                </Card.Content>
            </Card>
        </div>;
    }

    private loopArb = () => {
        for (i in arbeidserfaring) {
            console.log(i)
        }
    }

    private renderExtraInfo = () => {

        if (this.state.displayExtra) {
            return (
                <Card.Content>
                    <p className={"mini-title"}>Who?</p>
                    <p>
                        {arbeidserfaring[this.props.index].who}
                    </p>
                    <p className={"mini-title"}>Goal</p>
                    <p>
                        {arbeidserfaring[this.props.index].goal}
                    </p>
                    <p className={"mini-title"}>Results</p>
                    <p>
                        {arbeidserfaring[this.props.index].results}
                    </p>
                </Card.Content>
            );
        } else return
    };

    private handleButtonShow = () => {
        this.setState({
            displayExtra: !this.state.displayExtra
        })
    }
}

export default Workcard;