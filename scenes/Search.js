import React from 'react';
import { ListView } from 'react-native';
import { 
    Header,
    Title,
    Container,
    Content,
    Left,
    Body,
    Right,
    ListItem,
    Text,
    Icon,
 } from 'native-base';
 import { Actions } from 'react-native-router-flux'

class Search extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.cars = [
            { brand: "TOYOTA", gene: "YARIS", year: "2016", description: "Rental Yaris", vote: 4, createdAt: new Date("2017-04-13") },
            { brand: "HONDA", gene: "JAZZ", year: "2017", description: "Rental JAZZ", vote: 5, createdAt: new Date("2017-04-12")  },
            { brand: "HONDA", gene: "CIVIC", year: "2017", description: "Rental CIVIC", vote: 6, createdAt: new Date("2017-04-11")  },
        ]
        this.state = {
            dataSource: ds.cloneWithRows(this.cars),
        }
    }

    renderHeader(){
        const {title} = this.props
        return(
            <Header>
                <Body>
                    <Title> {title} </Title>
                </Body>
            </Header>
        )
    }

    renderDow(rowData){
        return (
            <ListItem onPress={() => { Actions.CarDetail({ car: rowData }) }}>
                <Body>
                    <Text> {rowData.brand} </Text>
                    <Text note> {rowData.gene} {rowData.year} </Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color: "#0098ff"}}/>
                </Right>
            </ListItem>
        )
    }
    
    render() {
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderDow.bind(this)}
                    />
                </Content>
               
            </Container>
        );
    }
}

export default Search;