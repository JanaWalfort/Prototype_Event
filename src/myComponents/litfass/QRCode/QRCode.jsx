/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import './QRCode.css';

function QRCode() {
    return (
        <div>
            <img
                className="qrcode"
                alt="QR Code"
                src="https://tappqa.tobit.com/training/2020/JW/images/Lokal.png"
            />
            <p className="donate-txt"><strong>Für "Künstler" spenden!</strong></p>
        </div>
    );
}

export default QRCode;
