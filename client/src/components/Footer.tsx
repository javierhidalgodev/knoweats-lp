import { BrandLogo } from "./icons/BrandLogo"
import { InstagramIcon } from "./icons/InstagramIcon"
import footerMenus from '../mocks/footer-menus.json'
import { FacebookIcon } from "./icons/FacebookIcon"

const Footer = () => {
    return (
        <footer className='h-auto bg-green'>
            <div className='my-14 px-8 max-w-6xl mx-auto flex flex-col gap-8'>
                <div className="footer__redes flex max-sm:flex-col justify-center items-center gap-4 sm:gap-8">
                    <BrandLogo width={200} />
                    <span className='max-sm:hidden'>|</span>
                    <div className='flex items-center gap-4'>
                        <p className='font-bold'>Síguenos</p>
                        <div className='flex gap-2'>
                            <a href="">
                                <InstagramIcon />
                            </a>
                            <a href="">
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__container flex max-md:flex-col gap-8 flex-wrap [&>div]:pr-6 [&>div]:min-w-[200px] [&_ul>*]:mb-4 [&_ul>*]:leading-5">
                    {
                        footerMenus.map(item =>
                            <div className="footer__section text-balance ">
                                <h4 className="footer__section-title mb-4 font-bold text-xl">{item.header}</h4>
                                <ul className="footer__section-items">
                                    {
                                        item.items.map(menuItem =>
                                            <li className="footer__section-item">
                                                <a href="">{menuItem}</a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='footer__license py-2 bg-teal-950 text-center text-balance'>
                <small>Esta página es una práctica de desarrollo web. Visite la página oficial en <a href='https://knoweats.com/' target='_blank' className='text-teal-500'>knoweats.com</a>.</small>
            </div>
        </footer>
    )
}

export default Footer