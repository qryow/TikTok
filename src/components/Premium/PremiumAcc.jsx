import React from 'react';
import elipse from '../../img/Ellipse1.svg';
import elipse2 from '../../img/Ellipse2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setPremiumStatus } from '../../store/account/AccountSlice';
import styles from './PremiumStyles/Premium.module.css';

const PremiumAcc = () => {
    const premiumStatus = useSelector((state) => state.account.premiumStatus);
    const dispatch = useDispatch();

    const handleUpgradeToPremium = () => {
        dispatch(setPremiumStatus(!premiumStatus));
    };

    return (
        <div className={styles['premium-acc']}>
            <img className={styles['elipse2']} src={elipse2} alt="" />
            <img className={styles['elipse']} src={elipse} alt="" />
            <div className={styles['credit-card-wrapper']}>
                <div className={`${styles['credit-card']} ${styles['front']}`}>
                    <div className={styles['card-title']}>CREDIT CARD</div>
                    <div className={styles['card-number']}>
                        <div className={styles['card-number-label']}>CARD NUMBER</div>
                        <div className={styles['card-numbers']}>
                            <input type="text" className={styles['tbx-number-0']} maxLength="4" />
                            <input type="text" className={styles['tbx-number-1']} maxLength="4" />
                            <input type="text" className={styles['tbx-number-2']} maxLength="4" />
                            <input type="text" className={styles['tbx-number-3']} maxLength="4" />
                        </div>
                    </div>
                    <div className={styles['card-expiration']}>
                        <div className={styles['card-expiration-label']}>
                            <div>VALID</div>
                            <div>THRU</div>
                        </div>
                        <div className={styles['card-expiration-month']}>
                            <div className={styles['card-expiration-month-label']}>MONTH</div>
                            <select className={styles['drp-expiration-month']}>
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
                        <div className={styles['card-expiration-slash']}>/</div>
                        <div className={styles['card-expiration-year']}>
                            <div className={styles['card-expiration-year-label']}>YEAR</div>
                            <select className={styles['drp-expiration-year']}>
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
                <div className={`${styles['credit-card']} ${styles['back']} ${styles['unfocused']}`}>
                    <div className={styles['magnetic-strip']}></div>
                    <div className={styles['credit-card-ccv']}>
                        <div className={styles['credit-card-ccv-label']}>CCV CODE</div>
                        <div className={styles['credit-card-ccv-strip']}>
                            <div className={styles['credit-card-ccv-box']}></div>
                            <input type="text" className={styles['tbx-ccv']} maxLength="4" />
                            <div className={styles['credit-card-ccv-prefix']}>XXXX</div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleUpgradeToPremium}>order</button>
        </div>
    );
};

export default PremiumAcc;
