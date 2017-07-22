/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableWithoutFeedback
} from 'react-native';
import Title from '../components/navigation/TitleBarHOC';
import PATHS from '../utils/Routing/Paths';

@Title({title : 'Hooray!'})
class MakeHelpRequest extends Component {


    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text> Make Help Request</Text>
                <Button onPress={() => {navigate(PATHS.PersonaliseRequest)}} title="Let's go yo"/>
            </View>
        );
    }
}

export default MakeHelpRequest;

const styles = StyleSheet.create({
});
