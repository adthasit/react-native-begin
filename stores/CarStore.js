import { observable } from 'mobx'
import { ListView } from 'react-native'
import Rest from 'fetch-on-rest'

class CarStore {

    @observable dataSource;

    constructor(){
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.dataSource = ds.cloneWithRows([])
        this.api = new Rest("https://demo5872019.mockable.io/")
        this.refresh()
    }

    add(doc){
        this.cars.push(doc)

        this.refresh()
    }

    //replace dataSource with new cars array
    refresh(){
        const self = this
        this.api.get('all').then(function(response){
            self.dataSource = self.dataSource.cloneWithRows(response)
        })  
    }

}

const carStore = new CarStore();
export default carStore;