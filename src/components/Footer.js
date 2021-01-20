import React from 'react';
import '../styles/footer.css';
import {footData} from './data';
import {AiFillApple} from 'react-icons/ai';
import {IoLogoGooglePlaystore} from 'react-icons/io5';

const keys = Object.keys(footData);
console.log(keys)

const Footer = () => {
    return <React.Fragment>
        <div style={{width: '100%', borderTop: '1px grey solid', 'overflow': 'auto'}}>
            <div className='footer'>
                <div className='content company-details'>
                    <h3 className='f-tit'>AMTICA</h3>
                    <div className='description des'>A book is a medium for recording information in the form of writing or images, typically composed of many pages bound together and protected by a cover.</div>
                    <button className='btn'>Discover</button>
                </div>
                <div style={{float: 'left'}}>
                    {
                        keys.map((item, id) => {
                            return <React.Fragment>
                                <div className='footer-details'>
                                    <h4 key={id} className='f-title'>{item}</h4>
                                    {
                                        footData[item].map(value => {
                                            return <p className='feature'>{value}</p>
                                        })
                                    }
                                </div>
                            </React.Fragment>
                        })
                    }
                </div>
                <div className='app-link'>
                    <h4 style={{color: 'black', float: 'left', marginLeft: '5px'}}>Our App</h4>
                    <div className='link'>
                        <div className='app-left'>
                            <AiFillApple className='link-logo'/>
                        </div>
                        <div className='app-right'>
                            <p style={{fontSize: '10px', margin: '3px 0px 1px 0px'}}>Download on the</p>
                            <p style={{margin: '-4px 0px 3px 0px'}}>App Store</p>
                        </div>
                    </div>
                    <div className='link'>
                        <div className='app-left'>
                            <IoLogoGooglePlaystore className='link-logo'/>
                        </div>
                        <div className='app-right'>
                            <p style={{fontSize: '10px', margin: '3px 0px 1px 0px'}}>Get it on</p>
                            <p style={{margin: '-4px 0px 3px 0px'}}>Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer1'>
                <span className='rights' style={{float: 'left'}}>2020 amtica, All rights reserved</span>
                <div style={{float: 'right', marginRight: '106px'}}>
                    <span className='rights'>Privacy & Cookies</span>
                    <span className='rights'>Accessibility</span>
                </div>
            </div>

        </div>
    </React.Fragment>
}

export default React.memo(Footer);