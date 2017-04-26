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
    Button,
 } from 'native-base';
 import { Actions } from 'react-native-router-flux'
 import { observer } from 'mobx-react/native'

@observer

class Search extends React.Component {

    constructor() {
        super();
    }

    handleAdd(){
        const doc = { 
            brand: "YAMAHA", gene: "R6", year: "2017", description: "Rental YAMAHA R6", vote: 10, createdAt: new Date("2017-04-13") 
        }

        this.props.store.add(doc)
    }

    renderHeader(){
        const {title} = this.props
        return(
            <Header>
                <Left/>
                <Body>
                    <Title> {title} </Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.handleAdd()}>
                        <Icon name="add-circle" style={{ color: '#0098ff'}}/>
                    </Button>
                </Right>
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
        const { dataSource } = this.props.store
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <ListView
                        dataSource={dataSource}
                        renderRow={this.renderDow.bind(this)}
                        enableEmptySections={true}
                    />
                </Content>
               
            </Container>
        );
    }
}

export default Search;