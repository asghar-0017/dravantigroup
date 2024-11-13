import React from "react";
import "../../assets/style/FeatureSection.css";

const FeaturesSection = () => {
  return (
    <div className="containerss">
      <div className="column average">
        <h3 className="alignment">Compliance</h3>
        <div className="size-Alignment average">
          <p>
            • Places compliant and regulatory compatible protocols at its core.
          </p>
          <p>
            • Integrates a Smart Contract wrapping to 1:1 the Security Token to
            ERC-20.
          </p>
          <p> • Enables Exchange listing and functionality.</p>
          <p> • Permissioned functionality within the Smart Contract.</p>
        </div>
      </div>

      <div className="column">
        <h3 className="alignment">Accessibility</h3>
        <div className="size-Alignment">
          <p> • Accessible through thousands of Payment points across UAE.</p>
          <p>
            {" "}
            • Universal access through Cash, Visa, Mastercard, Google Pay, and
            Apple Pay.
          </p>
          <p>
            {" "}
            • Secure verification and Customer on-boarding allows novel payment
            methods, such as voucher/QR Code.
          </p>
        </div>
      </div>

      <div className="column">
        <h3 className="alignment">Security</h3>
        <div className="size-Alignment">
          <p>
            {" "}
            • Dravanti Tokens are asset backed to enhance trust and stability of
            the portfolio.
          </p>
          <p>
            {" "}
            • Quarterly asset allocations guarantee stable growth and investment
            value.
          </p>
          <p>
            {" "}
            • Assets are fully valued, audited, secured and warehoused in tier 1
            locations.
          </p>
        </div>
      </div>

      <div className="column">
        <h3 className="alignment">Asset</h3>
        <div className="size-Alignment">
          <p>
            {" "}
            • Assets are fully owned by Inter-M Traders FZ LLE; fully audited,
            and secured across multiple sites.
          </p>
          <p> • Assets received industry standard assurance and audit.</p>
          <p>
            {" "}
            • Assets assigned to Dravanti ME portfolio as part of a predictable
            and stable alignment process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
