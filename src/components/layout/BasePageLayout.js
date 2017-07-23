/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const BasePageLayout = (Wrapped) => class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Wrapped {...this.props}/>
            </View>
        );
    }
}

export default BasePageLayout;

const styles = StyleSheet.create({
    container : {
        minHeight : '100%',
        backgroundColor : 'white',
        paddingLeft: 16,
        paddingRight: 16,
    }
});
