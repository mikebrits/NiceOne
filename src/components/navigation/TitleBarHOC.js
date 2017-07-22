/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import TitleBar from './TitleBar';

const TitleBarHOC = (opts = {}) => (Wrapped) => class extends Component {
    options = {
        canGoBack : false,
        goBackTo : null,
        title : "",
        ...opts
    };


    render() {
        console.log('nav', this.props.navigation);
        return (
            <View>
                <TitleBar title={this.options.title}
                          canGoBack={this.options.canGoBack}
                          gooBackTo={this.options.goBackTo}
                          navigation={this.props.navigation}
                />
                <Wrapped {...this.props} />
            </View>
        );
    }
}

export default TitleBarHOC;

const styles = StyleSheet.create({});
