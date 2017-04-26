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
    Card,
    CardItem,
    Thumbnail,
 } from 'native-base';
import { Actions } from 'react-native-router-flux'
import moment from 'moment'

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
            like,
            description,
            createdAt,
        } = this.props.car;

        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Icon name="car"/>
                                <Body>
                                    <Text> { brand } { gene } { year } </Text>
                                    <Text note> on {moment(createdAt).format("DD/MM/YYYY")} </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    { description }
                                </Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon active name="arrow-up"/>
                                </Button>
                                <Text> { like }</Text>
                                <Button transparent>
                                    <Icon active name="arrow-down"/>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

 }

 export default CarDetail