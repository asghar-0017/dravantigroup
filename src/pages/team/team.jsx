import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Interim from "../../assets/images/inter-m.png";
import MBME from "../../assets/images/mbme.webp";
import GDI from "../../assets/images/gdi.png";

const TeamSection = () => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        direction="column"
        alignItems="center"
        width={"85%"}
      >
        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          <img
            src={Interim}
            alt="Logo 1"
            style={{
              width: "100%",        // The image will take up 100% of the available width of its container
              maxWidth: 300,       // The image will not exceed 300px in width
              height: "auto",      // Height adjusts automatically to maintain aspect ratio
              marginBottom: 16     // Keep the margin at the bottom
            }}          />
          <Typography
            variant="h5"
            color="#47776E"
            fontSize={50}
            className="roboto"
            fontWeight={700}
            textAlign={"center"}
          >
            Inter-M Traders <br /> Team
          </Typography>
        </Grid>

        <Grid item xs={12} container direction="column" alignItems="center">
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Demetri Michalakis
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Inter-M Traders Chairman, and Dravanti Middle East Chairman & CEO.
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Demetri Michalakis is a recognized international investor in the
              energy, medical research, and well-known commodities trader. With
              more than 25 years of experience building and funding
              multibillion-dollar hedge funds and private equity firms in
              Europe, Hong Kong, and the Middle East, he has accumulated a
              substantial portfolio of public offerings through which innovation
              and pioneering engineering is successfully delivered to the market
              through value creation. Together with his Group of Companies and
              associated private equity funds, Mr. Michalakis has accumulated a
              capital fund structure of more than USD50 billion. In addition to
              venture capital and private equity funding, he is now focused on
              investments in telecommunications, wireless and satellite
              communications, medical science, and start-ups.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Aristotle Michalakis
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Managing Director Inter-M Traders, Vice President of Bakhu
              Holdings, and Dravanti Middle East Managing Director
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Aristotle Michalaki is Head of Investment Relations at Inter-M
              Traders, is a results-driven individual with knowledge in business
              development, and highly organized in client relationship
              management. Excels in finding solutions to the potential hidden
              risks that may disrupt their financial plan. Mr Michalaki has a BS
              in Risk Management, and a Minor in International Business from
              Penn State University, where he completed his studies a year
              early. He has an immense range of providing advisory services in a
              wide variety of sectors and provided financial planning to
              pharmaceutical and bio-medical companies, CPAs, attorneys, and
              government bodies. He currently holds licenses with FINRA (series
              7 and series 66) and NIPR (life insurance, accident and health
              insurance, property insurance and casualty insurance).{" "}
            </Typography>

            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Mr Michalaki’s potent blend of managerial and sales expertise
              demonstrate a successful track record of increasing sales and
              market share by establishing strong alliances with top clients and
              referral sources, consistently ranked among top performers in a
              highly competitive industry. Prior to joining Inter-M Traders, Mr
              Michalaki was a well-respected planner at Prudential. There he was
              on the President’s Council as one of the top producers in their
              international company. His base of duties ranged from advising
              individual to leading seminars for top corporations.At Inter-M
              Trading Mr Michalaki leads a team in research raising funds and
              develops operational risk management plans. He also ensures the
              company is appropriately and strategically positioned with
              analysist, investors, and all stakeholders.{" "}
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Juan Carlos Garcia La Sienra Garcia
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Chief Financial Officer | Leading Financial Planning and Driving
              International Financial Strategy
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Mr. Garcia is an accomplished financial leader with extensive
              experience across various industries. As the Chief Financial
              Officer, Director, and Board Member of Bakhu Holdings Corp, a
              pioneering biotechnology company, he has been instrumental in
              driving the company’s success and industry leadership. In addition
              to his role at Bakhu Holdings Corp, Mr. Garcia is the President
              and CEO of Borromeo Group, an international firm offering tax,
              financial, and advisory services in the US, EU, Mexico, and
              Argentina. Under his leadership, Borromeo Group has achieved
              significant growth and established itself as a trusted partner for
              businesses seeking expert financial solutions.Mr. Garcia’s career
              includes notable positions such as President of Woodbrook Group
              Holdings Inc., where he led strategic initiatives for business
              expansion, and founder and President of EPR Holdings,
              revolutionizing disbursement solutions in the financial industry.
            </Typography>

            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Mr. Garcia is an accomplished financial leader with extensive
              experience across various industries. As the Chief Financial
              Officer, Director, and Board Member of Bakhu Holdings Corp, a
              pioneering biotechnology company, he has been instrumental in
              driving the company’s success and industry leadership. In addition
              to his role at Bakhu Holdings Corp, Mr. Garcia is the President
              and CEO of Borromeo Group, an international firm offering tax,
              financial, and advisory services in the US, EU, Mexico, and
              Argentina. Under his leadership, Borromeo Group has achieved
              significant growth and established itself as a trusted partner for
              businesses seeking expert financial solutions.Mr. Garcia’s career
              includes notable positions such as President of Woodbrook Group
              Holdings Inc., where he led strategic initiatives for business
              expansion, and founder and President of EPR Holdings,
              revolutionizing disbursement solutions in the financial industry.
              Mr Garcia’s previous roles also include Chief Financial Officer of
              TCB Pay Ltd. and President of HGM Capital, demonstrating his
              expertise in financial management and global payment systems.
              Beginning his career at PwC in the International Tax Area, Mr.
              Garcia has also held key financial leadership roles at Blue Label
              Telecoms, Reebok, and First Data. He holds an Accounting
              Bachelor’s Degree from Anahuac University and is a Certified
              Public Accountant, exemplifying his commitment to excellence and
              high professional standards. Mr. Garcia’s exceptional leadership,
              strategic vision, and financial acumen make him a valuable asset
              to any organization, distinguished by his ability to drive growth,
              optimize financial operations, and navigate complex business
              environments.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              fontFamily="Roboto"
            >
              Yiolanda Papargyrou
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Dravanti Middle East Compliance Lead
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Yiolanda Papargyrou is a distinguished Corporate Manager with an
              exemplary reputation in the Corporate Legal Services Industry. Her
              exceptional leadership and managerial skills, coupled with her
              extensive 27 years of experience, render her an invaluable asset
              to any organization. Ms. Papargyrou commenced her career in
              corporate legal services following the completion of her Associate
              Degree in Business Administration from the University of Wales
              (1991-1993) and subsequently earned a Postgraduate Diploma from
              the same institution in 1995. Throughout her career, she has
              consistently advanced to roles of increasing responsibility and
              authority.
            </Typography>

            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              In her current capacity as Head of Corporate, Ms. Papargyrou has
              demonstrated her indispensable value to our team. She possesses
              comprehensive knowledge of the industry and adeptly identifies and
              addresses the specific needs of our corporate clients. As the
              primary point of contact for these clients, she swiftly builds and
              sustains trust-based relationships. Ms. Papargyrou’s expertise and
              meticulous attention to detail are unrivaled. She excels in
              identifying potential issues pre-emptively and provides proactive
              solutions to mitigate them. Her dedication to delivering superior
              service to our clients has solidified her outstanding reputation
              in the industry.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Stathis Galazis
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Dravanti Middle East Accounting / Back-Office Support
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Stathis Galazis is a highly skilled IT accountant with over 9
              years of experience. He is dedicated to helping businesses of all
              sizes streamline their financial processes, staying ahead of the
              curve in today’s digital landscape. He provides expert guidance on
              financial matters, helping clients navigate the complexities of
              accounting and technology. His expertise in implementing
              accounting software, managing data security, and optimizing
              financial operations has helped many of our clients achieve
              significant cost savings and improve their bottom line. Stathis is
              a firm believer in building strong relationships with clients, and
              works closely with them to understand their unique needs and
              goals.
            </Typography>

            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Stathis harnesses this experience to develop tailored solutions
              that meet specific requirements. His dedication to providing
              exceptional customer service has earned him a reputation as a
              trusted advisor to many. In addition to his technical skills,
              Stathis maintains currency on latest industry trends and
              regulations, regularly attending professional development seminars
              and workshops to ensure he is equipped with the knowledge and
              skills needed.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Konstantinos Mallinis
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Vice President Business Development, Europe Inter-M Traders FZ LLE
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Konstantinos Mallinis is a Strategist in business development and
              sales leadership for over 20 years, in the fields of financial
              services, healthcare and aesthetic medicine. He is skilled in
              analyzing the market and the customer. He has managed
              implementations of holistic management consultancies in the
              medium-sized sector. In particular, the area of corporate
              reorganization such as portfolio reorganization, organizational
              reorganization, financial reorganization, or restructuring.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Lars Ali Johnson
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Advisor To Chairman in Inter-M Traders FZ-LLE and Dravanti Middle
              East.
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Lars Ali Johnsen, has worked in the MENA, Asia and CIS region for
              20+ years building an exclusive network among Corporates and
              Governments. He has deep understanding and expertise in the Energy
              Sector, telecom monitor Security Industry, Commodities, General
              Trading and Virtual Assets. Thanks to his established network and
              deep experience, Lars Ali has worked in significant positions and
              participated in projects aimed at advising governments on energy,
              sustainability, regulatory frameworks, default security and
              financial milestones for PPA . Notably, his renewable energy
              projects involved supporting the UAE Royal Families, with notable
              projects. Lars Ali have done implement of Xpress money in CIS,with
              presence across 180 countries 200,000 locations. Lars Ali Johnsen
              was the authorised representative of Netoil Inc, in the Republic
              of Kazakhstan. Lars Ali Johnsen, has also been the manager of
              various virtual assets projects since 2017, will implement our
              strategic plans regarding the Virtual Assets market.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Tauri Berg
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Senior Global Business Development
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Tauri Berg has been an entrepreneur since a young age. He has
              lived and managed companies in several locations in the World.
              Tauri passion is the development of companies in very different
              sectors – real estate development, civil construction, road
              construction, shipbuilding, forestry, asset management, commodity
              trading and financial advisory. Tauri has studied production and
              marketing, international business management, and law. And
              upgraded himself in financial management, accounting and risk
              management. His diverse educational background equips him with a
              unique perspective on the intersection of technology, legal
              frameworks, and market trends. This multifaceted expertise is
              pivotal in navigating the complexities of modern business,
              especially in the face of rapid technological advancements.
              Embracing the future of finance, Tauri has actively engaged in the
              Virtual Asset market, recognizing its disruptive impact on
              traditional financial systems. His legal education provides him
              with a solid foundation to navigate the regulatory landscape of
              Virtual Asset trading, ensuring compliance while capitalizing on
              emerging opportunities.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb={4}
          borderTop="2px solid black"
        >
          <img
            src={MBME}
            alt="Logo 1"
            style={{ width: 150, height: "auto", marginBottom: 16 }}
          />
          <Typography
            variant="h5"
            color="#47776E"
            fontSize={50}
            className="roboto"
            fontWeight={700}
            textAlign={"center"}
          >
            MBME Group <br /> Team
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="column" alignItems="center">
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Abdelhadi Mohamed
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Managing Director and Group CEO
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Abdelhadi Mohamed has an extensive career managing businesses,
              includingthe International Petroleum Investment Company (IPIC),
              Mubadala, and Al Hilal Bank. He played a crucial role as a member
              of the merger committee of IPIC and Mubadala. His diverse
              experience spans industries such as trade, hospitality,
              healthcare, education, and FinTech, managing assets worth USD 1.5
              billion. Mr. Mohamed holds an MBA from New York University and has
              significant expertise in restructuring, investments, and business
              development. His leadership at MBME Group is marked by driving
              successful growth, navigating challenges, and inspiring his teams
              towards achieving strategic goals.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Briseida Sinaj
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Chief Financial Officer
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Briseida Sinaj is a distinguished finance professional with
              extensive experience in leadership roles. As the Group CFO at MBME
              Group, she leverages her strong finance background and strategic
              insight. She holds a master’s degree in finance and is a certified
              management accountant. Briseida has furthered her education at
              Harvard Business School and the University of Oxford. Her previous
              roles include Head of FP&A at Lootah Holding and Yap, and CFO at
              Emirates Digital Wallet. Briseida’s financial acumen, combined
              with her certification as a life coach and KTCI NLP practitioner,
              enables her to foster effective communication and collaboration
              within and outside the organization.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Vinod Kumar
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Chief Technology Officer
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Vinod Kumar is a seasoned IT professional with a robust background
              in FinTech and IT. He holds a Bachelor of Science in Information
              Technology anda Master in Computer Science from Dr. Ambedkar
              University. Vinod started his career at MBME in 2010 and has risen
              to the position of Group CTO. He possesses a deep understanding of
              networking and security, with certifications including MCSA, MCSE,
              MCITP, CCNA, CCNP, and CCIP. His expertise spans software
              development, cloud computing, cybersecurity, and IT
              infrastructure. Vinod’s extensive experience and commitment to
              continuous learning enable him to leverage technology to address
              complex challenges and drive business improvement.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Khalfan Al Qemzi
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Chief Business Development and Operations Officer
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Khalfan Al Qemzi serves as the Chief Business Development and
              Operations Officer at MBME Group. He holds a bachelor’s degree and
              a diploma in business administration from Al Ghurair University,
              along with numerous certifications in personal development.
              Khalfan’s career includes significant roles at Eagle Hills
              Properties LLC, Al Hilal Bank, and IPIC. His expertise lies inHR
              management, employee relations, coaching, recruitment, and
              manpower planning. Khalfan is known for his strategic oversight in
              enhancing operational productivity and driving business
              development initiatives. He is an Associate Member of the
              Chartered Institute of Personal Development, reflecting his
              commitment to professional growth and best practices.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Sarine Saatdjian
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Head of Compliance
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Sarine Saatdjian epitomizes knowledge and innovation within the
              global finance landscape, boasting over 15 years of expertise in
              business, governance, compliance, and audit across diverse
              industries. In her role as Head of Compliance at MBME Group, she
              brings a wealth of experience. From shaping successful strategic
              insights at Ernst & Young, to playing a pivotal role in the
              NBAD-FGB merger (FAB), Sarine has been instrumental in guiding
              organizations towards their goals with innovative solutions. She
              adeptly navigates market dynamics and trends to ensure long-term
              sustainability. Educated at prestigious institutions including
              SOAS, University of London, and McGill University, Sarine’s
              influence spans jurisdictions across the GCC, Middle East, Asia,
              Africa, Europe, and the Americas. Her commitment to fostering
              enduring viability through creative compliance solutions makes her
              an invaluable asset to any organization.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              El Mutaz Hassan
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Head of Business Development & Operations
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              El Mutaz Hassan brings over eight years of business development
              experience, with a strong emphasis on the FinTech sector. He has
              successfully managed a wide range of projects in both the private
              and public sectors, focusing on innovative and cost-effective
              strategies to enhance productivity, revenue, and efficiency. El
              Mutaz is a certified Project Management Professional (PMP) and
              holds a Bachelor of Science in Engineering from the University of
              Khartoum. His expertise spans both managerial and technical
              aspects of process and procedure optimization. His extensive
              professional knowledge and commitment to excellence make him an
              invaluable asset in the FinTech industry
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb={4}
          borderTop="2px solid black"
        >
          <img
            src={GDI}
            alt="Logo 1"
            style={{
              width: "100%",        // The image will take up 100% of the available width of its container
              maxWidth: 250,       // The image will not exceed 300px in width
              height: "auto",      // Height adjusts automatically to maintain aspect ratio
              marginBottom: 16     // Keep the margin at the bottom
            }}
          />
          <Typography
            variant="h5"
            color="#47776E"
            fontSize={50}
            className="roboto"
            fontWeight={700}
            textAlign={"center"}
          >
            Gulf Data International
            <br /> Team
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="column" alignItems="center">
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Omar Atta
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Chief Executive Officer at GDI
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Omar Atta is the CEO of Gulf Data International (GDI), where he
              focuses on advancing AI-driven solutions and improving business
              performance across the MENA region. HE has served as the Chief
              Executive Officer at GDI since February 2022, after holding the
              role of Chief Commercial Officer from October 2017 to January
              2022. Under his leadership, GDI has expanded its operations and
              continued to deliver high-quality technology solutions. Omar
              drives innovation in digital onboarding, mobile e-KYC, biometric
              authentication and optimization.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Mazen Allaf
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Chief Strategy Officer at GDI
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Mazen Allaf serves as the Chief Strategy Officer at Gulf Data
              International (gDi), focusing on strategy and performance
              improvement to drive innovation and strategic growth across the
              MENA region. He has over 15 years of experience in strategy and
              performance improvement across a wide spectrum of sectors and
              industries, including oil and gas, technology, banking, energy and
              utilities, real estate, financial services, and transportation in
              both the public and private sectors.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Muneer BC
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Head of Development & Solution Architect
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Muneer BC, as the Head of Development & Solution Architect, brings
              19 years of experience in IT, focusing on development leadership
              and innovation. He excels in implementing agile methodologies and
              optimizing processes to enhance productivity and efficiency. He
              holds a Master’s in Computer Science and has worked across
              government and private sectors. He is skilled in Microsoft .NET
              technologies, various databases (Oracle, SQL Server, PostgreSQL,
              MongoDB), and has expertise in Windows/Linux, open-source
              technologies, IoT, and low-code platforms. His experience covers
              the full software development lifecycle and project management,
              emphasizing continuous learning and improvement.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Mohammed Hajr
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Solution Architect
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Mohammed Hajr is Solution Architect at GDI with eight years of
              experience in various technology domains. Known for his
              problem-solving skills and versatility, he excels in bridging the
              gap between technical development and client needs. His background
              includes roles in mobile app development, full-stack engineering,
              and DevOps, Cloud, and infrastructure automation. His broad
              expertise enables him to effectively a wide range of technical
              challenges.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Basel Sheikh
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Head of Sales at GDI
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Basel Sheikh is the Head of Sales at GDI Solutions, where he
              leverages over 15 years of experience to drive multimillion-dollar
              revenue growth and secure key clients. His role drive strategic
              digital experience transformation and involves expanding market
              share, building strong business relationships, and leading a
              high-performing sales team. He has a proven track record of
              success in sales strategy, including mentoring and coaching, and
              has been instrumental in recruiting and retaining top talent. His
              international experience spans assignments in the U.S., U.K, UAE,
              Oman, Qatar, Saudi Arabia, and Turkey.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Aya Elbousaily
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Director of Client Relations at GDI
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Aya leads client relations at GDI, ensuring client satisfaction
              and fostering long-term partnerships through strategic planning
              and effective communication. Aya has been with GDI since 2015,
              specializing in maintaining positive client relationships,
              resolving issues, and developing strategies for client retention.
              She holds a Bachelor’s in Law from Ain Shams University and has
              extensive experience in the IT and investment banking industries,
              bringing expertise in business development and project management.
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              fontSize={20}
              color="#233032"
              className="roboto"
            >
              Aisha Saleh
            </Typography>
            <Typography
              variant="h6"
              paragraph
              fontSize={15}
              color="#7A7A7A"
              className="roboto"
            >
              Account Manager at GDI{" "}
            </Typography>
            <Typography variant="body1" paragraph fontSize={15} color="#475355">
              Aisha manages key client accounts, ensuring exceptional service
              delivery and fostering strong client relationships across the MENA
              region. She has been a part of the commercial team at GDI since
              2016, where she specializes in managing client accounts, ensuring
              their needs are met through effective communication and project
              management. She holds dual BA (Hons) degrees in Media Marketing
              from Asia Pacific University of Technology and Innovation (APU).
              With a strong background in client services and customer support,
              Aisha brings expertise in client relationship management,
              strategic account planning, and service delivery to her role.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamSection;
