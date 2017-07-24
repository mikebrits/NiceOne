/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import BasePageLayout from '../components/layout/BasePageLayout';
import Title from '../components/navigation/TitleBarHOC';
import PATHS from '../utils/Routing/Paths';
import Button from '../components/Buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {observable, toJS} from 'mobx';
import {observer, inject} from 'mobx-react';
import TextBox from '../components/TextInput/TextBox';
import styled from 'styled-components/native';
import $ from '../utils/StringResources';
import {HelperText} from '../components/Text';
import ItemSelector from '../components/ItemSelectorContainer'
import _ from 'lodash';


@BasePageLayout
@Title({title: $.MakeHelpRequest.title})
@observer(['ItemStore'])
class MakeHelpRequest extends Component {
    @observable itemText;
    @observable selectedItems = [];

    selectItem = (selectedItems) => {
        this.selectedItems = selectedItems;
    };

    render() {
        console.log('props', this.props.ItemStore);
        return (
            <View>
                <View style={{justifyContent:'center', alignItems: 'center', width : '100%', marginBottom : 16}}>
                    <Image source={require('../../assets/img/HeartIcon.png')}/>
                </View>
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
                    items={this.props.ItemStore.get()}
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
