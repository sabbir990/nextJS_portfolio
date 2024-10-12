"use client"

import React, { useContext, useEffect, useRef, useState } from 'react'
import { StateContext } from '../Components/Shared/StateProvider'
import trendMart from '../../app/Assets/trendmart.jpg'
import vistaVoyage from '../../app/Assets/vistavoyage.jpg'
import volunteer from '../../app/Assets/volunteer.jpg'
import mediNexus from '../../app/Assets/medinexus.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FiLayout } from "react-icons/fi";
import { FaServer } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";

const projects = [
    {
        name : "MediNexus",
        type : "E-commerce",
        server_site : "https://github.com/sabbir990/MediNexus-server",
        client_site : "https://github.com/sabbir990/MediNexus-client",
        live_site : "https://medinexus-315b1.web.app/",
        thumbnail : mediNexus
    },
    {
        name : "VistaVoyage",
        type : "Tour Management",
        server_site : "https://github.com/sabbir990/VistaVoyage-server",
        client_site : "https://github.com/sabbir990/VistaVoyage-client",
        live_site : "https://vistavoyage-773f8.web.app/",
        thumbnail : vistaVoyage
    },
    {
        name : "TrendMart",
        type : "E-commerce",
        server_site : "https://github.com/sabbir990/TrendMart-server",
        client_site : "https://github.com/sabbir990/TrendMart-client",
        live_site : "https://trendmart-2a783.web.app/",
        thumbnail : trendMart
    },
    {
        name : "Volunteer",
        type : "Service Provider",
        server_site : "https://github.com/sabbir990/assignment-11-server",
        client_site : "https://github.com/sabbir990/assignment-11-client",
        live_site : "https://assignment-11-fc4ce.web.app/",
        thumbnail : volunteer
    }
]

export default function Projects() {
    const {setPathName} = useContext(StateContext);

    useEffect(() => {
        setPathName("/projects")
    }, [])

  return (
    <div className='grid grid-cols-3 gap-4'>
        {
            projects.map((project, index) => {
                return <div key={index} className='p-4 bg-local rounded-xl mt-4 space-y-4'>
                    <Image src={project.thumbnail} alt={project.name} className='rounded-xl' />
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='font-bold text-gray-400'>{project.type}</h3>
                            <p className='font-semibold text-xl text-white'>{project.name}</p>
                        </div>
                        <div className=' flex items-center space-x-4 text-white'>
                            <Link target='_blank' className='tooltip transition duration-300 ease-out hover:-translate-y-1' data-tip="Client Site" href={project.client_site}><FiLayout size={24} /></Link>
                            <Link target='_blank' className='tooltip transition duration-300 ease-out hover:-translate-y-1' data-tip="Server Site" href={project.server_site} ><FaServer size={24} /></Link>
                            <Link target='_blank' className='tooltip transition duration-300 ease-out hover:-translate-y-1' data-tip="Live Site" href={project.live_site}><FaExpandArrowsAlt size={24} /></Link>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}
