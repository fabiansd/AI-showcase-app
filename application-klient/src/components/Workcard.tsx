import React from 'react';
import '../style/components.scss'
import { Card, Icon } from 'semantic-ui-react';
import { workcardObject } from '../types/types';

interface workcardProps {

}

interface workcardProps {
    workcard: workcardObject
}

class Workcard extends React.Component<workcardProps, null> {

    render() {
        return (
            <div className="workcard">
                <Card fluid>
                    <Card.Content header='About Amy' textAlign="left"/>
                    <Card.Content description={"Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York."} />
                    <Card.Content extra>
                        <Icon name='user' />See more
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Workcard;