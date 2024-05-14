import comeBien1 from '../assets/Mesa_de_trabajo_2.svg'
import comeBien2 from '../assets/Mesa_de_trabajo_2_1.svg'
import comeBien3 from '../assets/Mesa_de_trabajo_2_2.svg'

const ComeBien = () => {
    return (
        <section id='come-tres-pasos' className='mx-auto pt-28 lg:px-2 max-w-5xl flex max-lg:flex-col gap-6'>
            <div className='p-10 flex flex-col items-center lg:rounded-2xl bg-[#ecf1ee]'>
                <h3 className='come-tres-pasos__title w-fit mb-5 text-4xl font-extrabold text-balance text-center'>Come bien en tres pasos</h3>
                <div className='flex flex-wrap justify-center [&>div]:p-4 [&>div]:min-w-[250px]'>
                    <div className="come-tres-pasos__card flex flex-col items-center basis-1/3">
                        <img src={comeBien1} alt="" className='come-tres-pasos__card-img w-[150px]' />
                        <h4 className='come-tres-pasos__card-title text-2xl font-bold'>1. Elige</h4>
                        <p className='come-tres-pasos__card-description text-center text-balance'>Nuestros chefs cocinan para ti, una carta nueva cada semana.</p>
                    </div>
                    <div className="come-tres-pasos__card flex flex-col items-center basis-1/3">
                        <img src={comeBien2} alt="" className='come-tres-pasos__card-img w-[150px]' />
                        <h4 className='come-tres-pasos__card-title text-2xl font-bold'>2. Recibe</h4>
                        <p className='come-tres-pasos__card-description text-center text-balance'>Te lo enviamos a domicilio en transporte refrigerado.</p>
                    </div>
                    <div className="come-tres-pasos__card flex flex-col items-center basis-1/3">
                        <img src={comeBien3} alt="" className='come-tres-pasos__card-img w-[150px]' />
                        <h4 className='come-tres-pasos__card-title text-2xl font-bold'>3. Calienta</h4>
                        <p className='come-tres-pasos__card-description text-center text-balance'>Tu comida aguantará 8 días en tu nevera y la tendrás lista en 3 minutos.</p>
                    </div>
                </div>
                <button className='main__description-button mt-4 px-8 py-4 max-md:w-full bg-orange text-white text-xl font-bold rounded-lg uppercase hover:bg-opacity-90'>¡A COMER SANO!</button>
            </div>
        </section>
    )
}

export default ComeBien