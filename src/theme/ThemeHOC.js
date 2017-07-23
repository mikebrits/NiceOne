/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {activeTheme} from './Theme';

ThemeHOC = (customTheme) => (Wrapped) => class extends Component {
    render() {
        return (
            <ThemeProvider theme={customTheme || activeTheme}>
                <Wrapped {...this.props}/>
            </ThemeProvider>
        );
    }
}

export default ThemeHOC;

const styles = StyleSheet.create({});
