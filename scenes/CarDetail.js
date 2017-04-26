import React from 'react'
import { 
    Header,
    Body,
    Title,
    Container,
    Content,
    Text,
    Left,
    Right,
    Button,
    Icon,
 } from 'native-base';
 import { Actions } from 'react-native-router-flux'

 class CarDetail extends React.Component{

    renderHeader(){
        const{ title } = this.props
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name="arrow-back" style={{ color: "#058ce4" }}/>
                    </Button>
                </Left>
                <Body>
                    <Title> { title } </Title>
                </Body>
                <Right/>
            </Header>
        )

    }
    

    render(){

        const {
            brand,
            gene,
            year,
        } = this.props.car;

        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <Text> Brand: { brand } </Text>
                    <Text> Gene: { gene } </Text>
                    <Text> Year: { year } </Text>
                </Content>
            </Container>
        )
    }

 }

 export default CarDetail