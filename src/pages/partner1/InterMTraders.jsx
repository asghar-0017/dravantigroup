import React from 'react'
import '../../assets/style/interM.css'
import ServiceCard from '../../components/serviceCard/servicecard'
import banner from '../../assets/images/interM.webp'
import icon1 from '../../assets/images/intericon.png'
import icon2 from '../../assets/images/intericon1.png'
import subBanner from '../../assets/images/subinterm.png'
import CustomShape from '../../components/testIcons/icon'
import InvestorRegistrationForm from '../../components/investorRegistration/investorRegistration'
import {  Button, Box } from "@mui/material";
import SubscribeForUpdates from '../../components/subscribeForUpdate/subscribeForUpdate'
const InterMTraders = () => {
  return (
    // <div>
    //   <div style={{textAlign:'center',padding:'40px 20px'}}><h1>Inter-M Traders FZ LLE</h1></div>
    //   <div className='main container'>
    //     <div><h6>Inter-M Traders FZ LLE is a “strategic <br /> advisor” and “investor” in private equity <br /> transactions</h6></div>
    //     <div></div>
    //   </div>
    // </div>
    <>
    <div className="main-container" style={{paddingTop: "120px"}}>
        <h1 style={{marginTop:'20px'}}>Inter-M Traders FZ LLE</h1>
      <div className="header">
        <div style={{width:'90%'}}>
            <h3 style={{textAlign:'left',marginTop:'30px',fontSize:'25px',marginBottom:'1.5rem'}}>Inter-M Traders FZ LLE is a “strategic  advisor” and “investor” in private equity transactions</h3>
        <p>
          Inter-M Traders FZ LLE, and its affiliates is a Private Family Office, 
          with multi-billion US Dollars under management and syndication, 
          with over 20 years’ experience in the financial sector, and more than 
          250 acquisitions and investments. We invest in companies which provide 
          critical products and services in various sectors with the focus on green 
          energy, telecommunications, maritime, medical and start-ups.
        </p>
        </div>
        <div style={{width:'90%'}}>
            <img src={banner} style={{width:'100%'}} alt="" />
        </div>
        
      </div>
      <div className="services">
        <ServiceCard 
          icon={icon1}
          title="Advisory Services" 
          description="Providing solutions to complex business and financial problems."
        />
        <ServiceCard 
          icon={icon2}
          title="Investing Services" 
          description="Inter-M is a “strategic advisor” and “investor” in private equity transactions."
        />
      </div>
      <div className="header" style={{marginTop:'30px'}}>
        <div style={{width:'90%'}}>
            <h2 style={{textAlign:'left',marginTop:'30px'}}>Philosophy</h2>
        <p>
        We have a unique view into what matters, and what works, when capitalizing on drivers of business performance and trading opportunities. With decades of experience working with companies to share, analyze, and apply proven practices, we begin with great outcomes and reverse engineer to help unlock your full potential.
        </p>
        <h2 style={{textAlign:'left',marginTop:'30px'}}>Strategy</h2>
        <p>
        Once we make an investment, we  work with the company’s management to  revitalize the business, making it more productive, more  competitive, and more profitable. We achieve this  by, among other things, streamlining operations,  investing in future growth, and growing the top and  bottom lines for the benefit of all stakeholders,  including employees, customers, suppliers, and  stakeholder communities in which the business operates.
        </p>
        <h2 style={{textAlign:'left',marginTop:'30px'}}>Results</h2>
        <p>
        Our number one priority to serve the needs of our investors and clients. This  commitment is reflected in a culture that values integrity,  professionalism, and a passion for excellence. It  also leads us to operate with prudence, financial  discipline, a long-term perspective, and a clear understanding that trust is something we must earn every day.
        </p>
        </div>
        <div style={{width:'90%'}}>
            <img src={subBanner} style={{width:'100%'}} alt="" />
        </div>  
      </div>
      <div className='subDescription'><h4 className=''>Everything we do is guided by a set of principles that define the firm’s character and culture; they have been at the core of Inter-M since its inception. These enduring qualities are the shared convictions that we as partners bring to our professional and personal conduct; they are a fundamental strength of our business.</h4>
    <Box textAlign="center" mt={4}>
  <a href="https://intermtraders.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <Button
      variant="contained"
      type="submit"
      sx={{
        backgroundColor: "black",
        color: "white",
        paddingX: 3,
        paddingY: 1.5,
        fontSize: "14px",
        borderRadius: '20px',
        "&:hover": {
          backgroundColor: "#333",
        },
      }}
      className="dmSans"
    >
      Our website
    </Button>
  </a>
</Box>

    </div>
      
    </div>
    
    <div style={{width:'100%'}}><SubscribeForUpdates /></div>
    
    </>
  );
}

export default InterMTraders
