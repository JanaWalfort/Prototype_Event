/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-tag-spacing */
import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './App.css';

// Components from litfass
import List from '../myComponents/litfass/List/List';
import QRCode from '../myComponents/litfass/QRCode/QRCode';
import TvProgressBar from '../myComponents/litfass/ProgressBar/TvProgressBar';

// Components from app
import AllDonors from '../myComponents/app/AllDonors/AllDonors';
import Intro from '../myComponents/app/intro/Intro';
import Progressbar from '../myComponents/app/ProgressBar/AppProgressbar';

{ /*
    <div>
        <Intro className="intro" />
        <Progressbar className="appProgress" />
        <AllDonors className="appList" />
    </div>
*/ }

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        if (chayns.env && chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet) {
            return (
                <div className="grid">
                    <List className="tvList gridItem" />
                    <QRCode className="tvQrcode gridItem" />
                    <TvProgressBar className="tvProgressbar gridItem" />
                </div>
            );
            // eslint-disable-next-line no-else-return
        } else {
            return (
                <div className="flexContainer">
                    <Intro className="appIntro" />
                    <Progressbar className="appProgresBar" />
                    <AllDonors className="appList" />
                </div>
            );
        }
    }
}

export default App;
export const HotApp = hot(App);
