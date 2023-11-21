import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Feature = () => {
    return (
        <div className='flex flex-row max-container padding-container border-2 border-gray-10 py-10 '>
            <div className='feature-phone' />
            <div className='md:flex hidden '>
                <div className='feature-phone' />
            </div>
            <div>
                <div className='relative z-20'>
                    <Image
                        src="camp.svg"
                        alt="camp"
                        width={35}
                        height={30}
                        className='absolute top-[-20px]  lg:w-[50px]'
                    />
                    <h1 className='bold-40 lg:bold-64 '>Our Features</h1>
                </div>

                <div className='md:grid grid-cols-2 sm:flex flex-col gap-5'>
                    {FEATURES.map(item => (
                        <div className='flex flex-col gap-5 items-start mt-5'>
                            <div className='rounded-full bg-green-50 p-4'>
                                <Image
                                    src={item.icon}
                                    alt="map"
                                    width={28}
                                    height={28}
                                />
                            </div>
                            <h2 className='bold-20'>{item.title}</h2>
                            <p className='regular-16 text-gray-30 xl:max-w-[520px]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature