/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';


import {primaryColor} from '../../theme/Theme';

const Button = ({title, icon, onPress = () => {}, primary}) => {

    return (
        <TouchableWithoutFeedback onPress={() => {onPress()}}>
            <View style={[styles.button, primary ? styles.primary : {}]}>
                {icon || null}
                <Text style={[styles.text, primary ? styles.primaryText : {}]}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

}

export default Button;

Button.propTypes = {};

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor : primaryColor,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    primary : {
        backgroundColor : primaryColor,
    },
    text : {
        fontSize : 18,
        color : primaryColor,
        marginLeft : 8
    },
    primaryText : {
        color : 'white'
    }
});
