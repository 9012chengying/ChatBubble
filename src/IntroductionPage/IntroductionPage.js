import React from 'react';
import './IntroductionPage.css';
import logo from '../resources/images/logo.png'

const IntroductionPage = () => {
    return (
        <div className='introduction_page_container'>
            <div className='introduction_page_panel'>
                <img src={logo} className='introduction_page_image' />
            </div>
        </div>
    );
};

export default IntroductionPage;