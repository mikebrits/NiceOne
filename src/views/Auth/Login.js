/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {Button} from 'react-native';
import {
    StyleSheet,
    View
} from 'react-native';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'niceone.eu.auth0.com', clientId: '4lhNaYhsB1DUZfO5oF2Hgh8i549G2mYV' });

class Login extends Component {
    _onLogin() {
        auth0
            .webAuth
            .authorize({scope: 'openid email', audience: 'https://niceone.eu.auth0.com/userinfo'})
            .then(credentials =>
                console.log("cred",credentials))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <View>
                <Button onPress={this._onLogin} title="Log In" />
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
});
