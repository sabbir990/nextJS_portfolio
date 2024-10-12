import Link from 'next/link'
import React from 'react'

export default function Certifications() {
    return (
        <div className='mt-4 space-y-6 bg-local p-4 rounded-xl'>
            <div>
                <h2 className='font-semibold text-white text-2xl'>Certifications</h2>
                <p className='text-gray-500'>2024 - 2024</p>
                <p className='text-white'>Complete Web Development Course by Programming Hero</p>
                <Link target='_blank' className='text-[#32CD32]' href={"https://drive.google.com/file/d/1IlP2bjgw9ab0Yy_08jRMgerLsIAcq_yV/view?usp=drive_link"}>View Certificate</Link>
            </div>
            <div>
                <p className='text-gray-500'>2021 - 2023</p>
                <p className='text-white'>Secondary School Certificate(SSC)</p>
            </div>
        </div>
    )
}
