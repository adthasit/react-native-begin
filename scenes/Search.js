import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    ListView,
 } from 'react-native';

class Search extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.cars = [
            { brand: "TOYOTA", gene: "YARIS", year: "2016" },
            { brand: "HONDA", gene: "JAZZ", year: "2017" },
            { brand: "HONDA", gene: "CIVIC", year: "2017" },
        ]
        this.state = {
            dataSource: ds.cloneWithRows(this.cars),
        }
    }

    renderDow(rowData){
        return (
            <Text> {rowData.brand} - {rowData.gene} - {rowData.year} </Text>
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderDow.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})


export default Search;