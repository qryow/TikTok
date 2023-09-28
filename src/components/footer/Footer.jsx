import React from 'react';
import style from './footer.module.css';
import logo from '../../img/tiktokLogoBlack.svg';

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.footer_up}>
                <img src={logo} alt="" />
                <div className={style.footer_table}>
                    <tr>
                    <th>Company</th>
                    <th>Programs</th>
                    <th>Resources</th>
                    <th>Legal</th>
                    </tr>
                    <tr>
                        <td><span>About TikTok</span></td>
                        <td><span>TikTok for Good</span></td>
                        <td><span>Help Center</span></td>
                        <td><span>Cookies Policy</span></td>
                    </tr>
                    <tr>
                        <td><span>TikTok Browse</span></td>
                        <td><span>TikTok Embeds</span></td>
                        <td><span>Safety Center</span></td>
                        <td><span>Privacy Policy for Younger Users</span></td>
                    </tr>
                    <tr>
                        <td><span>Newsroom</span></td>
                        <td><span>Effect House</span></td>
                        <td><span>Creator Portal</span></td>
                        <td><span>Intellectual Property Policy</span></td>
                    </tr>
                    <tr>
                        <td><span>Contact</span></td>
                        <td><span>TikTok for Developers</span></td>
                        <td><span>Community Guidelines</span></td>
                        <td><span>Law Enforcement</span></td>
                    </tr>
                    <tr>
                        <td><span>Careers</span></td>
                        <td><span>Advertise on TikTok</span></td>
                        <td><span>Transparency</span></td>
                        <td><span>Privacy Policy</span></td>
                    </tr>
                    <tr>
                        <td><span>ByteDance</span></td>
                        <td><span>TikTok Rewards</span></td>
                        <td><span>Accessibility</span></td>
                        <td><span>Terms of Service</span></td>
                    </tr>
                </div>
            </div>
            <p>©2023 TikTok</p>
        </div>
    );
};

export default Footer;