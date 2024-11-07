import React from 'react';
import '../../assets/style/FeatureSection.css';

const FeaturesSection = () => {
  return (
    <div className="containerss">
      <div className="column">
        <h3>Compliance</h3>
        <ul>
          <li>Places compliant and regulatory compatible protocols at its core.</li>
          <li>Integrates a Smart Contract wrapping to 1:1 the Security Token to ERC-20.</li>
          <li>Enables Exchange listing and functionality.</li>
          <li>Permissioned functionality within the Smart Contract.</li>
        </ul>
      </div>
      <div className="column">
        <h3>Accessibility</h3>
        <ul>
          <li>Accessible through thousands of Payment points across UAE.</li>
          <li>Universal access through Cash, Visa, Mastercard, Google Pay, and Apple Pay.</li>
          <li>Secure verification and Customer on-boarding allows novel payment methods, such as voucher/QR Code.</li>
        </ul>
      </div>
      <div className="column">
        <h3>Security</h3>
        <ul>
          <li>Dravanti Tokens are asset backed to enhance trust and stability of the portfolio.</li>
          <li>Quarterly asset allocations guarantee stable growth and investment value.</li>
          <li>Assets are fully valued, audited, secured and warehoused in tier 1 locations.</li>
        </ul>
      </div>
      <div className="column">
        <h3>Asset</h3>
        <ul>
          <li>Assets are fully owned by Inter-M Traders FZ LLE; fully audited, and secured across multiple sites.</li>
          <li>Assets received industry standard assurance and audit.</li>
          <li>Assets assigned to Dravanti ME portfolio as part of a predictable and stable alignment process.</li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesSection;
