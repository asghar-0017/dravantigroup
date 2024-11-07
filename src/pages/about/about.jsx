import React from 'react';
import goldLogo from '../../assets/images/dravanti-gold-logo.png';
import '../../assets/style/divranti.css'

const About = () => {
  return (
    <>
    <div className='container'>
      <h2 className='heading'>DRAVANTI Middle East</h2>
      <img src={goldLogo} alt="Dravanti Logo" />
    </div>
    <div className='description container'>Dravanti Middle East, known as “Dravanti”, “Dravanti Group”, or ‘DME’, is a commodity and real-world-asset (RWA) focused Virtual Asset Portfolio Provider.  Dravanti offers a highly secure, stable, and scalable Virtual Asset investment vehicle, offering investors and owners of the Token access to a diversified RWA portfolio.</div>
    </>
  );
};

export default About