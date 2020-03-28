import React from 'react';
import '../style/components.scss'
import { Card, Button } from 'semantic-ui-react';

interface workcardProps {
    displayExtraProp: boolean;
    company: string;
    ingress: string;
    who: string;
    goal: string;
    results: string;
    // attest?: string;
}

interface workcardState {
    displayExtra: boolean;
}

class Workcard extends React.Component<workcardProps, workcardState> {

    state = {
        displayExtra: false,
    };

    render() {
        // if (!!this.props.attest){
        //     require('../files/docs/'.concat(this.props.attest));
        // }
        return <div className="card" id="card-padding">
            <Card fluid>
                <Card.Content header={this.props.company} textAlign="left" />
                <Card.Content description={this.props.ingress} textAlign="left"/>
                {this.renderExtraInfo()}
                <Card.Content textAlign={'left'}>
                    <Button onClick={this.handleButtonShow} className={'ui primary button'} size={'medium'} compact={true}>
                        Read more
                    </Button>
                    {/*{this.renderAttestButton()}*/}
                    {/*{!!this.props.company &&*/}
                    {/*<Button className={'ui button'} size={'medium'} compact={true}>*/}
                    {/*    <a href={require('../files/docs/'.concat(this.props.attest as string))} download>Attest</a>*/}
                        {/*<a href={require(attest_path)} download>Attest</a>*/}
                    {/*</Button>*/}
                </Card.Content>
            </Card>
        </div>;
    }

    // private renderAttestButton = () => {
    //     if (!!this.props.attest){
    //         var attest_path = "../files/docs/".concat(this.props.attest);
    //         console.log(this.props.company)
    //         console.log(attest_path)
    //         return (
    //             <Button className={'ui button'} size={'medium'} compact={true}>
    //                 <a href={attest_path} download>Attest</a>
    //             </Button>
    //         );
    //     }
    //     else {
    //         console.log(this.props.company)
    //         console.log('Not exist')
    //     }
    // };

    private renderExtraInfo = () => {

        if (this.state.displayExtra || this.props.displayExtraProp) {
            return (
                <Card.Content>
                    <p className={"mini-title"}>Who?</p>
                    <p>
                        {this.props.who}
                    </p>
                    <p className={"mini-title"}>Goal</p>
                    <p>
                        {this.props.goal}
                    </p>
                    <p className={"mini-title"}>Results</p>
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