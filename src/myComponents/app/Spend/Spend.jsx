/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { RadioButton } from 'chayns-components/lib';
// import './Spend.css';

export default class Spend extends PureComponent {
    render() {
        return (
            <div>
                <h1>Spende jetzt an Künstler XY!</h1>
                <RadioButton>
                    Anonym
                </RadioButton>

            </div>
        );
    }
}
