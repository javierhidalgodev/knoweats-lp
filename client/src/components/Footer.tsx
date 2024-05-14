import { BrandLogo } from "./icons/BrandLogo"

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="1 1 22 22"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>

                            </a>
                            <a href="">
                            <svg width="32" height="32" viewBox="1 1 22 22" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#fff" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v16h16V4zm9 8.004h-1.867v-2H13V9a3 3 0 0 1 3-3h1v2h-1a1 1 0 0 0-1 1v1.004h1.982v2H15V18h-2z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__container flex max-md:flex-col gap-8 flex-wrap [&>div]:pr-6 [&>div]:min-w-[200px] [&_ul>*]:mb-4 [&_ul>*]:leading-5">
                    <div className="footer__section text-balance ">
                        <h4 className="footer__section-title mb-4 font-bold text-xl">Empresa</h4>
                        <ul className="footer__section-items">
                            <li className="footer__section-item">
                                <a href="">¿Cómo funciona?</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">¿Quiénes somos?</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Sistema de envíos</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Plastic Neutral</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__section text-balance ">
                        <h4 className="footer__section-title mb-4 font-bold text-xl">Productos y servicios</h4>
                        <ul className="footer__section-items">
                            <li className="footer__section-item">
                                <a href="">Menú de la semana</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Comidas para empresa</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Recargar el monedero</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__section text-balance ">
                        <h4 className="footer__section-title mb-4 font-bold text-xl">Información</h4>
                        <ul className="footer__section-items">
                            <li className="footer__section-item">
                                <a href="">Preguntas frecuentes</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Política de privacidad</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Términos y condiciones de uso</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Aviso legal</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Envíos</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">Devoluciones</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">GDPR Compliance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__section text-balance ">
                        <h4 className="footer__section-title mb-4 font-bold text-xl">Contacto</h4>
                        <ul className="footer__section-items">
                            <li className="footer__section-item">
                                <a href="">Contacta con nosotros</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">info@knoweats.com</a>
                            </li>
                            <li className="footer__section-item">
                                <a href="">¡Pregúntanos por WhatsApp!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer__license py-2 bg-teal-950 text-center text-balance'>
                <small>Esta página es una práctica de desarrollo web. Visite la página oficial en <a href='https://knoweats.com/' target='_blank' className='text-teal-500'>knoweats.com</a>.</small>
            </div>
        </footer>
    )
}

export default Footer