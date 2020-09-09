import React, { PureComponent } from 'react';
import './TvProgressBar.css';

export default class TvProgressBar extends PureComponent {
    render() {
        return (
            <div className="tvBar">
                <div className="tvProgress">
                    <p className="milestone">Milestone 1</p>
                </div>
            </div>
        );
    }
}
