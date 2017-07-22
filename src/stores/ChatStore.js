import BaseStore from './BaseStore';
import {observable, action, computed} from 'mobx';
import _ from 'lodash';

class ChatStore extends BaseStore{
    @observable store = {
        chats : []
    };

    get(id){
        return _.find(this.store.chats, {id : id})
    }

    @action add(chat) {
        this.store.chats.push(chat);
    }

    @computed get getUnreadCount() {
    }
}

export default ChatStore;