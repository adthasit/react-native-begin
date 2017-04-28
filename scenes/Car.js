import React from 'react';
import { 
    ListView,
    Image,
} from 'react-native';
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
    Input,
    Item,
    Card,
    CardItem,
 } from 'native-base';
 import { Actions } from 'react-native-router-flux'
 import { observer } from 'mobx-react/native'

@observer

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            displaySearchBar: false, // state to show n hide searchBar
            search : "" // search form field value
        }
    }
    
    renderHeader(){
        const {title} = this.props
        
        let header = (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.store.refresh()}>
                        <Icon name="refresh" style={{ color: '#0098ff'}}/>
                    </Button>
                </Left>
                <Body>
                    <Title> {title} </Title>
                </Body>
                <Right>
                    {/* set displaySearchBar state to true onPress search icon */}
                    <Button transparent onPress={()=> this.setState({displaySearchBar: true})}>
                        <Icon name ="search" style={{ color: '#0098ff' }}/>
                    </Button>
                    <Button transparent onPress={() => Actions.CarAdd() }>
                        <Icon name="add-circle" style={{ color: '#0098ff'}}/>
                    </Button>
                </Right>
            </Header>
        )

        //display search form when state.displaySearchBar true
        if(this.state.displaySearchBar){
            header = (
                <Header searchBar rounded>
                    <Left>
                        <Item>
                            <Icon name="search"/>
                            <Input
                                placeholder="Search"
                                onChangeText={(text) => this.setState({search: text})}
                                value={this.state.search}
                            />
                        </Item>
                    </Left>
                    <Right>
                        <Button transparent onPress={()=> this.handleSearch()}>
                            <Text>Search</Text>
                        </Button>
                    </Right>
                </Header>
            )
        }

        return header
        
    }

    handleGoToCarDetail(rowData){
        //find comments using API
        this.props.store.findComments(rowData.id)

        Actions.CarDetail({car: rowData})
    }

    renderDow(rowData){
        return (
            <ListItem onPress={() => this.handleGoToCarDetail(rowData)}>
                <Card>
                    <CardItem onPress={() => this.handleGoToCarDetail(rowData)}>
                        <Body>
                            <Text> {rowData.brand} </Text>
                            <Text note> {rowData.gene} {rowData.year} </Text>
                        </Body>
                        {/*<Right>
                            <Icon name="arrow-forward" style={{color: "#0098ff"}}/>
                        </Right>                  */}
                    </CardItem>
                    <CardItem cardBody onPress={() => this.handleGoToCarDetail(rowData)}>
                        <Image source={{uri: rowData.image}}
                        style={{width: 370, height: 250}}/>
                    </CardItem>
                    <CardItem style={{ justifyContent: 'space-around' }}/>        
                </Card>
            </ListItem>
        )
    }

    handleSearch() {

        //get search value from search form
        const { search } = this.state

        //call sote method search
        this.props.store.search(search)

        //hide searchBar and clear search
        this.setState({displaySearchBar: false})
        
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