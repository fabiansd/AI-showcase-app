import React from 'react';
import '../style/components.scss'
// import { FormattedMessage } from 'react-intl';
// import CvCard from './CvCard';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';

class Body extends React.Component {
    render() {
        return <section>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src='/images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/images/wireframe/paragraph.png' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header as='h2'>
                            <Icon name="university" />
                            <Header.Content>Uptime Guarantee</Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2'>
                            <Icon name="university" />
                            <Header.Content>Uptime Guarantee</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>;
    }
}


export default Body;