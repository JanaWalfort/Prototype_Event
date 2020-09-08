/* eslint-disable react/jsx-tag-spacing */
import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './App.css';

// Components
import List from '../myComponents/litfass/List/List';
import Progressbar from '../myComponents/litfass/ProgressBar/Progressbar';
import QRCode from '../myComponents/litfass/QRCode/QRCode';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        if (chayns.env && chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet) {
            return (
                <div className="grid">
                    <List className="list gridItem"/>
                    <Progressbar className="progresbar gridItem" />
                    <QRCode className="qrcode gridItem" />
                </div>
            );
        // eslint-disable-next-line no-else-return
        } else {
            return (
                <div className="grid">
                    <List className="list gridItem"/>
                    <Progressbar className="progresbar gridItem" />
                    <QRCode className="qrcode gridItem" />
                </div>
            );
        }
    }
}

export default App;
export const HotApp = hot(App);
