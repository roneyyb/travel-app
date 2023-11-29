import React from 'react'
import Button from './Button'
import Image from 'next/image'

export const GetApp = () => {
    return (
        <section className=' xl:h-[300px] h-[600px] bg-slate-500'>
            {/* <div className='get-app' /> */}
            <div className='relative z-20 flex md:flex-row flex-col'>
                <div className='flex-1 flex-col flex  justify-center'>

                    <h1 className='bold-40 regular-16'>Get For Free Now</h1>
                    <p className='mt-10'>
                        Available on iOS and Android
                    </p>
                    <div className='flex flex-col lg:flex-row gap-2 mt-10'>
                        <Button type="button" title="App Store" variant="btn_white w-full" icon='../public/apple.svg' />
                        <Button type="button" title="Play Store" variant='btn_dark_green_outline w-full' icon="../public/play.svg" />

                    </div>

                </div>
                <div className='flex-1 flex bg-zinc-900 items-center '>
                    <Image
                        src="/phones.png"
                        alt="phones"
                        width={100}
                        height={100}
                        className='xl:h-[100%] h-[80%] w-[100%] object-contain  xl:object-cover'
                    />
                </div>
            </div>


        </section>
    )
}
