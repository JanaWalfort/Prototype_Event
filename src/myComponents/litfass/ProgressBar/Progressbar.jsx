/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { ProgressBar } from 'chayns-components/lib';
import './progressbar.css';

export default class Progressbar extends PureComponent {
    render() {
        return (
            <div>
                <ProgressBar
                    value={60}
                >
                    Milestone 1
                </ProgressBar>
            </div>
        );
    }
}
