/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { RadioButton, SelectList, SelectListItem, Input, Button } from 'chayns-components/lib';
import './Donate.css';

export default class Donate extends PureComponent {
    render() {
        const price = [5, 10, 15, 20, 25];
        return (
            <div>
                <h1>Spende jetzt an Künstler XY!</h1>
                <RadioButton>
                    Anonym
                </RadioButton>
                <div className="priceList">
                    <SelectList className="priceList">
                        <SelectListItem id={1} name="5 €" className="priceItem" />

                        <SelectListItem id={2} name="10 €" className="priceItem" />

                        <SelectListItem id={3} name="15 €" className="priceItem" />

                        <SelectListItem id={4} name="20 €" className="priceItem" />

                        <SelectListItem id={5} name="eigener Betrag" className="priceItem">
                            <Input
                                type="number"
                                placeholder="Betrag"
                            />
                        </SelectListItem>
                    </SelectList>
                    <Button
                        className="donateButton"
                        type="submit"
                    >
                        Spenden
                    </Button>
                </div>


            </div>
        );
    }
}
