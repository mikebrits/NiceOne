import BaseStore from './BaseStore';
import {observable} from 'mobx';

class ItemStoreClass extends BaseStore {

    @observable store = [
        {
            id: 1,
            title: 'Alpha'
        },
        {
            id: 2,
            title: 'Bravo'
        },
        {
            id: 3,
            title: 'Charlie'
        },
        {
            id: 4,
            title: 'Delta'
        },

    ];

}

// export let ItemStore = new ItemStoreClass();
export default ItemStoreClass;