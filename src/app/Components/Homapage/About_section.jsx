"use client"

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function About_section() {
    const typedAboutMe = useRef(null)
    const aboutMeMarkdown = "Hello! I'm currently pursuing a Diploma in Computer Science and Technology, with a deep passion for web development. My interest in coding sparked from the creativity involved in designing and building web layouts, which quickly evolved into a love for developing interactive, user-centered websites. Through my studies and hands-on projects, I’ve gained valuable experience in web development, continually challenging myself to solve problems and optimize user experiences. Coding, for me, is a way to bridge ideas and functionality, and I thrive on the process of turning concepts into working technology. As I continue to grow in this field, my goal is to deepen my expertise and eventually pursue a career as a software engineer. I’m always excited to learn new technologies and contribute to innovative projects that create meaningful impact."

    useEffect(() => {
        const options = {
            strings: [aboutMeMarkdown],
            typeSpeed: 1,
            backSpeed: 25,
            backDelay: 1000,
            loop: false,
        };

        const typed = new Typed(typedAboutMe.current, options);

        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <div className='bg-local rounded-xl p-4 text-white space-y-2'>
            <h2 className='font-semibold text-center text-2xl text-white'>About me</h2>
            <hr className='w-[60%] mx-auto' />
            <div className='mt-4'>
                <span className='mt-4' ref={typedAboutMe}></span>
            </div>
        </div>
    )
}
