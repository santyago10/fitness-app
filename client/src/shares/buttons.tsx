import React from 'react';
import '../App.css';
import { observer } from 'mobx-react';

export const Button = observer( props =>(<button className = "button" onClick = {props.onClick} >{props.title}</button>));

export const LogoutButton = observer( props =>(<button className = "logoutButton" onClick = {props.onClick} >{props.title}</button>));