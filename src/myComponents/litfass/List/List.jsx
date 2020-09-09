import React, { PureComponent } from 'react';
import './List.css';

export default class List extends PureComponent {
    render() {
        return (
            <div>
                <div className="list">
                    <div className="listItem" id="item1">
                        <p>Lilli</p>
                        <p>10 €</p>
                    </div>
                    <div className="listItem" id="item2">
                        <p>Anonym</p>
                        <p>25 €</p>
                    </div>
                    <div className="listItem" id="item3">
                        <p>Athur</p>
                        <p>5 €</p>
                    </div>
                    <div className="listItem" id="item4">
                        <p>Harry</p>
                        <p>20 €</p>
                    </div>
                    <div className="listItem" id="item5">
                        <p>Jana</p>
                        <p>15 €</p>
                    </div>
                </div>
            </div>
        );
    }
}
