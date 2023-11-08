import Image from 'next/image'
import React from 'react'

interface ButtonProps {
    title: string
    type?: "button" | "submit" | "reset" | undefined
    icon?: string
    variant?: string
}

const Button = ({ title, type, icon, variant = "btn_dark_green" }: ButtonProps) => {
    return (
        <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`} >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            {title && <label className='bold-16 whitespace-nowrap'>{title}</label>}
        </button >
    )
}

export default Button