import { observable } from 'mobx'
import { ListView } from 'react-native'
import Rest from 'fetch-on-rest'

class CarStore {

    @observable dataSource;

    constructor(){
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.dataSource = ds.cloneWithRows([])
        this.api = new Rest("http://10.0.2.2:8000/")
        this.refresh()
    }

    add(doc){
        this.api.post('car', doc)
    }

    //replace dataSource with new cars array
    refresh(){
        const self = this
        this.api.get('search').then(function(response){
            self.dataSource = self.dataSource.cloneWithRows(response)
        })  
    }

}

const carStore = new CarStore();
export default carStore;