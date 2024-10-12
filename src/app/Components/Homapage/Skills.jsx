import React from 'react'
import expressJS from '../../Assets/expressJS.png'
import javascript from '../../Assets/javascript.jpg'
import mongoDB from '../../Assets/mongoDB.png'
import nextJS from '../../Assets/nextJS.png'
import nodeJS from '../../Assets/nodeJS.png'
import reactJS from '../../Assets/reactJS.png'
import tailwind from '../../Assets/tailwind.png'
import Image from 'next/image'

const skills = [
  {
    name : "Tailwind CSS",
    image : tailwind,
    experience : "Expert"
  },
  {
    name : "Javascript",
    image : javascript,
    experience : "Expert"
  },
  {
    name : "ReactJS",
    image : reactJS,
    experience : "Expert"
  },
  {
    name : "MongoDB",
    image : mongoDB,
    experience : "Beginner"
  }, 
  {
    name : "ExpressJS",
    image : expressJS,
    experience : "Beginner"
  },
  {
    name : "NodeJS",
    image : nodeJS,
    experience : "Beginner"
  },
  {
    name : "NextJS",
    image : nextJS,
    experience : "Beginner"
  }
]

export default function Skills() {
  return (
    <div className='mt-4 bg-local rounded-xl p-4'>
        <h2 className='text-white text-center text-2xl font-semibold'>Programming Skills</h2>
        <hr className='w-[60%] mx-auto mt-4' />
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {
              skills.map((skill, index) => {
                return <div key={index} className={`flex items-center justify-center border-2 border-gray-500 space-x-4 bg-white p-4 rounded-xl ${index === skills.length - 1 && "col-span-3 flex items-center justify-center space-x-4"}`}>
                  <Image className={`w-[80px] ${index === 2 && "animate-spin duration-900"}`} src={skill.image} alt={skill.name} />
                  <div>
                    <h3 className='font-semibold'>{skill.name}</h3>
                    <p className='text-gray-600'>{skill.experience}</p>
                  </div>
                </div>
              })
            }
        </div>
    </div>
  )
}
