import { useEffect, useState } from "react"
import { UserIcon } from "./icons/UserIcon"
import { BrandLogoBG } from "./icons/BrandLogoBG"
import { Cart } from "./icons/Cart"
import { HamburgerMenu } from "./icons/HamburgerMenu"

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)

    // const warningHeight = document.querySelector('.header__warning')?.clientHeight
    
    useEffect(() => {
        addEventListener('scroll', () => {
            scrollY === 0
                ? setScrolled(false)
                : setScrolled(true)
        })
    }, [])

    const handleMenuClick = () => {
        setHamburgerOpen(false)
    }

    return (
        <>
            <header className={`w-full bg-green text-white fixed z-10 duration-100`}>
            <div className={`header__warning p-2 bg-red-700 text-center text-balance ${scrolled ? 'hidden' : ''}`}>
                <small>Esta página es una práctica de desarrollo web. Visite la página oficial en <a href='https://knoweats.com/' target='_blank' className='text-yellow-300'>knoweats.com</a>.</small>
            </div>
                <div className="max-w-[1000px] p-7 mx-auto flex max-md:flex-col-reverse items-center justify-between">
                    <nav id='right-nav' className={`${hamburgerOpen ? 'max-md:block' : 'max-md:hidden'} max-md:py-7 w-full`}>
                        <ul className='relative flex max-md:flex-col gap-5 font-bold [&_li]:relative [&_li]:w-fit'>
                            <li onClick={handleMenuClick}><a href='#tienes-que-probar' >MENÚ DE LA SEMANA</a></li>
                            <li onClick={handleMenuClick}><a href='#come-tres-pasos'>CÓMO FUNCIONA</a></li>
                            <li onClick={handleMenuClick}><a href=''>¿QUIÉNES SOMOS?</a></li>
                            <li onClick={handleMenuClick}><a href='#faqs'>FAQ'S</a></li>
                        </ul>
                    </nav>
                    <nav className='max-md:w-full'>
                        <div className='w-full flex justify-between items-center gap-5 [&_svg:hover]:scale-90 transition-transform [&_svg]:duration-150'>
                            <div className='flex gap-5 items-center'>
                                <button onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                                    <HamburgerMenu />
                                </button>
                                <div className="md:hidden">
                                    <BrandLogoBG width={120} />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <UserIcon />
                                <Cart />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header