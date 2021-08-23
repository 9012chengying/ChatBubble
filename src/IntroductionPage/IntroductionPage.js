import React from 'react';
import './IntroductionPage.css';
import logo from '../resources/images/logo.png'
import ConnectingButtons from "./ConnectingButtons";


const IntroductionPage = () => {
    return (
        <div className='introduction_page_container'>
            <div className='introduction_page_panel'>
                <img src={logo} className='introduction_page_image' />
                <ConnectingButtons />
            </div>
        </div>
    );
};

export default IntroductionPage;


