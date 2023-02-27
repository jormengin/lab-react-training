import React from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const lastFour = number.slice(-4);
  const lastTwo = expirationYear.toString().slice(-2);
  const padMonth = expirationMonth.toString().padStart(2, '0');
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <div className="fith-iteration" style={cardStyle}>
      <div className="logo-container">
        {' '}
        {type === 'Visa' ? (
          <img
          alt='bank-logo'
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png?20091122143639"
            className="logo"
          />
        ) : (
          <img
          alt='bank-logo-2'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1544px-Mastercard-logo.svg.png?20210817144358"
            className="logo"
          />
        )}
      </div>
      <div className="number-container">
        <p>
          <span className="asterisc">**** **** **** </span>
          {lastFour}
        </p>
      </div>
      <div className="detail-container">
        <div className="sub1">
          <p>
            Expires {padMonth}/{lastTwo}
          </p>
          <p>{bank}</p>
        </div>
        {owner}
      </div>
    </div>
  );
};

export default CreditCard;
