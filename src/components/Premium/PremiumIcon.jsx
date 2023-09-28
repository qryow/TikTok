import React from 'react';
import { useSelector } from 'react-redux';
import icon from '../../img/premiumIcon.svg';

const PremiumIcon = () => {
    const premiumStatus = useSelector((state) => state.account.premiumStatus);

  return (
    <div>
      {premiumStatus ? (
        <img src={icon} alt="" />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PremiumIcon;
