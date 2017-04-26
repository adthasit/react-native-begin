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
 import { observer } from 'mobx-react/native'

@observer

class Search extends React.Component {

    constructor() {
        super();
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
        const { dataSource } = this.props.store
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <ListView
                        dataSource={dataSource}
                        renderRow={this.renderDow.bind(this)}
                    />
                </Content>
               
            </Container>
        );
    }
}

export default Search;