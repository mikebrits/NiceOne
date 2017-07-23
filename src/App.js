/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Router from './utils/Routing/Router';
import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {activeTheme} from './theme/Theme';
import {Provider} from 'mobx-react';
import ItemStore from './stores/ItemStore';
/**
 *
 * @flow
 */


const App = (props) => {
    return (
        <ThemeProvider theme={activeTheme}>
            <Provider
                ItemStore={new ItemStore()}
            >
                <Router/>
            </Provider>
        </ThemeProvider>
    );

}

export default App;

