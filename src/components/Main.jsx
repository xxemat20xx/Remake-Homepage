import React from 'react';
import profileImg from '../assets/pic1.png'
export default function Main() {
  const techIcons = [
    { class: 'devicon-html5-plain', alt: 'HTML5' },
    { class: 'devicon-css3-plain', alt: 'CSS3' },
    { class: 'devicon-tailwindcss-plain', alt: 'Tailwind CSS' },
    { class: 'devicon-javascript-plain', alt: 'JavaScript' },
    { class: 'devicon-react-plain', alt: 'React' },
    { class: 'devicon-webpack-plain', alt: 'Webpack' },
    { class: 'devicon-git-plain', alt: 'Git' },
  ];
  const quickLink = [
    { class: 'devicon-linkedin-plain', alt: 'LinkedIn' }, // LinkedIn icon
    { class: 'devicon-github-original', alt: 'GitHub' },  // GitHub icon
  ]
  return (
    <section className="hero bg-gray-900 font-montserrat p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 2xl:p-64 flex flex-wrap w-full">
              <div className="profile-image-container w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                        <img src={profileImg} alt="profileImg" className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mb-5 object-cover max-w-full max-h-full"/>

                      <div className="quicklink-socmed-container flex flex-col justify-center items-center">
                          <div className="line h-32 w-1 bg-orange-500"></div>
                          <div className="quicklink flex flex-col mt-5">
                          {quickLink.map((icon, index) => (
                            <a href="#" className="cursor-pointer" key={index}>
                                <i
                         
                                    className={`devicon ${icon.class} text-3xl mb-3 `}  // Use w-10 for better icon size, avoid text-* classes
                                    aria-label={icon.alt}
                                  />
                            </a>
                          
                          ))}
                        </div>
                      </div>
                  </div>
            <div className="hero-content block text-left w-full md:w-1/2 order-2 md:order-1">
                    <h1 className="text-orange-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 sm:mb-6 md:mb-8 lg:mb-10">
          Raymart S.
        </h1>

              <p className="text-white text-sm">I'm a self-taught web developer passionate about creating interactive and user-friendly web applications. I enjoy tackling challenges, learning new technologies, and continuously improving my skills in front-end development. Soon, I’ll be diving into back-end development as well.</p>
              <button className="rounded-full bg-orange-500 inline p-2 mt-5 text-white hover:bg-orange-800 transition delay-90 duration-300 ease-in-out">More about me →</button>
              <div className="tech-icons-content flex  mt-5">
              {techIcons.map((icon, index) => (
                <i
                  key={index}
                  className={`devicon ${icon.class} text-3xl mr-3`}  // Use w-10 for better icon size, avoid text-* classes
                  aria-label={icon.alt}
                />
              ))}
            </div>
            </div>
        
           
      </section>
  );
}
