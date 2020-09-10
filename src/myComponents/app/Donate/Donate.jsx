/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { Checkbox, SelectList, SelectListItem, Input, Button } from 'chayns-components/lib';
import './Donate.css';

export default class Donate extends PureComponent {
    render() {
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
                    <SelectListItem
                        id={5}
                        name="Betrag"
                        className="priceItem"
                    >
                        <div className="donateInput">
                            <Input
                                type="number"
                                placeholder="Betrag"
                            />
                        </div>
                    </SelectListItem>

                </SelectList>


                <Checkbox
                    className="anonym"
                    toggleButton
                >
                    Anonym
                </Checkbox>
                <br />
                <Button
                    className="donateButton"
                    type="submit"
                >
                    Spenden
                </Button>
            </div>
        );
    }
}
