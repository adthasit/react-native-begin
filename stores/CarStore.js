import { observable } from 'mobx'
import { ListView } from 'react-native'
import Rest from 'fetch-on-rest'

class CarStore {

    @observable dataSource;
    @observable car = {};

    constructor(){
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.dataSource = ds.cloneWithRows([])
        this.api = new Rest("http://10.0.2.2:8000/api/v1/")
        this.refresh()
    }

    add(doc){
        this.api.post('car', doc)
    }

    update(id, doc){
        //initiate this to self varible
        const self = this

        //call api PUT to http://localhost:8000/car/{id}, with passed data
        this.api.put('car/'+ id, doc)
        .then(function(){
            //call method findOne from this class
            self.findOne(id)
        })
    }

    search(search){

        //initiate this self variable
        const self = this

        //call api http://localhost:80000/search?search=search
        //then set the response to dataSource to refresh it reactively
        this.api.get('car', {search: search})
        .then(function(response){
            self.dataSource = self.dataSource.cloneWithRows(response)
        })

    }

    findOne(id){
        
        //initiate this to self variable
        const self = this

        //call api GET to http://localhost:80000/search/{id} to fetch single obj
        this.api.get('car/'+ id)
        .then(function(response){
            //set single obj response to store.car reactively
            self.car = response
        })

    }

    //replace dataSource with new cars array
    refresh(){
        const self = this
        this.api.get('car').then(function(response){
            self.dataSource = self.dataSource.cloneWithRows(response)
        })  
    }

    //add comment to comment table with carId as first param, and doc as second
    addComment(carId, doc){
        this.api.post('car/'+ carId + '/comment', doc)
    }

}

const carStore = new CarStore();
export default carStore;