import React from 'react';

const IconElement = (props) =>
    <span className={`fas fa-${props.icon} mr-3 ${props.className || ''}`} />;

export const FarIconElement = (props) =>
    <span className={`far fa-${props.icon} mr-3 ${props.className || ''}`} />;

export const FabIconElement = (props) =>
    <span className={`fab fa-${props.icon} mr-3 ${props.className || ''}`} />;

export default IconElement;

