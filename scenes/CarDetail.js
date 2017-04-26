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

     constructor(){
         super()
         this.state = {
             vote: 0
         }
     }

     
     componentWillMount() {
         const { vote } = this.props.car;
         this.setState({ vote: vote });
     }
     

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

    voteUp(){
        const currentVote = this.state.vote
        this.setState({ vote: currentVote + 1 })
    }

    voteDown(){
        const currentVote = this.state.vote
        this.setState({ vote: currentVote - 1 })
    }
    

    render(){
        
        const { vote } = this.state;
        const {
            brand,
            gene,
            year,
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
                                <Button transparent onPress= {() => this.voteUp()}>
                                    <Icon active name="arrow-up"/>
                                </Button>
                                <Text> { vote }</Text>
                                <Button transparent onPress= {() => this.voteDown()}>
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