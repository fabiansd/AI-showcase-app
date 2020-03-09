import React from 'react';
import { Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';
import '../style/components.scss';
import Workcard from './Workcard';
import * as arbeidserfaring from '../jsonfiles/arbeidserfaring.json'


interface bodyState {
    companies: string[];
}

class Body extends React.Component<{}, bodyState>{

    public state = {
        companies: ["statnet", "tronderenergi"],
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
                    {this.renderWorkcards()}
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

    private renderWorkcards = () => {
        return(
            <div className={"pt-1"}>
                <Workcard
                    company={arbeidserfaring.statnet.name}
                    ingress={arbeidserfaring.statnet.ingress}
                    who={arbeidserfaring.statnet.who}
                    goal={arbeidserfaring.statnet.goal}
                    results={arbeidserfaring.statnet.results}/>

                <Workcard
                    company={arbeidserfaring.tronderenergi.name}
                    ingress={arbeidserfaring.tronderenergi.ingress}
                    who={arbeidserfaring.tronderenergi.who}
                    goal={arbeidserfaring.tronderenergi.goal}
                    results={arbeidserfaring.tronderenergi.results}/>
            </div>
        );
    }
}


export default Body;