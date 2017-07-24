/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Auth0Lock from 'react-native-lock';
const lock = new Auth0Lock({clientId: "4lhNaYhsB1DUZfO5oF2Hgh8i549G2mYV", domain: "http://niceone.eu.auth0.com/"});

class Login extends Component {
    render() {
        return (
            <View>
                {lock.show({}, (err, profile, token) => {
                    console.log('Logged in!');
                })}
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
});
