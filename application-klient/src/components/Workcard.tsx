import React from 'react';
import '../style/components.scss'
import { Card, Button } from 'semantic-ui-react';

interface workcardProps {
    company: string;
    ingress: string;
    who: string;
    goal: string;
    results: string;
}

interface workcardState {
    displayExtra: boolean;
}

class Workcard extends React.Component<workcardProps, workcardState> {

    state = {
        displayExtra: false,
    };

    render() {
        return <div className="workcard">
            <Card fluid>
                <Card.Content header={this.props.company} textAlign="left" />
                <Card.Content description={this.props.ingress} textAlign="left"/>
                {this.renderExtraInfo()}
                <Card.Content textAlign={'left'}>
                    <Button onClick={this.handleButtonShow} className={'ui primary button'} size={'medium'} compact={true}>
                        Read more
                    </Button>
                </Card.Content>
            </Card>
        </div>;
    }

    private renderExtraInfo = () => {

        if (this.state.displayExtra) {
            return (
                <Card.Content>
                    <p className={"mini-title"}>Who?</p>
                    <p>
                        {this.props.who}
                    </p>
                    <p>
                        {this.props.goal}
                    </p>
                    <p>
                        {this.props.results}
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