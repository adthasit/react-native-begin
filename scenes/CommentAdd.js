import React from 'react'
import { 
    Header,
    Title,
    Container,
    Left,
    Right,
    Body,
    Text,
    Icon,
    Button,
    Form,
    Item,
    Input,
    Label,
    Content,
 } from 'native-base'
import { Actions } from 'react-native-router-flux'

class CommentAdd extends React.Component {

    constructor(){
        super()
        this.state = {
            text: "",
        }
    }

    renderHeader(){
        const { title } = this.props
        return (
            <Header>
                { /* Left Button Icon with arrow back, to back to Search page */}
                <Left>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name="arrow-back" style={{ color: '#0098ff' }}/>
                    </Button>
                </Left>

                {/* Print title by props from router */}
                <Body>
                    <Title> { title }</Title>
                </Body>

                {/* Right button to save form, but nothing to call for now */}
                
                <Right>
                    <Button transparent onPress={() => this.handleSave()}>
                        <Text style={{ color: '#0098ff' }}>Save</Text>
                    </Button>
                </Right>
            </Header>
        )
    }

    handleSave(){
        //get carId from propsrr
        const {carId} = this.props

        //save data to db with Store
        this.props.store.addComment(carId, this.state)

        //clear the from
        this.setState({ text: ""})

        //back to main page
        Actions.pop()
    }

    render(){
        return(
            <Container>
                {this.renderHeader()}
                <Content>
                    <Form>
                        <Item floatingLabel last>
                            <Label>Text</Label>
                            <Input
                                onChangeText={(text) => this.setState({text: text})}
                                value={this.state.text}
                                multiline={true}
                                numberOfLines={10}
                                style={{height: 200, marginTop: 20}}
                            />
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }

}

export default CommentAdd