/**
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';
import styled from 'styled-components/native';

export const HelperText = ({children}) => (

    <HelperTextContainer>{children}</HelperTextContainer>
);

const HelperTextContainer = styled.Text`
    ${({theme}) => theme.HelperText}
`;
