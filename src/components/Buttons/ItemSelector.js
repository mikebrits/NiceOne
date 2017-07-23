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

const ItemSelector = ({title, id, onPress, selected}) => {

    return (
        <TouchableWithoutFeedback onPress={() => {onPress(id)}}>
            <Container selected={selected}>
                <ButtonText selected={selected}>
                    {title}
                </ButtonText>
            </Container>
        </TouchableWithoutFeedback>
    );

}

export default ItemSelector;

const Container = styled.View`
    border-width: 2px;
    border-radius: 5px;
    border-color: ${({theme}) => theme.primary};
    background-color: ${({selected, theme}) => selected ? theme.primary : 'transparent'}
    padding: 8px;
    width : 45%;
    margin : 8px;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    color: ${({selected, theme}) => selected ? 'white' : theme.primary};
    text-align: center;
    width: 100%
`;
