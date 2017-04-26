import { observable } from 'mobx'
import { ListView } from 'react-native'

class CarStore {

    cars = [
        { brand: "TOYOTA", gene: "YARIS", year: "2016", description: "Rental Yaris", vote: 4, createdAt: new Date("2017-04-13") },
        { brand: "HONDA", gene: "JAZZ", year: "2017", description: "Rental JAZZ", vote: 5, createdAt: new Date("2017-04-12")  },
        { brand: "HONDA", gene: "CIVIC", year: "2017", description: "Rental CIVIC", vote: 6, createdAt: new Date("2017-04-11")  },
    ]

    @observable dataSource;

    constructor(){
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.dataSource = ds.cloneWithRows(this.cars)
    }

    add(doc){
        this.cars.push(doc)

        this.refresh()
    }

    //replace dataSource with new cars array
    refresh(){
        this.dataSource = this.dataSource.cloneWithRows(this.cars)
    }

}

const carStore = new CarStore();
export default carStore;