/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    TouchableWithoutFeedback
} from 'react-native';
import Theme from '../../theme/ThemeHOC';
import styled from 'styled-components/native';

const Button = ({title, icon, onPress, primary, disabled = false, theme}) => {

    const handlePress = () => {
        if (onPress && disabled === false)
            onPress();
    }

    return (
        <TouchableWithoutFeedback onPress={() => handlePress()}>
            <ButtonContainer primary={primary} disabled={disabled}>
                {icon}
                <ButtonText primary={primary}>{title}</ButtonText>
            </ButtonContainer>
        </TouchableWithoutFeedback>
    );

};

export default Theme()(Button);

Button.propTypes = {};

const ButtonContainer = styled.View`
    background-color: ${({theme, primary}) => primary ? theme.primary : 'transparent'};
    border-width: 2px;
    border-radius: 5px;
    border-color: ${({theme}) => theme.primary};
    padding: 8px;
    ${({theme}) => theme.pagePadding}
    justify-content: center;
    align-items: center;
    flex-direction: row;
    opacity: ${ props => props.disabled ? 0.6 : 1};
`;

const ButtonText = styled.Text`
    font-size: 18px;
    color: ${({primary, theme}) => primary ? 'white' : theme.primary};
    margin-left: 8px;
`;

