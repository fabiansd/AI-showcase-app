import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

class Workcard extends React.Component {


    render() {
        return (
            <Card>
                <Card.Content header='About Amy' />
                <Card.Content description={"Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York."} />
                <Card.Content extra>
                    <Icon name='user' />See more
                </Card.Content>
            </Card>
        );
    }
}

export default Workcard;