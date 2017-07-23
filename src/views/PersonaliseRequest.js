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

@BasePageLayout @Title({title : 'Give it a personal touch', canGoBack : true})
class PersonaliseRequest extends Component {
    render() {
        return (
            <View>
                <Text>We've Arrived!</Text>
            </View>
        );
    }
}

export default PersonaliseRequest;

const styles = StyleSheet.create({
});
