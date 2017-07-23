/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import BasePageLayout from '../components/layout/BasePageLayout';
import Title from '../components/navigation/TitleBarHOC';
import PATHS from '../utils/Routing/Paths';
import Button from '../components/Buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import TextBox from '../components/TextInput/TextBox';
import styled from 'styled-components/native';
import $ from '../utils/StringResources';

@observer @BasePageLayout @Title({title : $.MakeHelpRequest.title})
class MakeHelpRequest extends Component {
    @observable itemText;

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <TextBox
                    onChangeText={(text) => {this.itemText = text}}
                    value={this.itemText}
                    onClear={() => {this.itemText = ""}}
                />
                <HelperText>{$.MakeHelpRequest.helperText}</HelperText>

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

const HelperText = styled.Text`
    ${({theme}) => theme.HelperText}
`;

export default MakeHelpRequest;
