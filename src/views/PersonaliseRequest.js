/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Title from '../components/navigation/TitleBarHOC';
import BasePageLayout from '../components/layout/BasePageLayout';
import Button from '../components/Buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import PATHS from '../utils/Routing/Paths';

@BasePageLayout
@Title({
    title : 'Give it a personal touch',
    canGoBack : true,
    //goBackTo: "PersonaliseRequest"
})
class PersonaliseRequest extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>We've Arrived!</Text>
                <Button
                    primary
                    onPress={() => {
                        navigate(PATHS.FindingOffers)
                    }}
                    //disabled={false}
                    title="Let's go yo!"
                    icon={<Icon name="heart" size={17} color={'white'}/>}
                />
            </View>
        );
    }
}

export default PersonaliseRequest;

const styles = StyleSheet.create({
});
