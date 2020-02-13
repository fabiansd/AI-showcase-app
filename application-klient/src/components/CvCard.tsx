import React from 'react';
import { Button, Card, Popover } from 'react-bootstrap';

class CvCard extends React.Component {


    private popover = () => {
        return (
            <Popover id="popover-basic" placement="top">
                <Popover.Title as="h3">Popover right</Popover.Title>
                <Popover.Content>
                    And here's some <strong>amazing</strong> content. It's very engaging.
                    right?
                </Popover.Content>
            </Popover>
        );
    };

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default CvCard;