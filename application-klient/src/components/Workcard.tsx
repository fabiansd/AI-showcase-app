import React from 'react';
import '../style/components.scss'
import { Card, Icon } from 'semantic-ui-react';
import * as arbeidserfaring from '../jsonfiles/arbeidserfaring.json'

interface workcardProps {
    company: string;
}

class Workcard extends React.Component<workcardProps, {}> {

    render() {
        return (
            <div className="workcard">
                <Card fluid>
                    <Card.Content header={arbeidserfaring.statnet.name} textAlign="left"/>
                    <Card.Content description={arbeidserfaring.statnet.ingress} />
                    <Card.Content>
                        <p>
                            {arbeidserfaring.statnet.who}
                        </p>
                        <p>
                            {arbeidserfaring.statnet.goal}
                        </p>
                        <p>
                            {arbeidserfaring.statnet.results}
                        </p>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />See more
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Workcard;