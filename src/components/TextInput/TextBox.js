/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    TouchableWithoutFeedback
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({onChangeText, value, onClear}) => {

    return (
        <Container>
            <TextBox
                value={value}
                onChangeText={(text) => onChangeText(text)}
            />
            <CloseIcon>
                <TouchableWithoutFeedback onPress={() => {onClear()}}>
                    <Icon name="close" size={24} color={'black'}/>
                </TouchableWithoutFeedback>
            </CloseIcon>
        </Container>
    );
};

const Container = styled.View`
    flex-direction : row;
    align-items : center;
`;

const TextBox = styled.TextInput`
    width : 100%;
    border-radius: 5px;
    background-color: #F5F5F5;
    height: 46px;
    padding: 0px 16px;
`;

const CloseIcon = styled.View`
    position : absolute;
    right : 8px;
    background-color : transparent;
`




