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
    <section className="hero-section bg-gray-500">
            <div className="profile-details">
                <h1 className="text-6xl text-orange-500 font-extrabold mb-4">Raymart S.</h1>
                <p>I'm a self-taught web developer passionate about creating interactive and user-friendly web applications. I enjoy tackling challenges, learning new technologies, and continuously improving my skills in front-end development. Soon, I’ll be diving into back-end development as well.</p>
                <button>More about me</button>
                <h2 className="text-3xl font-bold mt-4 mb-4">Skills:</h2>
                <div className="icon-container flex gap-2">
                      {techIcons.map((icon, index) => (
                        <i key={index} className={`devicon ${icon.class} text-3xl`} aria-label={icon.alt}/>
                          ))}
                </div>
            </div>
            <div className="profile-image-container flex">
                  <img src={profileImg} alt="ProfileImage" />
                  <div className="socmed-quicklink flex flex-col gap-3 justify-center items-center">
                  <div className="h-32 w-1 bg-orange-500"></div>
                  {quickLink.map((icon, index) => (
                                <i
                                    key={index}
                                    className={`devicon ${icon.class} text-3xl mb-3`} 
                                    aria-label={icon.alt}
                                  />
                          ))}
                  </div>
            </div>
      </section>
  );
}