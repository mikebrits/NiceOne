/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import TitleBar from './TitleBar';

const TitleBarHOC = (opts = {}) => (Wrapped) => class extends Component {
    options = {
        canGoBack: false,
        goBackTo: null,
        scroll : false,
        title: "",
        ...opts
    };

    Title = () => (
        <View>
            <TitleBar title={this.options.title}
                      canGoBack={this.options.canGoBack}
                      gooBackTo={this.options.goBackTo}
                      navigation={this.props.navigation}
            />
            <Wrapped {...this.props} />
        </View>
    )


    render() {

        return this.options.scroll ?
            (
                <ScrollView bounces = {false} style={{height : '100%'}}>
                    {this.Title()}
                </ScrollView>
            )
            :
            (
                <View>
                    {this.Title()}
                </View>
            )
    }
}


export default TitleBarHOC;

const styles = StyleSheet.create({});
