// import React from 'react';
// import MBMEgroupImage from '../../assets/images/MBMEgroup.png';
// import '../../assets/style/MBMEgroup.css';
// import { FaRegCheckCircle } from "react-icons/fa";
// import TerritoriesCovered from './TerritoriesCovered';
// import UniqueSellingPositions from './UniqueSellingPositions';
// import MBMEgroupMembers from './MBMEgroupMembers';
// import { Button, Box } from '@mui/material';
// import TrustedBy from './TrustedBy'
// import SubscribeForUpdates from '../../components/subscribeForUpdate/subscribeForUpdate';


// const data = [
//   {
//     title: "MBME Pay",
//     description: "A versatile payment services provider revolutionizing the industry with product aggregation services, payment channels, and gateways. We offer unique touch smart kiosk solutions and advanced software development that redefine convenience and efficiency."
//   },
//   {
//     title: "MBME Neo",
//     description: "A groundbreaking digital banking initiative, MBME Neo is on a mission to establish new financial institutions and redefine the banking experience. Our vision is to create seamless, futuristic banking solutions that cater to the evolving needs of our customers."
//   },
//   {
//     title: "MBME Wow Pay",
//     description: "At the forefront of innovation, MBME Wow Pay leads in proprietary financial technology, cutting-edge product R&D, platforms, technology solutions, and unique government digital platforms. We are setting new benchmarks in the fintech industry."
//   },
//   {
//     title: "MBME Wow Pay",
//     description: "We focus on strategic investments and joint ventures that drive growth and innovation. Our portfolio includes:"
//   }
// ];

// const pointsData = [
//   {
//     title: "Integrated Fintech Ecosystem:",
//     description: "Offering an all-encompassing platform that provides multiple, integrated fintech solutions, streamlining your business operations.",
//   },
//   {
//     title: "Market Leader in Digital Innovation:",
//     description: "As the foremost digital and technology provider in the UAE, we set the benchmark for excellence and innovation.",
//   },
//   {
//     title: "Tailored and Seamless Solutions:",
//     description: "Delivering customized digital solutions that fit perfectly with your business needs, ensuring seamless integration and performance.",
//   },
//   {
//     title: "In-House Expertise:",
//     description: "Our team of in-house developers creates cutting-edge software and middleware, guaranteeing top-notch quality and innovation.",
//   },
//   {
//     title: "Trusted Government Partner:",
//     description: "Recognized as a core service provider for government entities, we ensure unparalleled reliability and trustworthiness.",
//   },
//   {
//     title: "24/7 Customer Service:",
//     description: "Providing round-the-clock support to ensure you have assistance whenever you need it.",
//   },
//   {
//     title: "Commitment to Sustainability:",
//     description: "Our technology development and initiatives are deeply rooted in sustainable practices, contributing to a greener future.",
//   },
//   {
//     title: "Extensive Investment Portfolio",
//     description: "Our diverse investments span across digital marketing, media, payment services, trading applications, e-signing, e-learning, immersive VR, and other tech-related services, positioning us as a versatile and forward thinking leader",
//   },
//   {
//     title: "Proven Technology:",
//     description: "Our technology is rigorously tested and widely used, ensuring reliability and effectiveness across diverse applications.",
//   },
// ];

// const MBMEDATA = [
//   {
//     title: "Extensive User Base:",
//     description: "Serving more than 3.2 million users, demonstrating our widespread adoption and trust."
//   },
//   {
//     title: "High Transaction Volume:",
//     description: "Successfully handling more than 90 million transactions annually, showcasing our robust and reliable systems."
//   },
//   {
//     title: "Significant Turnover: ",
//     description: " Achieving an impressive turnover of over 3.2 billion AED, reflecting our strong market presence and financial performance."
//   },
//   {
//     title: "Smart Kiosk Touchpoints:",
//     description: "Operating over 4,000 smart kiosks, providing convenient and efficient service points."
//   },
//   {
//     title: "In-House API Development: ",
//     description: "Developing over 770 in house built APIs, ensuring seamless integration and functionality."
//   },
//   {
//     title: "Multilingual Customer Care:",
//     description: "Dedicated customer service supporting five languages, ensuring comprehensive and accessible support."
//   },
//   {
//     title: "Digital Services Excellence:",
//     description: "Maintaining a strong presence in digital marketing and media with a robust client portfolio, driving success through innovation and expertise."
//   },
// ];

// const MBMEgroup = () => {
//   return (
//     <>
//       <div className="MBMEgroup-container">
//         <div className="MBMEgroup-header">
//           <h2>MBME Group</h2>
//         </div>

//         <div className="MBMEgroup-about">
//           <div className="MBMEgroup-about-text">
//             <h2>About MBME Group</h2>
//             <p>
//               MBME Group P.J.S.C. is a dynamic, home-grown UAE investment powerhouse specializing in cutting-edge
//               technology, digital services and products, company management, and strategic technology investments.
//               We are not just a company; we are a dynamic force driving innovation and excellence across various sectors.
//               At MBME Group, we excel in managing and consolidating technology companies, overseeing the financial,
//               legal, and compliance operations of our diverse ventures.
//             </p>
//           </div>
//           <img src={MBMEgroupImage} alt="MBME Group Logo" />
//         </div>

//         <div className="MBMEgroup-icons">
//   {data.map((item, index) => (
//     <div className="MBMEgroup-icon-box" key={index}>
//       <span className="icon-title">
//         <span>
//         <FaRegCheckCircle className="icon" />
//         </span>
//         <p className="title">{item.title}</p>
//       </span>
//       <p className="description">{item.description}</p>
//     </div>
//   ))}
// </div>

//       </div>

//       <div className='texts'>
//         <div className='our-unique container'>
//           <p>Our unique, integrated ecosystem empowers us to deliver cutting-edge payment solutions to an extensive customer base. Leveraging advanced technology developed in-house, our ecosystem is continuously enhanced through strategic investments and innovative ventures.</p>
//         </div>

//         <div className='with-a-strong container'>
//           <p>With a strong market presence and an unyielding dedication to innovation, we proudly embody the forward-thinking spirit of the UAE. Since our listing on the Abu Dhabi Securities Exchange in 2023, we have become a symbol of growth and excellence, leading the way in shaping the future of technology and finance.</p>
//         </div>
//       </div>

//       <TerritoriesCovered />
//       <UniqueSellingPositions title="Unique Selling Proposition" subtitle="Explore why MBME Group stands out in the market:" points={pointsData} />
//       <MBMEgroupMembers />
//       <UniqueSellingPositions
//         title="MBME Pay"
//         subtitle="MBME Group has proven expertise, exceptional performance, and a track record of excellence in the digital and technology sectors. MBME Pay, a subsidiary of MBME Group, is the largest payment services provider, bill aggregator, software developer, and kiosk manufacturer in the UAE. Established in 2007, MBME Pay simplifies, expedites, and secures electronic payments through integrated omni-channel technology platforms. Services include bill payment, e-wallet top-ups, fine payments, charity donations, voucher purchases, and numerous smart services. MBME Pay’s local expertise ensures solutions tailored to regional needs, prompt resource mobilization, efficient software implementation, and seamless administrative procedures. Dedicated support and maintenance, along with swift problem-solving, make MBME Pay a reliable partner in the UAE’s payment services industry."
//         points={MBMEDATA}
//       />
      
//       {/* Button Centered in Box */}
//       <Box sx={{
//         textAlign:'center',
//     // display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     height: '100vh',  // Centers the button vertically and horizontally
//     margin: '0 auto',
//     // position: 'relative', // Ensure the button's position is relative to its container
//     // top: '20px' // Adjusts the top position just below the content
//   }}>
//          <Button
//     sx={{
//       backgroundColor: 'black',
//       color: 'white',
//       padding: '10px 45px',
//       borderRadius: '20px',
//       fontSize: '16px',
//       '&:hover': {
//         backgroundColor: '#B62175', // Hover color turns pink
//         transform: 'translateY(-5px)', // Slightly raises the button on hover
//       },
//       '@media (max-width:600px)': {
//         padding: '12px 45px', // Adjust button size on smaller screens
//         fontSize: '14px',
//       },
//     }}
//   >
//     Our Website
//   </Button>
  
//       <TrustedBy/>
//       {/* <SubscribeForUpdates /> */}
//       </Box>
//     </>
//   );
// };

// export default MBMEgroup;

import React from 'react';
import MBMEgroupImage from '../../assets/images/MBMEgroup.png';
import '../../assets/style/MBMEgroup.css';
import { FaRegCheckCircle } from "react-icons/fa";
import TerritoriesCovered from './TerritoriesCovered';
import UniqueSellingPositions from './UniqueSellingPositions';
import MBMEgroupMembers from './MBMEgroupMembers';
import { Button, Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import TrustedBy from './TrustedBy';
import SubscribeForUpdates from '../../components/subscribeForUpdate/subscribeForUpdate';

const data = [
      {
        title: "MBME Pay",
        description: "A versatile payment services provider revolutionizing the industry with product aggregation services, payment channels, and gateways. We offer unique touch smart kiosk solutions and advanced software development that redefine convenience and efficiency."
      },
      {
        title: "MBME Neo",
        description: "A groundbreaking digital banking initiative, MBME Neo is on a mission to establish new financial institutions and redefine the banking experience. Our vision is to create seamless, futuristic banking solutions that cater to the evolving needs of our customers."
      },
      {
        title: "MBME Wow Pay",
        description: "At the forefront of innovation, MBME Wow Pay leads in proprietary financial technology, cutting-edge product R&D, platforms, technology solutions, and unique government digital platforms. We are setting new benchmarks in the fintech industry."
      },
      {
        title: "MBME Wow Pay",
        description: "We focus on strategic investments and joint ventures that drive growth and innovation. Our portfolio includes:"
      }
    ];
    
    const pointsData = [
      {
        title: "Integrated Fintech Ecosystem:",
        description: "Offering an all-encompassing platform that provides multiple, integrated fintech solutions, streamlining your business operations.",
      },
      {
        title: "Market Leader in Digital Innovation:",
        description: "As the foremost digital and technology provider in the UAE, we set the benchmark for excellence and innovation.",
      },
      {
        title: "Tailored and Seamless Solutions:",
        description: "Delivering customized digital solutions that fit perfectly with your business needs, ensuring seamless integration and performance.",
      },
      {
        title: "In-House Expertise:",
        description: "Our team of in-house developers creates cutting-edge software and middleware, guaranteeing top-notch quality and innovation.",
      },
      {
        title: "Trusted Government Partner:",
        description: "Recognized as a core service provider for government entities, we ensure unparalleled reliability and trustworthiness.",
      },
      {
        title: "24/7 Customer Service:",
        description: "Providing round-the-clock support to ensure you have assistance whenever you need it.",
      },
      {
        title: "Commitment to Sustainability:",
        description: "Our technology development and initiatives are deeply rooted in sustainable practices, contributing to a greener future.",
      },
      {
        title: "Extensive Investment Portfolio",
        description: "Our diverse investments span across digital marketing, media, payment services, trading applications, e-signing, e-learning, immersive VR, and other tech-related services, positioning us as a versatile and forward thinking leader",
      },
      {
        title: "Proven Technology:",
        description: "Our technology is rigorously tested and widely used, ensuring reliability and effectiveness across diverse applications.",
      },
    ];
    
    const MBMEDATA = [
      {
        title: "Extensive User Base:",
        description: "Serving more than 3.2 million users, demonstrating our widespread adoption and trust."
      },
      {
        title: "High Transaction Volume:",
        description: "Successfully handling more than 90 million transactions annually, showcasing our robust and reliable systems."
      },
      {
        title: "Significant Turnover: ",
        description: " Achieving an impressive turnover of over 3.2 billion AED, reflecting our strong market presence and financial performance."
      },
      {
        title: "Smart Kiosk Touchpoints:",
        description: "Operating over 4,000 smart kiosks, providing convenient and efficient service points."
      },
      {
        title: "In-House API Development: ",
        description: "Developing over 770 in house built APIs, ensuring seamless integration and functionality."
      },
      {
        title: "Multilingual Customer Care:",
        description: "Dedicated customer service supporting five languages, ensuring comprehensive and accessible support."
      },
      {
        title: "Digital Services Excellence:",
        description: "Maintaining a strong presence in digital marketing and media with a robust client portfolio, driving success through innovation and expertise."
      },
    ];
    

const MBMEgroup = () => {
  return (
    <>
      <div className="MBMEgroup-container">
        <div className="MBMEgroup-header">
          <h2>MBME Group</h2>
        </div>

        <div className="MBMEgroup-about">
          <div className="MBMEgroup-about-text">
            <h2>About MBME Group</h2>
            <p>
              MBME Group P.J.S.C. is a dynamic, home-grown UAE investment powerhouse specializing in cutting-edge
              technology, digital services and products, company management, and strategic technology investments.
              We are not just a company; we are a dynamic force driving innovation and excellence across various sectors.
              At MBME Group, we excel in managing and consolidating technology companies, overseeing the financial,
              legal, and compliance operations of our diverse ventures.
            </p>
          </div>
          <img src={MBMEgroupImage} alt="MBME Group Logo" />
        </div>

        <div className="MBMEgroup-icons">
          {data.map((item, index) => (
            <div className="MBMEgroup-icon-box" key={index}>
              <span className="icon-title">
                <span>
                  <FaRegCheckCircle className="icon" />
                </span>
                <p className="title">{item.title}</p>
              </span>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='texts'>
        <div className='our-unique container'>
          <p>Our unique, integrated ecosystem empowers us to deliver cutting-edge payment solutions to an extensive customer base. Leveraging advanced technology developed in-house, our ecosystem is continuously enhanced through strategic investments and innovative ventures.</p>
        </div>

        <div className='with-a-strong container'>
          <p>With a strong market presence and an unyielding dedication to innovation, we proudly embody the forward-thinking spirit of the UAE. Since our listing on the Abu Dhabi Securities Exchange in 2023, we have become a symbol of growth and excellence, leading the way in shaping the future of technology and finance.</p>
        </div>
      </div>

      <TerritoriesCovered />
      <UniqueSellingPositions title="Unique Selling Proposition" subtitle="Explore why MBME Group stands out in the market:" points={pointsData} />
      <MBMEgroupMembers />
      <UniqueSellingPositions
        title="MBME Pay"
        subtitle="MBME Group has proven expertise, exceptional performance, and a track record of excellence in the digital and technology sectors."
        points={MBMEDATA}
      />
      
      {/* Button Centered in Box */}
      <Box sx={{
        textAlign: 'center',
        mt: 4,
      }}>
        <Button
          sx={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 45px',
            borderRadius: '20px',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#B62175', // Hover color turns pink
              transform: 'translateY(-5px)', // Slightly raises the button on hover
            },
            '@media (max-width:600px)': {
              padding: '12px 45px', // Adjust button size on smaller screens
              fontSize: '14px',
            },
          }}
        >
          Our Website
        </Button>
      </Box>

      <TrustedBy />
      <SubscribeForUpdates />
    </>
  );
};

export default MBMEgroup;