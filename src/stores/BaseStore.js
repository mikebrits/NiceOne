import {observable} from 'mobx';
import _ from 'lodash';

class BaseStore {

    @observable store = [];
    id_field = 'id';

    get(id){
        return id ? _.find(this.store, {[this.id_field || 'id'] : id}) : this.store;
    }

    add(item){
        this.store.push(item);
    }

    remove(id){
        let toRemove = _.find(this.store, {[this.id_field || 'id'] : id});
        _.remove(this.store, {[this.id_field || 'id'] : id});
        return toRemove;
    }

    update(id, fields){
        let toUpdate = _.find(this.store, {[this.id_field || 'id'] : id});
        toUpdate = {...toUpate, ...fields};
        return toUpdate;
    }
}


export default BaseStore;