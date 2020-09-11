/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-tag-spacing */
import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { Button } from 'chayns-components/lib';
import './App.css';

// Components from litfass
import List from '../myComponents/litfass/List/List';
import QRCode from '../myComponents/litfass/QRCode/QRCode';
import TvProgressBar from '../myComponents/litfass/ProgressBar/TvProgressBar';

// Components from app
import AllDonors from '../myComponents/app/AppDonations/AppDonations';
import Intro from '../myComponents/app/intro/Intro';
import Progressbar from '../myComponents/app/ProgressBar/AppProgressbar';
import Donate from '../myComponents/app/Donate/Donate';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    constructor() {
        super();
        this.state = ({
            didDonate: false,
        });

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState({
            didDonate: true,
        });
    }

    render() {
        // if (chayns.env && chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet) {
        if (chayns.env.isDesktop) {
            return (
                <div className="background">
                    <div className="grid">
                        <div className="gridItem" >
                            <List />
                        </div>
                        <div className="gridItem" id="tvQRCode">
                            <div id="qrItem">
                                <QRCode />
                                <Donate />
                            </div>
                        </div>
                        <div
                            className="gridItem"
                            id="tvProgressBar"
                        >
                            <TvProgressBar />
                        </div>
                    </div>
                </div>
            );
            // eslint-disable-next-line no-else-return
        } else {
            return (
                <div className="flexContainer">
                    {this.state.didDonate
                        ? (
                            <div>
                                <Intro className="appIntro" />
                                <Progressbar className="appProgresBar" />
                                <AllDonors className="appList" />
                            </div>
                        )
                        : (
                            <div className="box">
                                <div className="donateButtonDiv">
                                    <Button
                                        type="submit"
                                        onClick={this.handleSubmit}
                                    >
                                        Spenden
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            );
        }
    }
}

export default App;
export const HotApp = hot(App);
