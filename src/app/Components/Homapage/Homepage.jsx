"use client"
import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react';
import me from '../../Assets/me.jpg';
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from 'typed.js';
import Link from 'next/link';
import Informations from './Informations';
import { StateContext } from '../Shared/StateProvider';
import VideoModal from '../Modal/VideoModal';

export default function Homepage() {
  const typedProfession = useRef(null)
  const { setPathName } = useContext(StateContext)
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  useEffect(() => {
    setPathName("/")
  }, [])

  useEffect(() => {
    const options = {
      strings: ['Welcome to my website!', 'I am a React developer!', 'I am a MERN developer!', "I am a Junior Web Developer!"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedProfession.current, options);

    return () => {
      typed.destroy()
    }
  })
  return (
    <div className='grid auto-rows-[auto] grid-cols-3 mt-4 space-x-4'>
      <div className='bg-local self-start text-white rounded-xl p-4'>
        <div className='relative'>
          <div className='flex justify-center'>
            <Image src={me} className='rounded-full w-[200px] h-[180px] border-2 border-white' />
          </div>
          <button onClick={() => open()} className='absolute bottom-0 left-24 transition ease-out duration-300 rounded-full bg-red-500 text-4xl hover:-translate-y-2'>
            <FaRegCirclePlay />
          </button>
          <VideoModal isOpen={isOpen} open={open} close={close} />
        </div>
        <div className='mt-6 space-y-2'>
          <h1 className='font-semibold text-center text-2xl'>Muhammad Sabbir Khan Alif</h1>
          <p className='font-semibold text-[#E0FFFF] flex items-center justify-center space-x-1'><MdEmail /><span>muhammadsabbirkhanalif@gmail.com</span></p>
          <hr className='w-[80%] mx-auto' />
          <div className="flex items-center justify-center h-full">
            <span
              className="text-center text-[#FFD1DC] font-semibold"
              ref={typedProfession}
              style={{ display: 'inline' }}
            />
          </div>
          <hr className='w-[80%] mx-auto' />
          <div className='space-x-2 flex items-center justify-between'>
            <Link href={'https://github.com/sabbir990'} target='_blank'><button className="animate-bounce"><FaGithub size={24} /></button></Link>
            <Link href={'https://www.linkedin.com/in/muhammadsabbirkhanalif/'} target='_blank'><button className='animate-bounce'><FaLinkedin size={24} /></button></Link>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <Informations />
      </div>
    </div>
  );
}
