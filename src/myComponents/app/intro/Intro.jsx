/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import './Intro.css';

export default class Intro extends PureComponent {
    render() {
        const { firstName } = chayns.env.user;
        return (
            <div className="intro-txt">
                <h1>{`Danke für deine Spende, ${firstName}!`}</h1>
            </div>
        );
    }
}
