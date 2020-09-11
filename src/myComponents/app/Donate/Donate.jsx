/* eslint-disable no-restricted-globals */
/* eslint-disable padded-blocks */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { Checkbox, RadioButton, SelectList, Input } from 'chayns-components/lib';
import './Donate.css';


export default class Donate extends PureComponent {
    constructor() {
        super();
        this.state = ({
            checked: false,
        });

        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEnter(event) {
        if (event === '' || event === ' ') {
            console.log('not working!');
        } else {
            this.setState({
                checked: true,
            });
        }
    }

    handleChange(event) {

        this.setState(() => ({
            checked: event.target.id,
        }));

        console.log(event);


        console.log('working!');
    }

    render() {
        return (
            <div>
                <h1>Spende jetzt an Künstler XY!</h1>

                <SelectList className="priceList">
                    <RadioButton
                        id="1"
                        className="priceItem"
                        checked={this.state.checked}
                        onChange={() => { this.handleChange(event); }}
                    >
                        5 €
                    </RadioButton>
                    <RadioButton
                        id="2"
                        className="priceItem"
                        checked={this.state.checked}
                        onChange={() => { this.handleChange(event); }}
                    >
                        10 €
                    </RadioButton>

                    <RadioButton
                        id="3"
                        className="priceItem"
                        checked={this.state.checked}
                        onChange={() => { this.handleChange(event); }}
                    >
                        15 €
                    </RadioButton>

                    <RadioButton
                        id="4"
                        className="priceItem"
                        checked={this.state.checked}
                        onChange={() => { this.handleChange(event); }}
                    >
                        20 €
                    </RadioButton>

                    <RadioButton
                        id="5"
                        className="donateInput"
                        checked={this.state.checked}
                        onChange={() => { this.handleChange(event); }}
                    >
                        <Input
                            type="number"
                            placeholder="eigener Betrag"
                            onEnter={this.handleEnter}
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
}
