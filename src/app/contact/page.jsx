"use client"

import React, { useContext, useEffect, useRef } from 'react'
import { StateContext } from '../Components/Shared/StateProvider';
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import ContactForm from './components/ContactForm';
import Typed from 'typed.js';

export default function Contact() {
  const { setPathName } = useContext(StateContext);
  const typedEmail = useRef(null);
  const typedPhone = useRef(null);
  const typeAddress = useRef(null);

  useEffect(() => {
    setPathName("/contact")
  }, [])

  useEffect(() => {
    const options = {
      strings: ['muhammadsabbirkhanalif@gm...'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const typed = new Typed(typedEmail.current, options)

    return () => {
      typed.destroy();
    }
  }, [])

  useEffect(() => {
    const options = {
      strings: ['+8801331024652'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const typed = new Typed(typedPhone.current, options)

    return () => {
      typed.destroy();
    }
  }, [])

  useEffect(() => {
    const options = {
      strings: ['Dhaka(Tongi), Bangladesh'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const typed = new Typed(typeAddress.current, options)

    return () => {
      typed.destroy();
    }
  }, [])
  return (
    <div className='grid grid-cols-3 mt-4 gap-4'>
      <div className='bg-local rounded-xl p-4 space-y-3 self-start'>
        <h2 className='font-semibold text-3xl text-white text-center'>Contact Info</h2>
        {/* Contact informations starting from here */}
        <div className='flex items-center space-x-2'>
          <div className='p-2 bg-white rounded-md'>
            <MdEmail size={24} />
          </div>
          <div>
            <h3 className='font-semibold text-[#FFD1DC]'>MAIL US</h3>
            <p className='text-white tooltip' data-tip="muhammadsabbirkhanalif@gmail.com"><span ref={typedEmail}></span></p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='p-2 bg-white rounded-md'>
            <FaMobileAlt size={24} />
          </div>
          <div>
            <h3 className='font-semibold text-[#FFD1DC]'>CONTACT US</h3>
            <p className='text-white'><span ref={typedPhone}></span></p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='p-2 bg-white rounded-md'>
            <FaLocationDot size={24} />
          </div>
          <div>
            <h3 className='font-semibold text-[#FFD1DC]'>LOCATION</h3>
            <p className='text-white'><span ref={typeAddress}></span></p>
          </div>
        </div>
        <br /><br />
        <h2 className='font-semibold text-3xl text-white text-center'>Social Contacts</h2>
        <div className='flex items-center justify-center space-x-4'>
          <Link className='text-white tooltip' data-tip="LinkedIn" href="https://www.linkedin.com/in/muhammadsabbirkhanalif/" target={"_blank"}><FaLinkedin size={25} ></FaLinkedin></Link>
          <Link className='text-white tooltip' data-tip="GitHub" href="https://github.com/sabbir990" target="_blank"><FaGithub size={25} /></Link>
        </div>
      </div>
      <div className='col-span-2'>
        <ContactForm />
      </div>
    </div>
  )
}
