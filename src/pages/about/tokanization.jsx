import React from 'react';
import '../../assets/style/tokanization.css'; // Ensure this is linked correctly
import tokanizationGraph from '../../assets/images/tokanozation-graph.png';
import { FaRegCheckCircle } from "react-icons/fa";
  
const Tokanization = () => {
  return (
    <div className="parent">
      <div className="main-div">
        <h2 className="heading-tokanization average">Tokenization in the Market</h2>
      </div>
      <div className="description-tokanization average " style={{marginBottom:'4rem'}}>
        Real-world assets (RWAs) are the emerging, stable, and scaling player in the on-chain financial ecosystem, shaping views on currencies, commodities, and equities. Emerging technologies and a maturing regulatory ecosystem are closing the gap between traditional investment structures and new financial asset classes that provide increased accessibility and liquidity across multiple investment opportunities. There has been increased interest in the Tokenization of Real-World-Asset commodities, across all commodity types, with large institutions moving en masse towards Tokenized RWA, as a secure, stable, and recognizable asset class. This growth has fueled the market presence of providers and services in the Real-World-Asset and Tokenization space; an ever-expanding range of asset classes are being placed on-chain, with RWA Tokenization pegged at the center of an expansion set to be worth $16 Trillion by 2030.
      </div>

      <div className="timeline-graph-container average">
        <div className="timeline">
          <div className="timeline-item">
            <FaRegCheckCircle fontSize={30} color='#4B6F6B' />
            <div className="timeline-content">
              <span className="strong average">2018</span>
              <div className="timeline-text ">
                &gt; ERC-1400 proposed as security token standard, following the introduction of ST-20 by Polymath in February 2018.
              </div>
            </div>
          </div>
          &nbsp;
          <div className="timeline-item average">
            <FaRegCheckCircle fontSize={23} color='#3E6580' />
            <div className="timeline-content">
              <span className="strong">2019 - 2020</span>
              <div className="timeline-text">
                &gt; Various platforms and institutions explore security token standards.
              </div>
            </div>
          </div>
          &nbsp;

          <div className="timeline-item">
            <FaRegCheckCircle fontSize={30} color='#4B6F6B' />
            <div className="timeline-content">
              <span className="strong">2023</span>
              <div className="timeline-text">
                &gt; RedSwan CRE tokenizes $4 billion real-estate portfolio.<br />
                &gt; Tokenized Gold Surpasses $1B in Market Capitalisation for the first time.<br />
                &gt; JP Morgan debuts its Tokenized Collateral Network platform.<br />
                &gt; ERC-3643 attained ‘Final’ status as security standard on Ethereum.
              </div>
            </div>
          </div>
          &nbsp;

          <div className="timeline-item">
            <FaRegCheckCircle fontSize={30} color='#4B6F6B' />
            <div className="timeline-content">
              <span className="strong">2024</span>
              <div className="timeline-text">
                &gt; Office of the Comptroller of the Currency hosts RWA symposium (US).<br />
                &gt; BlackRock announced RWA tokenization fund on Ethereum Network.<br />
                &gt; Investcorp announces partnership with Securitize. Mastercard announced vision for 100% e-commerce tokenization in Europe by 2030.
              </div>
            </div>
          </div>
        </div>
        <div className="graph-section">
          <img src={tokanizationGraph} alt="Graph showing tokenization market potential" className="graph-image" />
          
          <h2 className=  "future-market average">The future market potential of tokenization is expected to reach ~10.9 Trillion USD by 2030</h2>
        </div>
       




      </div>
    </div>
  );
};

export default Tokanization;
