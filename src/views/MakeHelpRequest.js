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
import Title from '../components/navigation/TitleBarHOC';
import PATHS from '../utils/Routing/Paths';
import Button from '../components/Buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {primaryColor} from '../theme/Theme';

@Title({title : 'Hooray'})
class MakeHelpRequest extends Component {


    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Make Help Request</Text>
                <Button
                    //primary
                    onPress={() => {navigate(PATHS.PersonaliseRequest)}}
                    title="Let's go yo!"
                    icon={<Icon name="heart" size={17} color={primaryColor} />}
                />
            </View>
        );
    }
}

export default MakeHelpRequest;

const styles = StyleSheet.create({
    container : {
        paddingLeft : 16,
        paddingRight : 16
    }
});
