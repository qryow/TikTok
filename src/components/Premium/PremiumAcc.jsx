import React from 'react';
import elipse from '../../img/Ellipse1.svg';
import elipse2 from '../../img/Ellipse2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setPremiumStatus } from '../../store/account/AccountSlice';
import './PremiumStyles/Premium.css';

const PremiumAcc = () => {
    const premiumStatus = useSelector((state) => state.account.premiumStatus);
    const dispatch = useDispatch();

    const handleUpgradeToPremium = () => {
        dispatch(setPremiumStatus(!premiumStatus));
    };

    return (
        <div className='premium-acc'>
            <img className='elipse2' src={elipse2} alt="" />
            <img className='elipse' src={elipse} alt="" />
            <div className='credit-card-wrapper'>
                <div className='credit-card front'>
                    <div className='card-title'>CREDIT CARD</div>
                    <div className='card-number'>
                        <div className='card-number-label'>CARD NUMBER</div>
                        <div className='card-numbers'>
                            <input type="text" className='tbx-number-0' maxLength="4" />
                            <input type="text" className='tbx-number-1' maxLength="4" />
                            <input type="text" className='tbx-number-2' maxLength="4" />
                            <input type="text" className='tbx-number-3' maxLength="4" />
                        </div>
                    </div>
                    <div className='card-expiration'>
                        <div className='card-expiration-label'>
                            <div>VALID</div>
                            <div>THRU</div>
                        </div>
                        <div className='card-expiration-month'>
                            <div className='card-expiration-month-label'>MONTH</div>
                            <select className='drp-expiration-month'>
                                <option value="01">01</option>
                                <option value="02">03</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select> 
                        </div>
                        <div className='card-expiration-slash'>/</div>
                        <div className='card-expiration-year'>
                            <div className='card-expiration-year-label'>YEAR</div>
                            <select className='drp-expiration-year'>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='credit-card back unfocused'>
                    <div className='magnetic-strip'></div>
                    <div className='credit-card-ccv'>
                        <div className='credit-card-ccv-label'>CCV CODE</div>
                        <div className='credit-card-ccv-strip'>
                            <div className='credit-card-ccv-box'></div>
                            <input type="text" className='tbx-ccv' maxLength="4" />
                            <div className='credit-card-ccv-prefix'>XXXX</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn' onClick={handleUpgradeToPremium}>order</button>
        </div>
    );
};

export default PremiumAcc;
