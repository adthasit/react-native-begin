import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
 } from 'react-native';
 import { 
     Header,
     Body,
     Title,
     Container,
     Content,
} from 'native-base';

class Profile extends React.Component {

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

    render() {
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <Text style={styles.hello}>
                        Profile
                    </Text>
                </Content>
                
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})

export default Profile;