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
    Footer,
 } from 'native-base'
import { ListView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react/native'
import moment from 'moment'

@observer

class CarDetail extends React.Component{

     constructor(){
         super();
     }

     
     componentWillMount() {
         //set store.car reactively by car props from Search.js rowData
         this.props.store.car = this.props.car;
     }
     

    renderHeader(){
        const{ title } = this.props
        const carId = this.props.car.id
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
                <Right>
                    <Button transparent onPress={()=> Actions.CommentAdd({ carId: carId})}>
                        <Icon name="add" style={{ color: "#057ce4" }}/>
                        <Text> Comment </Text>
                    </Button>
                </Right>
            </Header>
        )

    }

    renderCommentRow(rowData){
        return(
            <Card>
                <CardItem bordered>
                    <Body>
                        <Text note>Someone, on {moment(rowData.createdAt).format("DD/MM/YYYY")}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {rowData.text}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }

    voteUp(){
       //get field from store.car
       const { id, vote } = this.props.store.car
       
       //call method update on store
       this.props.store.update(id, { vote: vote + 1 })
    }

    voteDown(){
       //get field from store.car
       const { id, vote } = this.props.store.car
       
       //call method update on store
       this.props.store.update(id, { vote: vote - 1 })       
    }
    

    render(){
        
        //use data from server instead of static props
        const {
            brand,
            gene,
            year,
            description,
            createdAt,
            vote,
        } = this.props.store.car;
        //const {vote} = this.state; //we don't need from state anymore

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
                                    <Text note> on { createdAt } </Text>
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
                <Footer style={{height: 320}}>
                    <ListView
                        dataSource={ this.props.store.dataSourceComments }
                        renderRow={ this.renderCommentRow.bind(this) }
                        enableEmptySections= { true }
                    />
                </Footer>
            </Container>
        )
    }

 }

 export default CarDetail