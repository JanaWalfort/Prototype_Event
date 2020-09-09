/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { List, ListItem } from 'chayns-components/lib';
import './AppDonations.css';

export default class AppDonations extends PureComponent {
    render() {
        return (
            <div className="allDonors">
                <List>
                    <ListItem
                        title="Alle Spenden"
                    >
                        <ListItem
                            className="allItems"
                            title="Lilli"
                            subtitle="10 €"
                        />
                        <ListItem
                            className="allItems"
                            title="Anonym"
                            subtitle="25 €"
                        />
                        <ListItem
                            className="allItems"
                            title="Athur"
                            subtitle="5 €"
                        />
                        <ListItem
                            className="allItems"
                            title="Harry"
                            subtitle="20 €"
                        />
                        <ListItem
                            className="allItems"
                            title="Jana"
                            subtitle="15 €"
                        />
                        <ListItem
                            className="allItems"
                            title="John"
                            subtitle="5 €"
                        />
                        <ListItem
                            className="allItems"
                            title="Anonym"
                            subtitle="10 €"
                        />
                    </ListItem>
                </List>

                <List>
                    <ListItem
                        title="Deine Spenden"
                    >
                        <ListItem
                            className="allItems"
                            title="An Mario"
                            subtitle="2 €"
                        />
                        <ListItem
                            className="allItems"
                            title="An Karl"
                            subtitle="20 €"
                        />
                    </ListItem>
                </List>
            </div>
        );
    }
}
