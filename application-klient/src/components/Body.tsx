import React from 'react';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';
import '../style/components.scss';
import Workcard from './Workcard';

class Body extends React.Component {
    render() {
        return <section>
            <Grid divided='vertically'>
                <Grid.Row columns={2} padded>
                    <Grid.Column width={8} textAlign="left">
                        <p>
                            THIS IS MEEEEE
                        </p>
                    </Grid.Column>
                    <Grid.Column width={4} floated="right">
                        <Image src='../../public/images/fabian.s.dietrichson.jpg' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2} padded={2}>
                    <Grid.Column>
                        <Header as='h2'>
                            <Icon name="university" />
                            <Header.Content>Uptime Guarantee</Header.Content>
                        </Header>
                        <Workcard/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2'>
                            <Icon name="university" />
                            <Header.Content>Uptime Guarantee</Header.Content>
                        </Header>
                        <div className="m-2">
                            <Workcard/>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>;
    }
}


export default Body;