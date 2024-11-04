"use client"

import Link from 'next/link';
import React, { useContext, useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { StateContext } from './StateProvider';

export default function Navbar() {
  const typedTitle = useRef(null);
  const typedHome = useRef(null);
  const typedProjects = useRef(null);
  const typedContact = useRef(null);
  const {pathName} = useContext(StateContext);

  useEffect(() => {
    const optionsTitle = {
      strings: ['AlifCodes'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const typed = new Typed(typedTitle.current, optionsTitle)

    return () => {
      typed.destroy();
    }

  }, [])

  useEffect(() => {
    const options = {
      strings: ['Home'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const typed = new Typed(typedHome.current, options)

    return () => {
      typed.destroy();
    }

  }, [])

  useEffect(() => {
    const options = {
      strings: ['Projects'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const typed = new Typed(typedProjects.current, options)

    return () => {
      typed.destroy();
    }

  }, [])

  useEffect(() => {
    const options = {
      strings: ['Contact'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const typed = new Typed(typedContact.current, options)

    return () => {
      typed.destroy();
    }

  }, [])


  return (
    <div className='flex justify-between px-4 py-6 rounded-xl bg-local text-white mt-2'>
      <div className='flex items-center'>
        <Link href={'/'}><span className='font-semibold text-3xl' ref={typedTitle}></span></Link>
      </div>
      <div className='space-x-6 flex items-center'>
        <Link href={'/'}><span className={pathName === '/' ? "font-semibold text-[#1E90FF]" : ""} ref={typedHome}></span></Link>
        <Link href={'/projects'}><span className={pathName === '/projects' ? "font-semibold text-[#1E90FF]" : ""} ref={typedProjects}></span></Link>
        <Link href={'/contact'}><span className={pathName === '/contact' ? "font-semibold text-[#1E90FF]" : ""} ref={typedContact}></span></Link>
      </div>
      <div className='flex items-center'>
        <Link href={'https://drive.google.com/file/d/14le0NGidp2sKg3ylhlFobSS3wiIWGvWW/view'} target='_blank' className='btn btn-outline rounded-badge text-white'>Resume</Link>
      </div>
    </div>
  )
}
