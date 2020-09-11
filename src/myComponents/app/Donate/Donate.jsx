/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import { Checkbox, RadioButton, SelectList, SelectListItem, Input } from 'chayns-components/lib';
import './Donate.css';

function hanldeEnter(event) {
    if (event === '' || event === ' ') {
        console.log('not working!');
    } else {
        console.log(event);
    }
}

function Donate() {
    return (
        <div>
            <h1>Spende jetzt an Künstler XY!</h1>

            <SelectList className="priceList">
                <SelectListItem
                    id={1}
                    name="5 €"
                    className="priceItem"
                />
                <SelectListItem
                    id={2}
                    name="10 €"
                    className="priceItem"
                />
                <SelectListItem
                    id={3}
                    name="15 €"
                    className="priceItem"
                />
                <SelectListItem
                    id={4}
                    name="20 €"
                    className="priceItem"
                />
                <RadioButton className="donateInput">
                    <Input
                        type="number"
                        placeholder="eigener Betrag"
                        onEnter={hanldeEnter}
                    />
                </RadioButton>
            </SelectList>

            <Checkbox
                className="anonym"
                toggleButton
            >
                Anonym
            </Checkbox>
        </div>
    );
}

export default Donate;
