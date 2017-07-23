/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import BasePageLayout from '../components/layout/BasePageLayout';
import Title from '../components/navigation/TitleBarHOC';
import PATHS from '../utils/Routing/Paths';
import Button from '../components/Buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {observable, toJS} from 'mobx';
import {observer} from 'mobx-react';
import TextBox from '../components/TextInput/TextBox';
import styled from 'styled-components/native';
import $ from '../utils/StringResources';
import {HelperText} from '../components/Text';
import ItemSelector from '../components/ItemSelectorContainer'
import _ from 'lodash';


const itemSelectors = [
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

@BasePageLayout @Title({title: $.MakeHelpRequest.title}) @observer
class MakeHelpRequest extends Component {
    @observable itemText;
    @observable selectedItems = [];

    selectItem = (selectedItems) => {
        this.selectedItems = selectedItems;
    };

    render() {

        return (
            <View>
                <TextBox
                    onChangeText={(text) => {
                        this.itemText = text
                    }}
                    value={this.itemText}
                    onClear={() => {
                        this.itemText = ""
                    }}
                />
                <HelperText> {$.MakeHelpRequest.helperText} </HelperText>
                <ItemSelector
                    items={itemSelectors}
                    onItemSelected={(selectedItems) => {
                        this.selectItem(selectedItems)
                    }}
                    filterTerm={this.itemText}
                />
                <Text>
                    {_.map(this.selectedItems, (item, index) => {
                        return (item + ', ');
                    })}
                </Text>


                {/*<Button*/}
                {/*primary*/}
                {/*onPress={() => {navigate(PATHS.PersonaliseRequest)}}*/}
                {/*//disabled={false}*/}
                {/*title="Let's go yo!"*/}
                {/*icon={<Icon name="heart" size={17} color={'white'} />}*/}
                {/*/>*/}
            </View>
        );
    }
}


export default MakeHelpRequest;
