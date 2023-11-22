import Image from 'next/image'
import React from 'react'

const Guide = () => {
    return (
        <section className='flexCenter flex-col'>

            <div className=' padding-container max-container w-full pb-24'>
                <Image
                    src="camp.svg"
                    alt="camp"
                    width={50}
                    height={50}
                />
                <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>We are here for you</p>
                <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
                    <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You to Easy Path</h2>
                    <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
                        Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
                    </p>
                </div>

            </div>
            <div className='flexCenter max-container relative w-full '>
                <Image

                    src={"/boat.png"}
                    alt={"boat"}
                    width={1440}
                    height={580}
                    className='w-full object-cover object-center 2xl:rounded-5xl'
                />
                <div className='absolute md:top-[20%] md:left-[10%] top-auto bottom-auto left-auto right-auto min-h-[200px] min-w-[250px] p-4 flex flex-row bg-white rounded-2xl shadow-xl '>
                    <div className='flex '>

                    </div>
                    <div className='flex flex-1 flex-col justify-between h-["100%]'>
                        <div>
                            <div className='flex flex-row justify-between' >
                                <p>Destinaton</p>
                                <p>
                                    48min
                                </p>
                            </div>
                            <p>Aguas Calientes</p>
                        </div>
                        <div>
                            <p>Start track</p>
                            <p>Wonorejo Pasuruan</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Guide