import React from 'react';
import '../../assets/style/AssetsManegment.css';
import dranantiGraph from '../../assets/images/dravantiGraph.webp';

const AssetsManagment = () => {
    return (
        <div className="assets-container average">
            <h2 className="assets-title ">Asset Management</h2>
            <p className="assets-description">
                Dravanti Middle East is backed and supported by Inter-M Traders FZ LLE, and its associated partners. Inter-M Traders FZ LLE will align fresh liquidity to the Dravanti Portfolio, comprising of multiple asset types and classes, on a quarterly basis, post the initial Token Generation Event.
            </p>
            <p className="assets-description average">
                Assets will be assigned based on market conditions, with enough liquidity and assets maintained at the Group level to ensure adequate portfolio stability, risk management, and long-term investment scalability.
            </p>
            <div className='divrantiGraph'>
                <img src={dranantiGraph} alt="Divranti Graph" className="responsive-image" />
            </div>
        </div>
    );
};

export default AssetsManagment;
