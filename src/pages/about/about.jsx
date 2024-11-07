import React from 'react';
import goldLogo from '../../assets/images/dravanti-gold-logo.png';
import '../../assets/style/divranti.css'

const About = () => {
  return (
    <>
    <div className='main-dev'>
      <div className='containers'>
      <h2 className='heading'>DRAVANTI Middle East</h2>
      <img  className='logo'src={goldLogo} alt="Dravanti Logo" />
      </div>

    <div className='description'>Dravanti Middle East, known as “Dravanti”, “Dravanti Group”, or ‘DME’, is a commodity and real-world-asset (RWA) focused Virtual Asset Portfolio Provider.  Dravanti offers a highly secure, stable, and scalable Virtual Asset investment vehicle, offering investors and owners of the Token access to a diversified RWA portfolio.</div>
    {/* Horizal Line */}
    <div className='horoizontal-line'>
      <hr />
    </div>

    <div className='about-dirivanti'>
      <div className='about-content'>
        <h2 className='about'>About Dravanti</h2>
      </div>
      <div className='space'></div>
      <div className='paragraph'>
      <p>
      Upon launching, Dravanti ME’s will harness ~$316m USD in Nickel assets, enabling the release of a fully compliant Security Token. Dravanti is partnered with MBME Group and Gulf Data International, allowing full integration of its Token across UAE payment infrastructure, and full AML/KYC as part of the customer on-boarding journey. 
      </p>
      <p>
      The Dravanti Token will be 1:1 wrapped to an ERC-20 token, allowing listing on Exchanges and unparalleled access to an asset-backed and stable RWA portfolio. Full KYC will be implemented through the Smart Contract, ensuring permissioned release of the ERC-20 tokens.
      </p>
      <p> 
             Post-launch, Inter-M Traders FZ LLE and Dravanti Middle East will ensure the alignment and release of further RWA, precious and semi-precious metals, ranging from between $300m to $1 billion USD allocated at the start of each financial quarter.
      </p>
      <p>
      The allocation of assets will be based on market sentiment, allowing the phased release of assets. Dravanti Middle East will scale securely, reducing market risk while protecting both the portfolio and total circulating token supply. These measures, and strictly controlled liquidity, will allow Dravanti Middle East to scale one of the largest RWA portfolios in the world, offering all investor groups unparallelled access to liquidity and value.
      </p>
      </div>
      
      </div>
    </div>

    </>
  );
};

export default About