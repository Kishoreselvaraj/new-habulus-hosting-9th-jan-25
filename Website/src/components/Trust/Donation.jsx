import React from 'react'
import Logo from './trustimg/Habulus logo.jpg'
import ResponsiveCarousel from './Carosel'
function Donation() {
  const habulusFoundation = [
    { src: "img/des 2.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 2.png" },
    { src: "img/des 3.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 3.png" },
    { src: "img/des 4.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 4.png" },
    { src: "img/des 5.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 5.png" },
    { src: "img/des 6.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 6.png" },
    { src: "img/des 7.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 7.png" },
    { src: "img/des 8.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 8.png" },
    { src: "img/des 9.png", alt: "Aasif in hospital 4", smallSrc: "img/mob 9.png" },
  ];
  
  return (
    <div className='pt-[60px] m-5 lg:m-10'>
        <div className='flex gap-5'>
          <img 
          src={Logo} 
          alt="Trust logo habulus" 
          className='w-20 lg:w-40'
          />
          <div className='pt-[30px]'>
            <p className='text-2xl lg:text-3xl font-bold text-[#154166]'>Habulus Foundation</p>
            <p className='text-sm font-bold text-[#154166]'>Help the child save the life</p>
          </div>
        </div>
          <br />

        <div>
          <h2 className='text-2xl text-blue-500 font-bold'>About Habulus Foundation</h2>
          
          <p>The Habulus Foundation, established in 2023, was created with a mission to make a meaningful difference in the lives of people facing various challenges. In its first year, the foundation has supported over 15 individuals, helping them overcome obstacles and achieve their goals without the worry of financial burdens. Every contribution made by the Habulus Foundation reflects a strong commitment to uplifting communities and building a brighter future. Through this support, individuals have found new paths to success, sparking inspiration and hope for others around them. 
          Beyond its initial efforts, the foundation has extended its reach to offer compassionate assistance to many others in need. Whether providing essential resources or financial aid for urgent matters, Habulus Foundation has helped people overcome difficulties that once felt insurmountable. Their work is more than financial support; it’s a beacon of hope and a reminder that compassionate communities have the power to lift individuals in times of hardship. With each initiative, the foundation continues to grow its impact, dedicated to enhancing lives and empowering those it touches.</p>
          <br />
          
          <h2 className='text-2xl text-blue-500 font-bold'>Our Vision</h2>
          
          <p>To create a world where no challenge is insurmountable, and every individual has the support they need to thrive, fostering empowered communities built on hope, compassion, and resilience.</p>
          <br />
          
          <h2 className='text-2xl text-blue-500 font-bold'>Our Mission</h2>
          
          <p>To provide resources, financial aid, and guidance to individuals and communities in need, enabling them to overcome hardships and reach their full potential.</p>
          <br />
          <h2 className='text-2xl text-blue-500 font-bold'>What We Do</h2>
          
          <p><b>Financial Assistance:</b> The foundation provides crucial financial support to individuals and families facing economic hardships, ensuring they can focus on achieving their personal and professional goals. <br />
          <b>Essential Resources:</b> From food and education to healthcare and housing, we ensure basic needs are met for those struggling to access them. <br />
          <b>Community Development:</b> Supporting projects and initiatives that uplift communities, improve living conditions, and foster growth and development.
          Inspiration and Empowerment: Beyond financial aid, the foundation inspires hope, instilling confidence and resilience in those it supports.</p>
          <br />
          <h2 className='text-2xl text-blue-500 font-bold'>Our Impact</h2>
          
          <p>Since its inception, the Habulus Foundation has played a pivotal role in helping individuals find new paths to success. From providing educational opportunities to assisting in urgent healthcare needs, our efforts have transformed lives and sparked inspiration for many. Each story of success strengthens our commitment to continue expanding our reach and impact.</p>
          <br />
          <h2 className='text-2xl text-blue-500 font-bold'>Legal Recognition</h2>
          
          <p>The Habulus Foundation is a legally registered entity, ensuring transparency, accountability, and adherence to all regulatory guidelines. Our foundation operates with the highest standards of governance and ethics, maintaining trust with our donors, partners, and beneficiaries.</p>
          
        </div>
        <div className="p-4">
          <ResponsiveCarousel images={habulusFoundation} />
        </div>
        
    </div>
  )
}

export default Donation