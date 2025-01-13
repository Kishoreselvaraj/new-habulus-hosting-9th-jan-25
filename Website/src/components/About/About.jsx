import React from 'react';
import image1 from './imgabout/abouthome.png';
import Card from './Card';
import Vinoth from './imgabout/vinoth.png'
import RameshBabu from './imgabout/Ramesh babu.png'
import Santhosh from './imgabout/Santhosh.png'
import VijayaKumar from './imgabout/Vijayakumar.png'
import PavanHarish from './imgabout/pavanharish.png'
import Voodem from './imgabout/Voodem.png'
import Anil from './imgabout/Anil.png'
import Chaithanya from './imgabout/Chaithanya.png'
import Gnana from './imgabout/Gnana.png'
import Manjunath from './imgabout/Manjunath.png'
import Balaji from './imgabout/Balaji.png'
import Vijay from './imgabout/Vijay.png'
import Subramaniyam from './imgabout/Subramaniyam.png'


function About() {
  return (
    <div id='about' className="about bg-black text-white lg:bg-white lg:text-black">
      <div className="relative pt-5">
        <img className="w-full h-auto" src={image1} alt="Description of the image" />
          <div className="absolute inset-0 flex items-start  text-white  font-bold sm:text-2xl lg:text-3xl p-5 pt-[100px]">
            About Us
          </div>
          <div className="absolute inset-0 flex items-start  text-white sm:text-lg p-6 pt-[140px]">
          About Habulus Groups and our Teams

          </div>
      </div>

      <div className='m-5'>
        <h3 className='text-3xl font-bold font-roboto text-blue-500'>About Habulus Groups</h3>
        <h2 className='text-1xl text-blue-500 font-bold'>BANGALORE'S LEADING REAL ESTATE DEVELOPER</h2>
        <br />
        <p>We are Habulus groups, an real estate enterprise committed to building aspirations and delivering value. Established in 2015, we build residential real estate across Bengaluru. Over 1000+ happy families across 25+ landmark properties stand testimony to our commitment, which is in line with our philosophy of creating superior living spaces that reflect our belief</p>
        <br />
        <h2 className='text-2xl text-blue-500 font-bold'>Building Aspirations</h2>
        <br />
        <p>Habulus Groups properties promise an all-encompassing life. Apart from designing superior living spaces that reflect quality, reliability and excellence in architecture, each Habulus Groups property offers a unique set of modern amenities and facilities that promote community living and make everyday lives healthy and full of excitement. It offers a complete living experience with lifestyle amenities such as a rooftop swimming pool, fully equipped gym, yoga room, games room, outdoor sports, party hall.
        </p>
        <h2 className='text-2xl text-blue-500 font-bold'>
        Why Habulus Groups is Successful</h2>
        <br />
        <p>One of the key factors that determine the reliability of a real estate brand is its capability of delivering projects on time. In addition to the commitment towards homebuyers, Habulus Groups has maintained an impeccable track record of delivering projects on time, everytime, resulting in them becoming one of the good real estate developer in Banglore. Given the current scenario, many real estate brands have been specifically urged to deliver their projects on time, however, Habulus Groups has continued to keep up with its on-time deliveries despite changing times. This makes Habulus Groups a trusted and successful residential partner. Whether you’re on a lookout for your dream home or your next investment, trust Habulus Groups projects in Banglore to find you your perfect match.</p>
        <br />
        <h2 className='text-2xl text-blue-500 font-bold'>About Bangalore</h2>
        <br />
        <p>Known as the centre of India’s high-tech industry, the metropolis of Banglore is attracting individuals from every corner of the country! With incredible work opportunities & rapidly growing commercial & IT sector, young entrepreneurs to established businessmen are giving life to their dreams in this hustling & bustling town of Karnataka.
        <br />

        If you’re a seeking homeowner looking for the most lavish properties with an endless list of amenities & features at your doorstep, properties in Bangalore are just what you need! With an ever-evolving real estate market, you can discover the best 1,2 & 3 BHK apartments for sale in Bangalore. Brimming with new opportunities, discover upcoming and ongoing projects & properties in Bangalore at a flat price at Habulus Groups.</p>
        <br />
        <h2 className='text-2xl text-blue-500 font-bold'>Ongoing Habulus Groups Projects in Bangalore</h2>
        <br />
        <p>At Habulus Groups, we believe in offering every potential homeowner the best properties in Bangalore at a flat price. Offering a wide variety of exclusive amenities, you can find the best luxury flats and prestigious living style in Bangalore at Habulus Groups that are simply a dream come true! Starting at 25 lakhs, here are our 1,2 & 3 BHK apartments in Bangalore.</p>
        <br />
        
      </div>
      <div className='m-5'>
        <h2 className='text-3xl text-blue-500 font-bold'>Meet our Team</h2>
        <br />
        <p>We strongly believe in building relationships & adding creating value within our team and with our partners & customers.</p>
        <br />
      <Card
        imageSrc={Vinoth}
        company="HABULUS HOMES PVT LTD"
        nameof="R.VINOTH KUMAR"
        designation="FOUNDER & DIRECTOR"
        education="B TECH in Civil Engineering ( 10 Years Experience in Construction)"
        title="Card Title"
        description={`Mr. Vinod Kumar Yadav, Founder of Habulus Groups of Companies, is a visionary leader in construction and real estate development with over 10 years of experience. A Civil Engineering graduate from JNTU University, he is the driving force behind the success of Habulus Homes Pvt. Ltd. and Habulus Builders and Developers Pvt. Ltd., known for innovation and excellence.
His projects transform barren lands into vibrant developments in Bangalore, setting standards in construction quality, infrastructure, and sustainability. In 2023, he led R&D efforts introducing 100% sewage recycling, rainwater harvesting, and energy-efficient tropical designs, blending aesthetics with functionality.
As Founder & Managing Trustee of Habulus Groups Foundation, he actively supports education, hospitality, temple renovations, and charitable causes to uplift underprivileged communities.

Mr. Vinod Kumar Yadav– List of key positions
1. Founder & Managing Director - Habulus Groups of Companies.
2. Founder & Chairman - Habulus Groups of Communities
3.Trustee - Habulus Groups Foundation Banglore.
5. Chairman- Habulus Groups Foundation.`
}
    textColor="blue"
      />
      <Card
        imageSrc={RameshBabu}
        company="HABULUS BUILDERS AND DEVELOPERS PVT LTD"
        nameof="G RAMESH BABU "
        designation="Director"
        education="M TECH  10 Years Experience in Construction"
        title="Card Title"
        description="G. Ramesh Babu, Director of Habulus Builders and Developers, is a B.Tech Civil Engineering graduate with over a decade of experience in the construction industry. His extensive knowledge and expertise have been instrumental in delivering high-quality projects that meet client expectations. With a strong focus on innovation and excellence, Ramesh Babu plays a key role in driving the company’s growth and reputation for reliability in the construction sector."
          textColor="blue"
      />
      <Card
        imageSrc={Santhosh}
        company="HABULUS BUILDERS AND DEVELOPERS PVT LTD"
        nameof="M SANTHOSH REDDY "
        designation="Director"
        education="B.COM  15 Years Experience in Construction"
        title="Card Title"
        description="M. Santhosh Reddy, a B.Com graduate from VMRF Deemed University, is the Managing Partner of Habulus Builders and Developers Pvt Ltd. With over 20 years of experience in the construction industry, he began his career in 2002 as a site supervisor. His passion and dedication to the field have been key to his continuous growth and success. Santhosh Reddy's leadership and expertise drive the company's commitment to delivering exceptional construction projects.
"
          textColor="blue"
      />
      <Card
        imageSrc={VijayaKumar}
        company="HABULUS BUILDERS PVT LTD"
        nameof="R VIJAYA KUMAR"
        designation="Director"
        education="ITI  5 Years Experience in Construction"
        title="Card Title"
        description="R. Vijaya Kumar, a graduate with More than Half decade of experience in the marketing  field, began his career as a marketing executive in a real estate company. With a keen  understanding of the industry, he successfully managed and handed over several projects  while overseeing others currently under construction. His expertise in marketing and project  execution has been instrumental in driving growth and ensuring client satisfaction in the real  estate and construction sectors."
        textColor="blue"
      />
      <Card
        imageSrc={PavanHarish}
        company="HABULUS STRUCTURES PVT LTD"
        nameof="D PAVAN HARISH REDDY "
        designation="Director"
        education="B TECH  5 Years Experience in Construction"
        description="D. Pavan Harish Reddy, a B.Tech Civil Engineering graduate from Jain University, Hyderabad  (2014), brings nearly a decade of expertise to the construction industry. Passionate about  elevating quality standards in construction, he combines technical knowledge with a vision for  innovation. As a director at Habulus Structures Pvt Ltd, he drives excellence in every project.  Outside work, he enjoys playing cricket, reflecting his team spirit and dedication."
        textColor="red"
      />
      <Card
        imageSrc={Voodem}
        company="HABULUS STRUCTURES PVT LTD"
        nameof="VOODEM VINAY"
        designation="Director"
        education="B TECH  10 Years Experience in Construction"
        title="Card Title"
        description="Voodem Vinay, a seasoned professional with more than a decade of extensive experience in  the construction industry, excels in project management, site supervision, quality control,  budgeting, and resource optimization for diverse residential and commercial projects. As a  director at Habulus Structures Pvt Ltd, Vinay committed to delivering seamless execution of  construction projects from inception to completion, ensuring strict adherence to safety, quality,  and regulatory standards. His expertise drives excellence and innovation in the industry."
      />
      <Card
        imageSrc={Anil}
        company="HABULUS STRUCTURES PVT LTD"
        nameof="G ANIL KUMAR"
        designation="Director"
        education="MBA  5 Years Experience in Construction"
        title="Card Title"
        description="G. Anil Kumar, an MBA graduate with a strong foundation in marketing, brings Half decade  of expertise and insight to the field. As a partner at Habulus Structures Pvt Ltd, he leverages  his marketing acumen to drive growth and innovation for the company. His strategic approach  and dedication have significantly contributed to building the brand and expanding its  presence in the construction industry. Anil's passion for continuous learning ensures the  company’s success and sustainability in a competitive market."
      />
      <Card
        imageSrc={Chaithanya}
        company="HABULUS STRUCTURES PVT LTD"
        nameof="K CHAITHANYA "
        designation="Director"
        education="B TECH  5 Years Experience in Construction"
        description="K. Chaithanya, a B.Tech Civil Engineering graduate (2014). He comes with over a decade of  experience into construction and marketing. He began his career as a site engineer. In 2016,  driven by ambition and a shared vision, he co-founded Habulus Structures Pvt Ltd with a  group of friends. Under his leadership, the company has successfully completed six projects,  with seven more currently under construction. Chaithanya’s commitment to quality and  innovation has been instrumental in shaping the company’s reputation in the construction  industry."
      />
      <Card
        imageSrc={Gnana}
        company="HABULUS INFRASTRUCTURES PVT LTD"
        nameof="B GNANA PRAKASH"
        designation="Director"
        education="B TECH  5 Years Experience in Construction"
        description="B. Gnana Prakash, a B.Tech Civil Engineering graduate with Half decade of experience in the  construction industry, is a dedicated director at Habulus Infrastructures Pvt Ltd. With a strong  focus on quality and excellence, he values the collective expertise of the team to drive the  company's growth. His commitment to delivering top-tier construction solutions has been key  to building trust and a reputation for reliability in the industry. Prakash’s vision ensures the  company consistently meets and exceeds client expectations."
        textColor="blue"
      />
      <Card
        imageSrc={Manjunath}
        company="HABULUS INFRASTRUCTURES PVT LTD"
        nameof="K MANJUNATH"
        designation="Director"
        education="B TECH  5 Years Experience in Construction"
        description="K. Manjunath, a B.Tech Civil Engineering graduate with Half decade of experience in the  construction industry, serves as a director at Habulus Infrastructures Pvt Ltd. His expertise and  hands-on approach have been pivotal in delivering high-quality construction projects. With a  dedication to excellence and innovation, Manjunath plays a key role in driving the company’s  growth and maintaining its reputation for reliability and trustworthiness in the industry."
        textColor="blue"
      />
      <Card
        imageSrc={Balaji}
        company="HABULUS INFRASTRUCTURES PVT LTD"
        nameof="C D C BALAJI"
        designation="Director"
        education="B TECH  5 Years Experience in Construction"
        description="C. D. C. Balaji, a B.Tech Civil Engineering graduate with Half decade of experience in the  construction industry, is a committed director at Habulus Infrastructures Pvt Ltd. With a strong  foundation in civil engineering and a passion for excellence, he has been instrumental in the  successful execution of various projects. Balaji’s dedication to quality and innovation drives  the company’s mission to deliver reliable and top-notch construction solutions, earning the trust  of clients and stakeholders."
        textColor="blue"
      />
      <Card
        imageSrc={Vijay}
        company="HABULUS INFRASTRUCTURES PVT LTD"
        nameof="A VIJAYA KUMAR"
        designation="Director"
        education="B TECH  5 Years Experience in Construction"
        description="A. Vijaya Kumar, a B.Tech Civil Engineering graduate with Half decade of experience in the  construction industry, is a dedicated director at Habulus Infrastructures Pvt Ltd. His technical  expertise and commitment to excellence have played a vital role in the company’s success.  With a focus on quality and innovative construction practices, Vijaya Kumar contributes to  delivering exceptional projects and driving the growth of the organization."
        textColor="blue"
      />
      <Card
        imageSrc={Subramaniyam}
        company="HABULUS INFRASTRUCTURES PVT LTD"
        nameof="B SUBRAMANYAM"
        designation="Director"
        education="B TECH  5 Years Experience in Construction"
        description="B. Subramanyam, Director of Habulus Builders Pvt Ltd, is a seasoned professional with over six years of experience in the construction and real estate sectors. A Civil Engineering graduate, he has successfully led infrastructure and residential projects, ensuring timely and budget-friendly execution. Subramanyam specializes in financial strategies, risk management, and driving growth, contributing to the company’s consistent success. His commitment to sustainability and community well-being reflects in every project he undertakes."
        textColor="blue"
      />


      </div>
    </div>
  );
}

export default About;
