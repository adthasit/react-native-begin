import React from 'react'
import { 
    StyleSheet,
    Text, 
    View 
} from 'react-native'
import { 
    Actions,
    Scene,
    Router,
    Switch,
    Modal,
 } from 'react-native-router-flux'
import { Icon } from 'native-base'

import {
    Search,
    Profile,
    CarDetail,
    CarAdd,
} from './scenes'
import { CarStore } from './stores'

class TabIcon extends React.Component {
    render() {
        const title = this.props.title;
        let icon = "";
        if(title === "Search"){
            icon = "search"
        }else if (title === "Profile"){
            icon = "person"
        }
        return (
            <Icon 
                name={icon} 
                style={{color: this.props.selected ? '#057ce4' : '#afafa4'}}
            />
        );
    }
}

class Main extends React.Component {
    
    
    componentWillMount() {
        this.scenes = Actions.create(
            <Scene key="root" tabs={true}>
                <Scene key="menus">
                    <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor:'#f7f7f7'}}>
                        <Scene key="Search" store={ CarStore } component={Search} title="Search" icon={TabIcon} hideNavBar={true}/>
                        <Scene key="Profile" component={Profile} title="Profile" icon={TabIcon} hideNavBar={true}/>
                    </Scene>
                    <Scene key="CarDetail" store={ CarStore } component={CarDetail} title="Car Detail" hideNavBar={true}/>
                    <Scene key="CarAdd" store={ CarStore } component={CarAdd} title="Car Add" hideNavBar={true}/>
                </Scene>
            </Scene>
        );
    }
    

  render() {
    return <Router scenes={this.scenes}/>
  }
}

module.exports = Main;
