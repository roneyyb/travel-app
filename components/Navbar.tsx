import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from 'next/link'
import React from 'react'
import Button from "./Button"

const NavBar = () => {
    return (
        // Use semantic text as it helps in seo and boosting website rank
        <nav className='flexBetween max-container padding-container relative z-30 py-5'>
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex" >
                {NAV_LINKS.map((link) => <Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} key={link.key}>{link.label}</Link>)}
            </ul>
            <div className="lg:flexCenter hidden" >
                <Button title="Login" icon="/user.svg" />
            </div>
            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                // With display block element always starts with new line and take full width such that next element starts after that only
                // With display inline element dont start with new line but it only takes the necessary space.
                // in both display margin and padding is not respected
                //Compared to display: inline , the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    )
}

export default NavBar