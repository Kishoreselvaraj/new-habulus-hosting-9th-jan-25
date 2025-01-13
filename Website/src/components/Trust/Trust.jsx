import React from 'react';
import { useState,useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Trust.css';
import image1 from './trustimg/image1.jpg';
import image2 from './trustimg/image2.jpg'
import image3 from './trustimg/image3.jpg'
import image4 from './trustimg/image4.jpg'
import document1 from './trustimg/document1.jpg';
import document2 from './trustimg/document2.jpg';
// import document3 from './trustimg/document3.jpg';
// import document4 from './trustimg/document4.jpg';
import charity from './trustimg/donation.png'
// import Qr from './trustimg/Qr Code.jpg'
// import donate from './trustimg/donate logo.jpg'
import habulusLogo from './trustimg/Habulus logo.jpg'
import verified from './trustimg/verified.png'
// import BankDetails from './BankDetails';

function Trust() {
  // Array of image URLs for the carousel
  const patientImages = [
  { src: image1, alt: 'Aasif in hospital 1', smallSrc: image1 },
  { src: image2, alt: 'Aasif in hospital 2', smallSrc: image2 },
  { src: image3, alt: 'Aasif in hospital 3', smallSrc: image3},
  { src: image4, alt: 'Aasif in hospital 4', smallSrc: image4},
  { src: document1, alt: 'Aasif in hospital 1', smallSrc: document1},
  { src: document2, alt: 'Aasif in hospital 2', smallSrc: document2},
  // { src: demo1, alt: 'Aasif in hospital 4', smallSrc: demo2 }
];
const habulusFoundation = [
  { src: 'img/des 2.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 2.png' },
  { src:'img/des 3.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 3.png' },
  { src:'img/des 4.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 4.png' },
  { src:'img/des 5.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 5.png' },
  { src:'img/des 6.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 6.png' },
  { src: 'img/des 7.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 7.png' },
  { src:'img/des 8.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 8.png' },
  { src:'img/des 9.png', alt: 'Aasif in hospital 4', smallSrc: 'img/mob 9.png' },
  // { src:'img/des 2.png', alt: 'Aasif in hospital 4', smallSrc: demo2 },
  
];

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    // Function to update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="foundation-page">
      <div className='mt-10'>
        <div className='donation-content-heading'>
          <div></div>
        <img  className='logo' src={habulusLogo} alt="" />
          <div className='heading'>
          <h1 className='foundation-heading'>Habulus Foundation</h1>
          <h5 className="foundation-description" style={{color:'#154166'}}>
          Help the child save the life
          </h5>

          </div>
        </div>
      </div>
      {/* Foundation Information Section */}
      <div className='top-content'>
        <p>Habulus Foundation is raising funds to support cancer patients in need. Your contribution can provide essential treatment and bring hope to their journey.</p>
        <h2 style={{color:"#154166", }}>Treatment details 
        </h2>
        <p>
        For the patient total cost for the hospital is 10.5 Lakh for three years 
        First year amount 3.5 lakhs paid by Tata Cancer Foundatikn Mumbai 
        Second year 3.5 lakhs we are planning to pay from Habulus Foundation for that we are raising fund request
        </p>
        <h2 style={{color:"#154166", }}>Patient Details</h2>
        <p>
          Here are the patients we’re supporting. Every donation brings them one step closer to healing.
        </p>
        <h2 style={{color:"#154166", }}>Support Aasif To Recover From T- Lymphoblastic Lymphoma (Cancer)</h2>
        <p>
          My name is Naveen, and I am raising funds for my 12-year-old friend Aasif, who lives in Vellore, Tamil Nadu, and has been battling T-Lymphoblastic Lymphoma (Cancer). He is receiving treatment at CMC Hospital, and we urgently need Rs. 7,00,000 more for his further care—any contribution will be a huge help; please share this crowdfunding fundraiser link with friends and family.
        </p>

      </div>
      {/* Donation Section with Carousel */}
      <section className="donation-section">
        <div className="donation-box ">
          <h2>Support Aasif To Recover From T-Lymphoblastic Lymphoma (Cancer)</h2>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            interval={3000}
            centerMode={true}
          >
            {patientImages.map((image, index) => (
              <div key={index} className="img-container">
                <img src={windowWidth < 768 ? image.smallSrc : image.src} alt={image.alt} className="patient-image" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='donation-gateway'>
            {/* <div className="logo">
              <img className="donate_logo" src={donate} alt="donate logo" />
              <h1>Donate</h1>
            </div>
            <div className="qr-code">
              <img src={Qr} alt="QR Code" />
            </div>
            <p className="donate-instructions">Or donate using any Trust</p>
            <a href="upi://pay?pa=kishoreselvaraj2004@oksbi&cu=INR&am=100" target="_blank">
              <button className="donate-button">Donate Now</button>
            </a>
            
            <div className="social-icons">
              
            </div> */}
          
              {/* <BankDetails /> */}
            
          </div>
      </section>
      {/* Verification Section */}
      <section className="verification-section">
        <div>
          
        <h3>Verification</h3>
        <br />
        <ul>
          <li> <span><img src={verified} className='verified' alt="" /></span>Supporting documents: <span className="verified">Verified</span> (Verified Bills, Estimation Letter of Aasif's treatment)</li>
          <li><span><img src={verified} className='verified' alt="" /></span>Medical cause: <span className="verified">Verified</span> (Verified with Cmc Hospital, Vellore, Tamil Nadu)</li>
          <li><span><img src={verified} className='verified' alt="" /></span>KYC documents: <span className="verified">Verified</span> (Verified Government ID proofs and bank details of ABBAS SHEIKH AMITH, Aasif’s father)</li>
          <li><span><img src={verified} className='verified' alt="" /></span>Fund utilization: <span className="verified">Verified</span> (Funds have been transferred against Bills, Estimation Letter)</li>
        </ul>
        </div>
        <img src={charity} alt="Charity" className="charity-image" />
      </section>

      <section className="foundation-info">
        
        <div className='donation-content'>
          <h2 style={{color:"#154166", }}>About Habulus Foundation</h2>
        <p>
          The Habulus Foundation, established in 2023, was created with a mission to make a meaningful difference in the lives of people facing various challenges. In its first year, the foundation has supported over 15 individuals, helping them overcome obstacles and achieve their goals without the worry of financial burdens. Every contribution made by the Habulus Foundation reflects a strong commitment to uplifting communities and building a brighter future. Through this support, individuals have found new paths to success, sparking inspiration and hope for others around them. 
        <br />
        Beyond its initial efforts, the foundation has extended its reach to offer compassionate assistance to many others in need. Whether providing essential resources or financial aid for urgent matters, Habulus Foundation has helped people overcome difficulties that once felt insurmountable. Their work is more than financial support; it’s a beacon of hope and a reminder that compassionate communities have the power to lift individuals in times of hardship. With each initiative, the foundation continues to grow its impact, dedicated to enhancing lives and empowering those it touches.
        </p></div>
        
        
      </section>
      <div>
      <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            interval={3000}
            centerMode={true}
          >
            {habulusFoundation.map((image, index) => (
              <div key={index} className="img-container">
                <img src={windowWidth < 768 ? image.smallSrc : image.src} alt={image.alt} className="patient-image" />
              </div>
            ))}
          </Carousel>
      </div>

      

      
    </div>
  );
}

export default Trust;
