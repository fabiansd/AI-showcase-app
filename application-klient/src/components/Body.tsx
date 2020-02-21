import React from 'react';
import { Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';
import '../style/components.scss';
import { workcardObject } from '../types/types';
import Workcard from './Workcard';

interface bodyState {
    workcards: workcardObject[];
}

class Body extends React.Component<null, bodyState> {

    public state = {
        workcards: [
            {
                company: 'Statnett',
                ingress: 'arbeidserfaring.statnett.ingress',
                who: 'arbeidserfaring.statnett.who',
                goal: 'arbeidserfaring.statnett.goal',
                results: 'arbeidserfaring.statnet.results'
            }
        ]
    };

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
                </Grid.Row>
            </Grid>

            <Divider/>
            <div className="flex-container">
                <div className="flex-item-1">
                    <Header as='h2' className="pt-2">
                        <Icon name="university" />
                        <Header.Content>Uptime Guarantee</Header.Content>
                    </Header>
                    <Workcard workcard={this.state.workcards[0]}/>
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
        </div>;
    }
}


export default Body;