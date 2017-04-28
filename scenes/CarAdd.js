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
    Form,
    Item,
    Input,
    Label,
 } from 'native-base'
 import { Actions } from 'react-native-router-flux'

class CarAdd extends React.Component {

    constructor(){
        super();
        this.state = {
            brand: "",
            gene: "",
            year: "",
            description: "",
            vote: 0
        }
    }

    renderHeader(){
        const { title } = this.props
        
        return(
            <Header>
                {/* Left Button Icon with arrow back, to back to Question Page */}
                <Left>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name="arrow-back" style={{color: '#0098ff'}}/>
                    </Button>
                </Left>
                {/* Print title by props from router */}
                <Body>
                    <Title> { title } </Title>
                </Body>
                {/* Right button to save from, but nothing to call for now */}
                <Right>
                    <Button transparent onPress={() => this.handleSave()}>
                        <Text style={{color: '#0098ff'}}> Save </Text>
                    </Button>
                </Right>
            </Header>
        )
    }

    handleSave(){

        //save data to db with Store
        this.props.store.add(this.state)

        //refresh dataSource to the latest update reactively
        //this.props.store.refresh()

        //clear the from
        this.setState({
            brand: "",
            gene: "",
            year: "",
            description: "",
        })

        //back to main page
        Actions.pop()

    }
    

    render() {
        return (
            <Container>
                { this.renderHeader() }
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Brand</Label>
                            <Input
                                onChangeText= {(text) => this.setState({brand: text })}
                                value={ this.state.brand }
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Gene</Label>
                            <Input
                                onChangeText= {(text) => this.setState({gene: text })}
                                value={ this.state.gene }
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Year</Label>
                            <Input
                                onChangeText= {(text) => this.setState({year: text })}
                                value={ this.state.year }
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Description</Label>
                            <Input
                                onChangeText= {(text) => this.setState({description: text })}
                                value={ this.state.description }
                                multiline={ true }
                                numberOfLines= { 10 }
                                style={{ height: 200, marginTop: 20 }}
                            />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default CarAdd;