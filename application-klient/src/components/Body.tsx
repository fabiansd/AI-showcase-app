import React from 'react';
import { Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';
import '../style/components.scss';
import Workcard from './Workcard';

class Body extends React.Component {
    render() {
        return <div className="bodycard shadoweffect">
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column width={8} textAlign="left">
                        <p>
                            THIS IS MEEEEE
                        </p>
                    </Grid.Column>
                    <Grid.Column width={4} floated="right">
                        <Image src='../../public/images/fabian.s.dietrichson.jpg' />
                    </Grid.Column>
                <div className="ui divider"></div>
                </Grid.Row>


                <div className="flex-container">
                    <div className="flex-item-1">
                        <Header as='h2'>
                            <Icon name="university" />
                            <Header.Content>Uptime Guarantee</Header.Content>
                        </Header>
                        <Workcard/>
                    </div>
                    <div className="flex-item-2">
                        <Header as='h3'>*/}
                            <Header.Content>So What!!</Header.Content>
                            <p>
                                Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.
                            </p>
                        </Header>
                    </div>
                </div>
            </Grid>
        </div>;
    }
}


export default Body;