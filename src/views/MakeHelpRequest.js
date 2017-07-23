/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import BasePageLayout from '../components/layout/BasePageLayout';
import Title from '../components/navigation/TitleBarHOC';
import PATHS from '../utils/Routing/Paths';
import Button from '../components/Buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {primaryColor} from '../theme/Theme';

@BasePageLayout @Title({title : 'Hooray'})
class MakeHelpRequest extends Component {


    render() {
        const {navigate} = this.props.navigation;

        console.log('theme?', this.props);

        return (
            <View>
                <Text>Make Help Request</Text>
                <Button
                    primary
                    onPress={() => {navigate(PATHS.PersonaliseRequest)}}
                    //disabled={false}
                    title="Let's go yo!"
                    icon={<Icon name="heart" size={17} color={'white'} />}
                />
            </View>
        );
    }
}

export default MakeHelpRequest;

const styles = StyleSheet.create({
});
