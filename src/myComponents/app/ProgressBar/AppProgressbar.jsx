/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { ProgressBar } from 'chayns-components/lib';
import './AppProgressbar.css';

export default class AppProgressbar extends PureComponent {
    render() {
        return (
            <div className="bar">
                <ProgressBar
                    value={60}
                >
                    Milestone 1
                </ProgressBar>
            </div>
        );
    }
}
