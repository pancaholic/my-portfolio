"use client";

import React, { useRef, useState} from 'react';
import HeroSection from './HeroSection'
import GithubIcon from "/public/images/github-icon.svg";
import emailjs from '@emailjs/browser';
import LinkedinIcon from '/public/images/linkedin-icon.svg';
import InstagramIcon from '/public/images/instagram.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5jq7k5s', 'template_gbbbual', form.current, 'C8NCz9_iRJYNrj90G')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          e.target.reset();
          setEmailSubmitted(true);
      }, (error) => {
          console.log(error.text);
    });
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-2 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I&apos;m currently looking for new opportunities, feel free to send me a message
                my inbox is always open. I try my best to get back at you!
            </p>
            <p className="text-[#ADB7BE] mb-4 max-w-md font-bold">
                Phone: +6281382338757
            </p>
            
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/pancaholic">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/putra-panca-a19403224/">
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>
                <Link href="https://www.instagram.com/_putrapanca_/">
                    <Image src={InstagramIcon} alt="Instagram Icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col" ref={form} onSubmit={sendEmail} >
                <div className="mb-6">
                    <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                        Name
                    </label>
                    <input 
                    name="user_name"
                    type="text" 
                    id="name" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Your name" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                        Email
                    </label>
                    <input 
                    name="user_email"
                    type="email" 
                    id="email" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="danny@gmail.com" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                        Message
                    </label>
                    <textarea 
                    name="message" 
                    id="message" 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about....."
                    />
                </div>
                <button type="submit" value="Send" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                    Send Message
                </button>
                {
                    emailSubmitted &&(
                        <p className="text-green-500 text-sm mt-2">
                            Email sent succesfully!
                        </p>
                    )
                }
            </form>  
        </div>
    </section>
  )
}

export default EmailSection
