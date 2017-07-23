/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import ItemButton from '../../components/Buttons/ItemSelector';

@observer
class ItemSelector extends Component {

    @observable selectedItems = [];

    selectItem = (id) => {

        const index = this.selectedItems.indexOf(id);
        if(index === -1){
            this.selectedItems.push(id);
        }
        else {
            this.selectedItems.splice(index, 1);
        }
    }

    render() {
        const {items, onItemSelected, filterTerm = ""} = this.props;
        return (
            <Container>
                {
                    _.map(items, (item) => {
                        if(!filterTerm || item.title.toLowerCase().search(filterTerm.toLowerCase()) !== -1)
                        return (
                            <ItemButton
                                key={item.id}
                                title={item.title}
                                id={item.id}
                                onPress={(id) => {
                                    this.selectItem(id);
                                    onItemSelected(this.selectedItems)
                                }}
                                selected={this.selectedItems.indexOf(item.id) !== -1}
                            />
                        );
                    })
                }
            </Container>
        )
    };

}

export default ItemSelector;

const Container = styled.View`
    flex-direction : row;
    flex-wrap : wrap;
    justify-content : center;
`;

