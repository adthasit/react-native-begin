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
            <View style={styles.row}>
                <View style={styles.brandRow}>
                    <Text> {rowData.brand} </Text>
                </View>
                <View style={styles.geneRow}>
                    <Text> {rowData.gene} </Text>
                </View>
                <View style={styles.yearRow}>
                    <Text> {rowData.year} </Text>
                </View>
            </View>
            
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
        backgroundColor: '#F5FCFF',
    },
    row: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#FFF',
        flexDirection: "row",
    },
    brandRow: {
        flex: 2,
    },
    geneRow: {
        flex: 2,
    },
    yearRow: {
        flex:1 ,
    },
})


export default Search;