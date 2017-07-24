/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation'

const TitleBar = ({title, canGoBack, goBackTo, navigation}) => {


    const goBack = () => {
        console.log(goBackTo);
        navigation.goBack(goBackTo || null)
    };

    return (
        <View style={styles.container}>
            {
                canGoBack &&
                <TouchableWithoutFeedback onPress={goBack}>
                    <View style={styles.backArrow}>
                        <Icon name="md-arrow-back" size={30} color="#000" />
                    </View>
                </TouchableWithoutFeedback>
            }
            <Text style={styles.title}>{title}</Text>
        </View>
    );


}

export default TitleBar;

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        marginBottom: 16,
        flexDirection: 'row',
    },
    backArrow : {
        paddingTop : 4,
        marginRight : 16

    },
    title: {
        fontSize: 28,
    }
});
