"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { StateContext } from './StateProvider'

export default function Footer() {
    const {pathName} = useContext(StateContext)
  return (
    <div className='mt-4 bg-local rounded-t-xl py-16'>
        <h1 className='text-3xl font-semibold text-white text-center'>AlifCodes</h1>
        <div className='flex items-center justify-center space-x-6 mt-4'>
            <Link href={'/'}><span className={`text-white ${pathName === '/' ? 'font-semibold text-[color:#1E90FF]' : ""}`}>Home</span></Link>
            <Link href={'/projects'}><span className={`text-white ${pathName === '/projects' ? 'font-semibold text-[color:#1E90FF]' : ""}`}>Projects</span></Link>
            <Link href={'/contact'}><span className={`text-white ${pathName === '/contact' ? 'font-semibold text-[color:#1E90FF]' : ""}`}>Contact</span></Link>
        </div>
        <p className='text-white text-center mt-4'>© 2024 Alif. All rights reserved.</p>
    </div>
  )
}
